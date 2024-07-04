import { CustomNextPage } from "next";
import Link from "next/link";
import { Layout } from "src/layout";
import mockSampleCase from "../../public/mockData.json";
import { MockData } from "src/types/accountsetting";

const handleLoginToGithub = async () => {
  if (typeof window !== "undefined" && typeof chrome !== "undefined") {
    chrome.identity.launchWebAuthFlow(
      {
        interactive: true,
        url: "https://github.com/login/oauth/authorize?client_id=Iv1.2f2408d57af672dc",
      },
      (redirectUrl?) => {
        alert(redirectUrl ?? "error");
      },
    );
  }
};

const mockData: MockData = mockSampleCase;

const AccountSettingPage: CustomNextPage = () => {
  return (
    <div>
      <div className="pb-4 w-60 h-72 border-b border-gray-300">
        <h1 className="text-xl font-bold whitespace-nowrap mb-2 border-b border-gray-300">
          Account
        </h1>
        <div className="p-4 py-14 w-60 h-60 border border-gray-500 rounded-lg">
          <button
            onClick={handleLoginToGithub}
            className="w-auto h-20 text-xl text-center rounded-lg border-2 border-gray-300"
          >
            <p className="">Login to Github</p>
          </button>
        </div>
      </div>
      <nav className="text-xs text-center">
        <ul className="flex mt-4 w-60 list-none">
          <Link href="/buddyselect">
            <li className="items-center pt-4 w-20 h-20 rounded-l-xl border border-gray-300 border-solid border-collapse">
              <img src="./images/pad.png" alt="buddyselect" className="m-auto w-9 h-9" />
              <p className="text-xs text-center">Buddy</p>
            </li>
          </Link>
          <Link href="/durationsetting">
            <li className="items-center pt-4 w-20 h-20 border border-gray-300 border-solid border-collapse">
              <img src="./images/grave.png" alt="buddyselect" className="m-auto w-9 h-9" />
              <p className="text-xs text-center">Duration</p>
            </li>
          </Link>
          <Link href="/accountsetting">
            <li className="items-center pt-4 w-20 h-20 rounded-r-xl border border-gray-300 border-solid border-collapse">
              <img src="./images/person.png" alt="buddyselect" className="m-auto w-9 h-9" />
              <p className="text-xs text-center">Account</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default AccountSettingPage;

AccountSettingPage.getLayout = Layout;
