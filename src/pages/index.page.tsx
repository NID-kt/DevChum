import { useState, useEffect } from "react";
import type { CustomNextPage } from "next";

import { Layout } from "src/layout";
import Navigation from "src/components/navigation";
import LoginWithGithub from "src/components/login-with-github";
import Buddy from "src/components/buddy";
import DurationSetting from "src/components/duration-setting";
import AccountSetting from "src/components/account-setting";

const requestDeviceCode = async () => {
  try {
    const response = await fetch("https://github.com/login/device/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: "Iv1.2f2408d57af672dc",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data as {
      device_code: string;
      user_code: string;
      verification_uri: string;
      expires_in: number;
      interval: number;
    };
  } catch (error) {
    console.error("Error getting device code:", error);
    throw error;
  }
};

const pollForAccessToken = async (deviceCode: string) => {
  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: "Iv1.2f2408d57af672dc",
        device_code: deviceCode,
        grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error polling for access token:", error);
    throw error;
  }
};

const IndexPage: CustomNextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState("");
  const [userCode, setUserCode] = useState<string>();
  const [verificationUri, setVerificationUri] = useState<string>();
  const [currentView, setCurrentView] = useState("buddy");

  const initializeGithubLogin = async () => {
    try {
      const storedData = await chrome.storage.local.get([
        "userCode",
        "verificationUri",
        "deviceCode",
        "interval",
        "expiresAt",
      ]);

      if (
        storedData.userCode &&
        storedData.verificationUri &&
        storedData.deviceCode &&
        storedData.interval &&
        storedData.expiresAt
      ) {
        if (new Date().getTime() < storedData.expiresAt) {
          setUserCode(storedData.userCode);
          setVerificationUri(storedData.verificationUri);
          startPolling(storedData.deviceCode, storedData.interval);
        } else {
          // If expired, request a new code
          await requestNewCode();
        }
      } else {
        // If no stored data, request a new code
        await requestNewCode();
      }
    } catch (error) {
      console.error("Error initializing GitHub login:", error);
    }
  };

  const requestNewCode = async () => {
    const now = new Date().getTime();
    const { device_code, user_code, verification_uri, interval, expires_in } =
      await requestDeviceCode();
    const expiresAt = now + expires_in * 1000;

    await chrome.storage.local.set({
      deviceCode: device_code,
      userCode: user_code,
      verificationUri: verification_uri,
      interval: interval,
      expiresAt: expiresAt,
    });

    setUserCode(user_code);
    setVerificationUri(verification_uri);
    startPolling(device_code, interval);
  };

  const startPolling = (deviceCode: string, interval: number) => {
    const pollInterval = setInterval(async () => {
      console.log("Polling...");
      try {
        const expiresAt = (await chrome.storage.local.get("expiresAt")).expiresAt;
        if (new Date().getTime() >= expiresAt) {
          clearInterval(pollInterval);
          await requestNewCode();
          return;
        }

        const tokenData = await pollForAccessToken(deviceCode);
        if (tokenData.access_token) {
          clearInterval(pollInterval);
          console.log("Access token received:", tokenData.access_token);
          await chrome.storage.local.set({ accessToken: tokenData.access_token });
          setAccessToken(tokenData.access_token);
          await chrome.storage.local.remove([
            "userCode",
            "verificationUri",
            "deviceCode",
            "interval",
            "expiresAt",
          ]);
          setUserCode(undefined);
          setVerificationUri(undefined);
        }
      } catch (error) {
        console.error("Error during polling:", error);
      }
    }, interval * 1000);
  };

  const handleRegenerateCode = async () => {
    await requestNewCode();
  };

  const renderContent = () => {
    switch (currentView) {
      case "buddy":
        return <Buddy />;
      case "duration-setting":
        return <DurationSetting />;
      case "account-setting":
        return <AccountSetting accessToken={accessToken} setAccessToken={setAccessToken} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    chrome.storage.local.get(["accessToken"], (result) => {
      setAccessToken(result.accessToken);
      if (!result.accessToken) {
        console.log("accessToken is not set");
        initializeGithubLogin();
      }
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!accessToken) {
    return (
      <LoginWithGithub
        userCode={userCode}
        verificationUri={verificationUri}
        handleRegenerateCode={handleRegenerateCode}
      />
    );
  }

  return (
    <>
      {renderContent()}
      <Navigation onNavigate={setCurrentView} />
    </>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
