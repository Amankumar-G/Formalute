import React from "react";

const MultipleRadio = ({
  field,
  value,
  handleChange,
  error,
  PREFIX = "Formable", // Default prefix value
}) => (
  <div key={field.id} className={`mb-6 ${PREFIX}-Radio-Container ${field.classname || ""}`}>
    <label className={`block text-sm font-medium text-gray-700 mb-2 ${PREFIX}-Label`}>
      {field.label}
    </label>

    {field.options.map((option) => (
      <div key={option.value} className={`flex items-center mb-3 ${PREFIX}-Radio-Option`}>
        <input
          type="radio"
          id={`${field.id}-${option.value}`}
          name={field.name}
          value={option.value}
          checked={value === option.value || false}
          onChange={handleChange}
          data-type="multiple-radio"
          className={`mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded-full focus:ring-indigo-500 ${PREFIX}-Radio-Input ${error ? "border-red-500" : ""}`}
          required={field.required}
        />

        <label
          htmlFor={`${field.id}-${option.value}`}
          className={`text-sm text-gray-800 ${PREFIX}-Radio-Text`}
        >
          {option.text}
        </label>
      </div>
    ))}

    {field.description && (
      <p className={`text-xs text-gray-600 mt-2 ${PREFIX}-Radio-Description`}>
        {field.description}
      </p>
    )}
    {error && (
      <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>
        {error}
      </div>
    )}
  </div>
);

export default MultipleRadio;
