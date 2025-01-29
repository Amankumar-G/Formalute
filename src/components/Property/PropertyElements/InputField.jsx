import React from "react";

const InputField = ({ type, id, label, placeholder, value, onChange }) => (
  <div className="flex flex-col w-full max-w-md">
    {/* Label */}
    <label
      htmlFor={id}
      className="text-sm font-medium text-gray-800 mb-2"
    >
      {label}
    </label>

    {/* Input */}
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className="block w-full px-4 py-3 rounded-lg shadow-sm bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-500 sm:text-sm transition-all duration-200 ease-in-out"
    />
  </div>
);

export default InputField;
