import React, { useState } from "react";
import { FaPlus, FaSave, FaEye, FaClipboardList } from "react-icons/fa"; // Importing icons

const Navbar = ({ handleExpandToggle, handleSave, handleRenderer, handleIsMultiPart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full z-10 bg-white shadow-lg text-gray-800 p-4 flex justify-between items-center rounded-lg border-b-2 border-gray-200">
      {/* Navbar Title */}
      <div className="text-2xl font-semibold tracking-wide text-gray-900">
        Ninja <span className="text-blue-600">JS</span>
      </div>

      {/* Navbar Menu */}
      <div className="hidden md:flex space-x-6">
        <button
          onClick={handleExpandToggle}
          className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-green-500 px-6 py-2 rounded-lg 
             hover:bg-green-100 transition-all duration-300 ease-in-out transform hover:scale-105 
             focus:outline-none focus:ring-2 focus:ring-green-400 
             active:bg-green-200 active:scale-95"
        >
          <FaPlus /> Add Element
        </button>
        <button
          onClick={() => handleIsMultiPart()}
          className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <FaClipboardList /> Multi-Part Form
        </button>
        <button
          onClick={handleRenderer}
          className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-teal-500 px-6 py-2 rounded-lg hover:bg-teal-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <FaEye /> Preview
        </button>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-green-200 active:scale-95"
        >
          <FaSave /> Save
        </button>

      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 bg-transparent p-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-1/2 bg-white shadow-lg rounded-lg p-4">
          <button
            onClick={handleExpandToggle}
            className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-green-500 px-6 py-2 rounded-lg w-full mb-2 hover:bg-green-100 transition-all duration-300 ease-in-out"
          >
            <FaPlus /> Add Element
          </button>
          <button
            onClick={() => handleIsMultiPart()}
            className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-yellow-500 px-6 py-2 rounded-lg w-full mb-2 hover:bg-yellow-100 transition-all duration-300 ease-in-out"
          >
            <FaClipboardList /> Multi-Part Form
          </button>
          <button
            onClick={handleRenderer}
            className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-teal-500 px-6 py-2 rounded-lg w-full mb-2 hover:bg-teal-100 transition-all duration-300 ease-in-out"
          >
            <FaEye /> Preview
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 text-gray-800 bg-transparent border-2 border-blue-500 px-6 py-2 rounded-lg w-full mb-2 hover:bg-blue-100 transition-all duration-300 ease-in-out"
          >
            <FaSave /> Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
