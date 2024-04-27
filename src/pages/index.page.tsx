import type { CustomNextPage } from "next";
//import dynamic from "next/dynamic";
import Link from "next/link";
import { Layout } from "src/layout";

// chrome APIを使用するためdynamic importし、browser側でのみ読み込まれるようにする
// const Button = dynamic(
//   async () => {
//     const module = await import("src/components/Button");
//     return module.Button;
//   },
//   {
//     ssr: false,
//     loading: () => {
//       return <div className="w-10 h-4 bg-gray-100 rounded border animate-pulse"></div>;
//     },
//   },
//);

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <div className="pb-4 border-b border-glay-300">
        <h1 className="text-xl font-bold whitespace-nowrap">Your buddy</h1>
        <img src="./images/buddy/gif0047.gif" alt="buddy" className="w-56 h-56" />
      </div>
      <nav className="text-center text-xs">
        <ul className="list-none flex mt-4">
          <Link href="/BuddySelect">
            <li className="w-20 h-20 px-4 py-3 border-solid border-gray-300 border rounded-l-xl item-center border-collapse">
              <img src="./images/pad.png" alt="buddyselect" />
              <p className="text-center">Buddy</p>
            </li>
          </Link>
          <Link href="/DurationSetting">
            <li className="w-20 h-20 px-4 py-3 border-solid border-gray-300 border item-center border-collapse">
              <img src="./images/grave.png" alt="buddyselect" />
              <p className="text-center">Duration</p>
            </li>
          </Link>
          <Link href="/AccountSetting">
            <li className="w-20 h-20 px-4 py-3 border-solid border-gray-300 border rounded-r-xl item-center border-collapse">
              <img src="./images/person.png" alt="buddyselect" />
              <p className="text-center">Account</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
