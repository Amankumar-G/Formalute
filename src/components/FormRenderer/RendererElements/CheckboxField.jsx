import React from "react";

const CheckboxField = ({ field, value, handleChange, error, PREFIX = "formalute" }) => {
  const excludedKeys = new Set(["autocomplete", "spellcheck", "minlength", "maxlength", "classname"]);
  const filteredField = Object.fromEntries(
    Object.entries(field).filter(
      ([key, val]) =>
        val !== "" &&
        val !== null &&
        val !== undefined &&
        !excludedKeys.has(key)
    )
  );

  return (
    <div key={field.id} className={`mb-6 ${PREFIX}-CheckboxField-Container ${field.classname || ""}`}>
      {/* Label with styling */}
      <label
        htmlFor={field.id}
        className={`flex items-center space-x-3 text-sm font-medium text-gray-700 ${PREFIX}-Label`}
      >
        {/* Input styling */}
        <input
          {...filteredField}
          checked={value || false}
          onChange={handleChange}
          className={`w-4 h-4 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 ${PREFIX}-checkbox ${error ? "border-red-500" : ""}`}
        />
        {/* Label text styling */}
        <span className="text-gray-700">{field.label}</span>
      </label>
      {error && (
        <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default CheckboxField;
