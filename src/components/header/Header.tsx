import { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaHashtag,
  FaShoePrints,
  FaEnvelope,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";
import logo from "../../assets/baytic-removebg-preview.png";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-300 ${
        scrolling
          ? "bg-white text-black py-2"
          : "bg-transparent text-white py-4"
      }`}
    >
      {/* Left Icons */}
      <div className="flex items-center gap-4">
        <FaSearch className="text-xl cursor-pointer hover:text-gray-500 transition" />
        <FaMapMarkerAlt className="text-xl cursor-pointer hover:text-gray-500 transition" />
        <FaHashtag className="text-xl cursor-pointer hover:text-gray-500 transition" />
      </div>

      {/* Center Logo */}
      <div className="text-xl font-serif font-bold flex-grow text-center flex items-center justify-center">
        <img
          src={logo}
          alt="logo"
          className={`rounded-full shadow-lg transition-all duration-300 ${
            scrolling ? "w-12 h-12 bg-black" : "w-20 h-20"
          }`}
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <FaShoePrints className="text-xl cursor-pointer hover:text-gray-500 transition" />
        <FaEnvelope className="text-xl cursor-pointer hover:text-gray-500 transition" />
        <FaUser className="text-xl cursor-pointer hover:text-gray-500 transition" />
        <FaShoppingBag className="text-xl cursor-pointer hover:text-gray-500 transition" />
      </div>
    </nav>
  );
};

export default Header;
