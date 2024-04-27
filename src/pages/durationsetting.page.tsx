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

const DurationSettingPage: CustomNextPage = () => {
  return (
    <div>
      <div className="pb-4 border-b border-glay-300 w-60 h-72">
        <h1 className="text-xl font-bold whitespace-nowrap">Duration</h1>
        <img src="./images/buddy/gif0047.gif" alt="buddy" className="w-60 h-60" />
      </div>

      <nav className="text-center text-xs">
        <ul className="list-none flex mt-4 w-60">
          <Link href="/buddyselect">
            <li className="w-20 h-20 pt-4 border-solid border-gray-300 border rounded-l-xl item-center border-collapse">
              <img src="./images/pad.png" alt="buddyselect" className="w-9 h-9 m-auto" />
              <p className="text-center text-xs">Buddy</p>
            </li>
          </Link>
          <Link href="/durationsetting">
            <li className="w-20 h-20 pt-4 border-solid border-gray-300 border item-center border-collapse">
              <img src="./images/grave.png" alt="buddyselect" className="w-9 h-9 m-auto" />
              <p className="text-center text-xs">Duration</p>
            </li>
          </Link>
          <Link href="/accountsetting">
            <li className="w-20 h-20 pt-4 border-solid border-gray-300 border rounded-r-xl item-center border-collapse">
              <img src="./images/person.png" alt="buddyselect" className="w-9 h-9 m-auto" />
              <p className="text-center text-xs">Account</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default DurationSettingPage;

DurationSettingPage.getLayout = Layout;
