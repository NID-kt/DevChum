import type { CustomNextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Layout } from "src/layout";

// chrome APIを使用するためdynamic importし、browser側でのみ読み込まれるようにする
const Button = dynamic(
  async () => {
    const module = await import("src/components/Button");
    return module.Button;
  },
  {
    ssr: false,
    loading: () => {
      return <div className="w-10 h-4 bg-gray-100 rounded border animate-pulse"></div>;
    },
  },
);

const IndexPage: CustomNextPage = () => {
  return (
    <div className="w-80 h-80">
      <h1 className="text-2xl font-bold whitespace-nowrap">Your buddy</h1>
      <img src="/image/buddy.png" alt="buddy" className="w-40 h-40" />
      <div></div>
      <nav className="text-center text-xs">
        <ul className="list-none flex">
          <Link href="/BuddySelect">
            <li className="px-4 py-3 border-solid border-gray-300 border-2 first:rounded-l-xl">
              <img src="/image/pad.png" alt="buddyselect" />
              <p>Buddy</p>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
