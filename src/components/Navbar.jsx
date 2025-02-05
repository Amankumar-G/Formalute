import React, { useState } from "react";
import { FaPlus, FaSave, FaEye, FaClipboardList, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ handleExpandToggle, handleSave, handleRenderer, handleIsMultiPart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to close menu when an item is clicked
  const handleMenuClick = (callback) => {
    setIsMenuOpen(false);
    if (callback) callback();
  };

  return (
    <div className="w-full z-50 bg-white shadow-lg text-gray-800 p-3 flex justify-between items-center rounded-lg border-b border-gray-200">
      {/* Navbar Title */}
      <div className="text-lg md:text-2xl font-semibold tracking-wide text-gray-900">
        DragFormX<span className="text-blue-600">-JS</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-4">
        <button
          onClick={() => handleMenuClick(handleExpandToggle)}
          className="flex items-center gap-2 text-gray-800 bg-white border border-green-500 px-4 py-2 rounded-lg hover:bg-green-100 transition"
        >
          <FaPlus /> <span className="hidden sm:inline">Add Element</span>
        </button>
        <button
          onClick={() => handleMenuClick(handleIsMultiPart)}
          className="flex items-center gap-2 text-gray-800 bg-white border border-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-100 transition"
        >
          <FaClipboardList /> <span className="hidden sm:inline">Multi-Part Form</span>
        </button>
        <button
          onClick={() => handleMenuClick(handleRenderer)}
          className="flex items-center gap-2 text-gray-800 bg-white border border-teal-500 px-4 py-2 rounded-lg hover:bg-teal-100 transition"
        >
          <FaEye /> <span className="hidden sm:inline">Preview</span>
        </button>
        <button
          onClick={() => handleMenuClick(handleSave)}
          className="flex items-center gap-2 text-gray-800 bg-white border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FaSave /> <span className="hidden sm:inline">Publish</span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-800 bg-transparent p-2 rounded-lg hover:bg-gray-200 focus:outline-none transition"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white bg-opacity-30 backdrop-blur-lg shadow-xl transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <div className="text-lg font-semibold text-gray-900">Menu</div>
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-800">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col items-center mt-6 space-y-4">
          <button
            onClick={() => handleMenuClick(handleExpandToggle)}
            className="flex items-center gap-2 text-gray-800 bg-white border border-green-500 px-6 py-3 rounded-lg w-3/4 text-center hover:bg-green-100 transition"
          >
            <FaPlus /> Add Element
          </button>
          <button
            onClick={() => handleMenuClick(handleIsMultiPart)}
            className="flex items-center gap-2 text-gray-800 bg-white border border-yellow-500 px-6 py-3 rounded-lg w-3/4 text-center hover:bg-yellow-100 transition"
          >
            <FaClipboardList /> Multi-Part Form
          </button>
          <button
            onClick={() => handleMenuClick(handleRenderer)}
            className="flex items-center gap-2 text-gray-800 bg-white border border-teal-500 px-6 py-3 rounded-lg w-3/4 text-center hover:bg-teal-100 transition"
          >
            <FaEye /> Preview
          </button>
          <button
            onClick={() => handleMenuClick(handleSave)}
            className="flex items-center gap-2 text-gray-800 bg-white border border-blue-500 px-6 py-3 rounded-lg w-3/4 text-center hover:bg-blue-100 transition"
          >
            <FaSave /> Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
