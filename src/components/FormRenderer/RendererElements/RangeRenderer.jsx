import React from "react";

const RangeRenderer = ({
  field,
  value,
  handleChange,
  error,
  PREFIX = "DragFormX", // Default prefix value
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
    <div key={field.id} className={`mb-6 ${PREFIX}-Range-Container ${field.classname || ""}`}>
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
        type="range"
        value={value || field.min || 0}
        onChange={handleChange}
        className={`w-full mt-2 cursor-pointer bg-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${PREFIX}-Range-Input ${
          error ? "border-red-500" : ""
        }`}
      />

      <div className={`text-sm text-gray-700 mt-2 flex justify-between ${PREFIX}-Range-Value`}>
        <span className={`${PREFIX}-Range-Text`}>Min: {field.min || 0}</span>
        <span className={`${PREFIX}-Range-Text`}>Value: {value}</span>
        <span className={`${PREFIX}-Range-Text`}>Max: {field.max || 100}</span>
      </div>

      {error && (
        <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default RangeRenderer;
