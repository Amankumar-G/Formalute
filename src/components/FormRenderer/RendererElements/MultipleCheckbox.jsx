import React from "react";

const MultipleCheckbox = ({
  field,
  value,
  handleChange,
  error,
  PREFIX = "formalute", // Default prefix value
}) => (
  <div key={field.id} className={`mb-6 ${PREFIX}-Checkbox-Container ${field.classname || ""}`}>
    <label className={`block text-sm font-medium text-gray-700 mb-2 ${PREFIX}-Label`}>
      {field.label}
    </label>

    {field.options.map((option) => (
      <div key={option.value} className={`flex items-center mb-3 ${PREFIX}-Checkbox-Option`}>
        <input
          type="checkbox"
          id={`${field.id}-${option.value}`}
          name={field.name}
          value={option.value}
          checked={value?.includes(option.value) || false}
          onChange={handleChange}
          data-type="multiple-checkbox"
          className={`mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 ${PREFIX}-Checkbox-Input`}
          required={field.required}
        />
        <label
          htmlFor={`${field.id}-${option.value}`}
          className={`text-sm text-gray-800 ${PREFIX}-Checkbox-Text`}
        >
          {option.text}
        </label>
      </div>
    ))}

    {field.description && (
      <p className={`text-xs text-gray-600 mt-2 ${PREFIX}-Checkbox-Description`}>
        {field.description}
      </p>
    )}
    {error && <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>{error}</div>}
  </div>
);

export default MultipleCheckbox;
