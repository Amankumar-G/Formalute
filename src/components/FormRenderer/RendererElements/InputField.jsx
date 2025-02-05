import React from "react";

const InputField = ({ field, value, handleChange, error }) => {
  const filteredField = Object.fromEntries(
    Object.entries(field).filter(
      ([key, val]) => val !== "" && val !== null && val !== undefined
    )
  );
  return (
    <div className={`mb-6 ${field.className || ""}`}>
      {field.label && (
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2 DragFormX-Label">
          {field.label}
        </label>
      )}
      <input
        {...filteredField}
        value={value || ""}
        onChange={handleChange}
        autoComplete={field.autoComplete ? "on" : "off"}
        spellCheck={field.spellCheck === true || field.spellCheck === "true"}
        minLength={field.minLength ? parseInt(field.minLength, 10) : undefined}
        maxLength={field.maxLength ? parseInt(field.maxLength, 10) : undefined}
        pattern={field.pattern || undefined}
        className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 DragFormX-input ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <div className="text-red-500 text-sm mt-1 DragFormX-Error">{error}</div>}
    </div>
  );
};

export default InputField;