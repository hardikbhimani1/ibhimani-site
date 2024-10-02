import React from "react";
import iBhimaniLogo from '../images/i-bhimani-Logo-logo.png'

const Header = () => {
  return (
    <header className="bg-gray-900 py-4 px-8 flex items-center justify-between">
      <img
        className="text-2xl logo w-[100px] h-auto"
        src={iBhimaniLogo}
        alt="ibhimani"
      />

      <nav>
        <ul className="flex space-x-6 text-white">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
