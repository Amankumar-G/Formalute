import React from 'react';

const SelectField = ({ field, value, handleChange, error, PREFIX = "Formable" }) => {
  const isMultiple = field.multiple;
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
    <div key={field.id} className={`mb-6 ${PREFIX}-Select-Container ${field.classname || ""}`}>
      {field.label && (
        <label htmlFor={field.id} className={`block text-sm font-medium text-gray-700 mb-2 ${PREFIX}-Label`}>
          {field.label}
        </label>
      )}
      <select
        {...filteredField}
        value={isMultiple ? value || [] : value || ''}
        onChange={handleChange}
        className={`w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${PREFIX}-select ${error ? "border-red-500" : ""}`}
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && (
        <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default SelectField;
