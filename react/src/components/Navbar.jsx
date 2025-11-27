import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
        w-full fixed top-0 left-0 z-50 
        bg-white/20 backdrop-blur-lg 
        border-b border-white/30 
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="
            text-2xl font-extrabold 
            bg-linear-to-r from-[#00b09b] to-[#11719e]
            bg-clip-text text-transparent
          "
        >
          NewsGeek
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="
              text-white font-medium hover:text-gray-300 
              transition-all duration-200 
            "
          >
            Home
          </Link>

          <Link
            to="/add-blog"
            className="
              px-4 py-2 rounded-full 
              bg-linear-to-r from-[#00b09b] to-[#96deff]
              text-gray-900 font-semibold
              shadow-md hover:opacity-90 
              transition-all duration-200
            "
          >
            Add Blog
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
