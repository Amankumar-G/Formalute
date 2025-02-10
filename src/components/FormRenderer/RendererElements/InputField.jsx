import React from "react";

const InputField = ({
  field,
  value,
  handleChange,
  error,
  PREFIX = "DragFormX", // Default prefix if none is provided
}) => {
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
    <div className={`mb-6 ${field.classname || ""}`}>
      {field.label && (
        <label
          htmlFor={field.id}
          className={`block text-sm font-medium text-gray-700 mb-2 ${PREFIX}-Label`}
        >
          {field.label}
        </label>
      )}
      <input
        {...filteredField}
        value={value || ""}
        onChange={handleChange}
        autoComplete={field.autocomplete === true ? "on" : "off"}
        spellCheck={field.spellcheck === true || field.spellcheck === "true"}
        minLength={field.minlength ? parseInt(field.minlength, 10) : undefined}
        maxLength={field.maxlength ? parseInt(field.maxlength, 10) : undefined}
        pattern={field.pattern || undefined}
        className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${PREFIX}-input ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && (
        <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>{error}</div>
      )}
    </div>
  );
};

export default InputField;
