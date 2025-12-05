import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 bg-black text-white flex items-center justify-between px-5">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        MyLogo
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </nav>

      {/* Auth */}
      <div className="flex gap-4">
        <Link to="/register" className="hover:text-gray-300">
          Register
        </Link>
        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
