import React from "react";

const Toggle = ({ id, label, checked, onChange }) => (
  <div className="flex flex-col w-full">
    <label htmlFor={id} className="text-gray-600 font-medium mb-2">
      {label}
    </label>
    <label
      htmlFor={id}
      className="bg-gray-300 cursor-pointer relative w-12 h-6 rounded-full flex items-center"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
        className="sr-only peer"
      />
      <span className="w-5 h-5 bg-green-300 absolute rounded-full left-1 peer-checked:bg-green-600 peer-checked:left-6 transition-all duration-300"></span>
    </label>
  </div>
);

export default Toggle;
