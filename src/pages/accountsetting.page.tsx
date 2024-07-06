import { CustomNextPage } from "next";
import { useState, useEffect } from "react";

import { Layout } from "src/layout";
import mockSampleCase from "../../public/mockData.json";
import { MockData } from "src/types/accountsetting";
import Navigation from "src/components/navigation";

const mockData: MockData = mockSampleCase;

const AccountSettingPage: CustomNextPage = () => {
  const [accessToken, setAccessToken] = useState("");
  const [githubUser, setGithubUser] = useState<{ login: string; avatar_url: string } | null>(null);

  useEffect(() => {
    chrome.storage.local.get(["accessToken"], (result) => {
      setAccessToken(result.accessToken);
      if (result.accessToken) {
        fetchGithubUser(result.accessToken);
      }
    });
  }, []);

  const fetchGithubUser = async (token: string) => {
    try {
      const response = await fetch("https://api.github.com/user", {
        headers: { Authorization: `token ${token}` },
      });
      if (response.ok) {
        const userData = await response.json();
        setGithubUser(userData);
      }
    } catch (error) {
      console.error("Failed to fetch GitHub user:", error);
    }
  };

  const handleRemoveToken = () => {
    chrome.storage.local.remove(["accessToken"], () => {
      setAccessToken("");
    });
  };

  return (
    <>
      <div className="pb-4 w-60 h-72 border-b border-gray-300">
        <h1 className="text-xl font-bold whitespace-nowrap mb-2 border-b border-gray-300">
          Account
        </h1>
        <div className="p-4 w-60 h-60 border border-gray-500 rounded-lg flex flex-col justify-center">
          {githubUser && (
            <div className="flex flex-col items-center mb-4">
              <img
                src={githubUser.avatar_url}
                alt={`${githubUser.login}'s avatar`}
                width={64}
                height={64}
                className="rounded-full mb-2"
              />
              <p className="text-center">
                Logged in as: <strong>{githubUser.login}</strong>
              </p>
            </div>
          )}
          <button
            onClick={handleRemoveToken}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
      {/* <Navigation /> */}
    </>
  );
};

export default AccountSettingPage;

AccountSettingPage.getLayout = Layout;
