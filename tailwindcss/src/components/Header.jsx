import "./Header.css";

function Header({ logo, nav_menu }) {
  return (
    <div className="bg-red-50 shadow-md flex justify-between items-center p-4">
      <div className="logo text-xl font-bold">{logo}</div>
      <ul className="nav_menu list-none flex space-x-6">
        {nav_menu.map((name, index) => (
          <li key={index} className="hover:text-red-500 transition-colors">
            <a href={`/${name.toLowerCase()}`} className="text-gray-800">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
