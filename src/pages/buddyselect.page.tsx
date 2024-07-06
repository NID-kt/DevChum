import type { CustomNextPage } from "next";
//import dynamic from "next/dynamic";

import { Layout } from "src/layout";
import Navigation from "src/components/navigation";

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

const BuddySelectPage: CustomNextPage = () => {
  return (
    <>
      <div className="pb-4 border-b border-gray-300 w-60 h-72">
        <h1 className="text-xl font-bold whitespace-nowrap mb-2 border-b border-gray-300">
          Your buddy
        </h1>
        <img src="./images/buddy/gif0047.gif" alt="buddy" className="w-60 h-60" />
      </div>
      {/* <Navigation /> */}
    </>
  );
};

export default BuddySelectPage;

BuddySelectPage.getLayout = Layout;
