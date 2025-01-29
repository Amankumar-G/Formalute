import React from "react";

const InputField = ({ field, value, handleChange }) => {
  const filteredField = Object.fromEntries(
    Object.entries(field).filter(
      ([key, val]) => val !== "" && val !== null && val !== undefined
    )
  );

  return (
    <div key={field.id} className="mb-6">
      {/* Label with professional style */}
      {field.label && (
        <label
          htmlFor={field.id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {field.label}
        </label>
      )}

      {/* Input field with smooth focus transition and rounded corners */}
      <input
        {...filteredField}
        value={value || ""}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
      />
    </div>
  );
};

export default InputField;
