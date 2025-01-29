import React from "react";

const RangeRenderer = ({ field, value, handleChange }) => {
  return (
    <div key={field.id} className="mb-6"> {/* Increased margin for better spacing */}
      {field.label && (
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
          {field.label} {/* Improved label styling with spacing */}
        </label>
      )}

      <input
        {...field}
        type="range"
        value={value || field.min || 0}
        onChange={handleChange}
        className="w-full mt-2 cursor-pointer bg-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="text-sm text-gray-700 mt-2 flex justify-between">
        <span>Min: {field.min || 0}</span>
        <span>Value: {value}</span>
        <span>Max: {field.max || 100}</span>
      </div>
    </div>
  );
};

export default RangeRenderer;
