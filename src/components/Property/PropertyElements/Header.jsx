import React from "react";

const Header = ({ title, buttonText, onClick }) => (
  <div className="flex justify-between items-center">
  <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
  <button
    className="bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 ease-in-out"
    onClick={onClick}
  >
    {buttonText}
  </button>
</div>

);

export default Header;
