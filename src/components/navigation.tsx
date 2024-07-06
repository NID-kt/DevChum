const Navigation = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  return (
    <nav className="text-center text-xs">
      <ul className="list-none flex mt-4 w-60">
        {[
          { name: "Buddy", image: "./images/pad.png", view: "buddy" },
          { name: "Duration", image: "./images/grave.png", view: "duration-setting" },
          { name: "Account", image: "./images/person.png", view: "account-setting" },
        ].map((item, index) => (
          <li
            key={item.view}
            className={`w-20 h-20 pt-4 border-solid border-gray-300 border items-center border-collapse cursor-pointer
              ${index === 0 ? "rounded-l-xl" : index === 2 ? "rounded-r-xl" : ""}`}
            onClick={() => onNavigate(item.view)}
          >
            <img src={item.image} alt={item.name} className="w-9 h-9 m-auto" />
            <p className="text-center text-xs">{item.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
