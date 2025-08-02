import React, { useState } from "react";
import { BiCubeAlt } from "react-icons/bi";
import { CiHome, CiPhone } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { LuShoppingCart } from "react-icons/lu";
import { FiSearch } from "react-icons/fi"; // ✅ Added
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/", icon: <CiHome className="mt-1" /> },
    { name: "Rooms", to: "/rooms", icon: <BiCubeAlt className="mt-1" /> },
    { name: "Restaurant", to: "/resturant", icon: <LuShoppingCart className="mt-1" /> },
    { name: "Tariff", to: "/tariff", icon: <BiCubeAlt className="mt-1" /> },
    { name: "Gallery", to: "/gallery", icon: <TfiGallery className="mt-1" /> },
    { name: "Contact", to: "/contact", icon: <CiPhone className="mt-1" /> },
  ];

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://amanivagatorgoa.com/wp-content/uploads/2020/11/logo1-1.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="hover:text-yellow-400 transition duration-300 text-sm font-semibold tracking-wide flex items-center gap-1"
            >
              {item.name}
            </Link>
          ))}

          {/* ✅ Search Button */}
          <button className="ml-4 p-2 rounded-full hover:bg-white/10 transition duration-300">
            <FiSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      <div
        className={`md:hidden bg-black px-4 pb-4 transition-all duration-500 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-medium border-b border-gray-700 flex items-center gap-2 hover:text-yellow-400"
          >
            {item.icon} {item.name}
          </Link>
        ))}

        {/* Optional: Mobile search button */}
        <button className="mt-3 flex items-center gap-2 text-sm font-medium text-white hover:text-yellow-400">
          <FiSearch className="text-xl" /> Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
