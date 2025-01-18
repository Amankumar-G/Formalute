import React from "react";

const InputField = ({ type,id, label, placeholder, value, onChange }) => (
  <div className="flex flex-col w-3/4">
    <label htmlFor={id} className="text-gray-600 font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(id, e.target.value)}
      className="block w-full h-14 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

export default InputField;
