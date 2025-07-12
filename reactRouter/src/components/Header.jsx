import React from 'react';
import { Link } from 'react-router-dom';
import logo from "/src/img/01.png";
function Header()  {
  return (
    <div>
      <nav className="flex flex-wrap justify-between items-center p-4">
           <div className="logo">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <div className="flex flex-wrap gap-4 list-none">
          <li>
            <Link to="/" className="hover:text-orange-500">
              Home``
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-orange-500">
              Services
            </Link>
          </li>
        </div>
      </nav>
    </div>
  )
}

export default Header