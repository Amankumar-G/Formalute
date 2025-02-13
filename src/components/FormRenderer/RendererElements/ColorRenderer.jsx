import React from "react";

const ColorRenderer = ({ field, value, handleChange, PREFIX = "Formable" }) => {
  const excludedKeys = new Set([
    "autocomplete",
    "spellcheck",
    "minlength",
    "maxlength",
    "classname",
  ]);

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
    <div key={field.id} className={`mb-6 ${PREFIX}-ColorRenderer-Container ${field.classname || ""}`}>
      {/* Label styling */}
      {field.label && (
        <label
          htmlFor={field.id}
          className={`block text-sm font-medium text-gray-700 mb-2 ${PREFIX}-Label`}
        >
          {field.label}
        </label>
      )}

      {/* Color input styling */}
      <input
        {...filteredField}
        value={value}
        onChange={handleChange}
        type="color"
        className={`w-12 h-12 border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${PREFIX}-color`}
      />
    </div>
  );
};

export default ColorRenderer;
