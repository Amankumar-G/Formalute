import React from "react";

const MultipleCheckbox = ({ field, value, handleChange }) => (
  <div key={field.id} className="mb-6"> {/* Increased margin for better spacing */}
    <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label> {/* Improved label styling */}

    {field.options.map((option) => (
      <div key={option.value} className="flex items-center mb-3"> {/* Improved spacing */}
        <input
          type="checkbox"
          id={`${field.id}-${option.value}`}
          name={field.name}
          value={option.value}
          checked={value?.includes(option.value) || false}
          onChange={handleChange}
          data-type="multiple-checkbox"
          className="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          required={field.required}
        />
        <label htmlFor={`${field.id}-${option.value}`} className="text-sm text-gray-800">
          {option.text}
        </label>
      </div>
    ))}

    {field.description && (
      <p className="text-xs text-gray-600 mt-2">{field.description}</p> 
    )}
  </div>
);

export default MultipleCheckbox;
