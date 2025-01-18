import React from "react";

const Header = ({ title, buttonText, onClick }) => (
  <div className="flex justify-between items-center">
    <h1 className="text-lg font-bold text-gray-700">{title}</h1>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {buttonText}
    </button>
  </div>
);

export default Header;
