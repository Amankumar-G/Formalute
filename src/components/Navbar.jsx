import React, { useState } from "react";
import { FaPlus, FaSave, FaEye, FaClipboardList } from "react-icons/fa"; // Importing icons
import Notification from "./Notification"; // Importing Notification component

const Navbar = ({ handleExpandToggle, handleSave, handleRenderer, handleIsMultiPart ,notification}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu when an item is clicked
  const handleMenuClick = (callback) => {
    setIsMenuOpen(false);
    if (callback) callback();
  };

  return (
    <div className="w-full z-10 bg-white relative shadow-lg text-gray-800 p-3 flex justify-between items-center rounded-lg border-b-2 border-gray-200">
      {/* Navbar Title */}
      <div className="flex items-center justify-between w-auto">
      <div className="text-lg md:text-2xl font-semibold tracking-wide text-gray-900">
          DragFormX
          <span className="text-blue-600">-JS</span>
      </div>
      {/* {notification && <Notification notification={notification} />} */}
      
      </div>
      {/* Navbar Menu - Desktop */}
      <div className="hidden lg:flex space-x-4">
        <button
          onClick={() => handleMenuClick(handleExpandToggle)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-green-500 px-4 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-green-100 transition duration-300"
        >
          <FaPlus className="text-sm sm:text-base" /> <span className="hidden sm:inline">Add Element</span>
        </button>
        <button
          onClick={() => handleMenuClick(handleIsMultiPart)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-yellow-500 px-4 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-yellow-100 transition duration-300"
        >
          <FaClipboardList className="text-sm sm:text-base" /> <span className="hidden sm:inline">Multi-Part Form</span>
        </button>
        <button
          onClick={() => handleMenuClick(handleRenderer)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-teal-500 px-4 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-teal-100 transition duration-300"
        >
          <FaEye className="text-sm sm:text-base" /> <span className="hidden sm:inline">Preview</span>
        </button>
        <button
          onClick={() => handleMenuClick(handleSave)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-blue-500 px-4 py-1 sm:px-6 sm:py-2 rounded-lg hover:bg-blue-100 transition duration-300"
        >
          <FaSave className="text-sm sm:text-base" /> <span className="hidden sm:inline">Save</span>
        </button>
      </div>

      {/* Hamburger Menu Button - Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 bg-transparent p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`md:hidden absolute top-16 right-2 w-48 bg-white shadow-lg rounded-lg p-2 transition-all duration-300 transform ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => handleMenuClick(handleExpandToggle)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-green-500 px-4 py-2 rounded-lg w-full hover:bg-green-100 transition duration-300"
        >
          <FaPlus /> Add Element
        </button>
        <button
          onClick={() => handleMenuClick(handleIsMultiPart)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-yellow-500 px-4 py-2 rounded-lg w-full hover:bg-yellow-100 transition duration-300"
        >
          <FaClipboardList /> Multi-Part Form
        </button>
        <button
          onClick={() => handleMenuClick(handleRenderer)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-teal-500 px-4 py-2 rounded-lg w-full hover:bg-teal-100 transition duration-300"
        >
          <FaEye /> Preview
        </button>
        <button
          onClick={() => handleMenuClick(handleSave)}
          className="flex items-center gap-2 text-gray-800 bg-transparent border border-blue-500 px-4 py-2 rounded-lg w-full hover:bg-blue-100 transition duration-300"
        >
          <FaSave /> Save
        </button>
      </div>
    </div>
  );
};

export default Navbar;
