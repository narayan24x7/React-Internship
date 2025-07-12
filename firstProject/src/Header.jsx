import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menu">
        <ul className="menuitems">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
