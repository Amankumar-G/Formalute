import React from "react";

const ColorRenderer = ({ field, value, handleChange }) => {
  const filteredField = Object.fromEntries(
    Object.entries(field).filter(([key, val]) => val !== "" && val !== null && val !== undefined)
  );

  return (
    <div key={field.id} className="mb-6">
      {/* Label styling */}
      {field.label && (
        <label
          htmlFor={field.id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {field.label}
        </label>
      )}

      {/* Color input styling */}
      <input
        {...filteredField}
        value={value || "#000000"}
        onChange={handleChange}
        className="w-12 h-12 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        type="color"
      />
    </div>
  );
};

export default ColorRenderer;
