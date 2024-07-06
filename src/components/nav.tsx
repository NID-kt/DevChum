import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="text-center text-xs">
      <ul className="list-none flex mt-4 w-60">
        <li className="w-20 h-20 pt-4 border-solid border-gray-300 border rounded-l-xl items-center border-collapse">
          <Link href="/buddyselect">
            <img src="./images/pad.png" alt="buddyselect" className="w-9 h-9 m-auto" />
            <p className="text-center text-xs">Buddy</p>
          </Link>
        </li>
        <li className="w-20 h-20 pt-4 border-solid border-gray-300 border items-center border-collapse">
          <Link href="/durationsetting">
            <img src="./images/grave.png" alt="buddyselect" className="w-9 h-9 m-auto" />
            <p className="text-center text-xs">Duration</p>
          </Link>
        </li>
        <li className="w-20 h-20 pt-4 border-solid border-gray-300 border rounded-r-xl items-center border-collapse">
          <Link href="/accountsetting">
            <img src="./images/person.png" alt="buddyselect" className="w-9 h-9 m-auto" />
            <p className="text-center text-xs">Account</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
