// Navbar.js
import React from "react";

const Navbar = ({handleExpandToggle,handleSave,handleRenderer,handleAddPartition,handleNavigatePartition,activePartitionIndex,formPartitions}) => {
  return (
    <div className="w-full z-10 bg-gray-700 text-white p-4 flex justify-between items-center shadow-md">
    {/* Navbar Title */}
    <div className="text-lg font-bold">Ninja JS</div>
    
    {/* Navbar Menu */}
    <div className="flex space-x-6">
      <button
        onClick={handleExpandToggle}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
      >
        Add Element
      </button>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Save
      </button>
      <button
        onClick={handleRenderer}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
      >
        Preview
      </button>
    </div>
  </div>
  );
};

export default Navbar;


