import React from "react";

const MultipleRadio = ({ field, value, handleChange,error }) => (
  <div key={field.id}  className={`mb-6 DragFormX-Radio-Container ${field.className}`}>
    <label className="block text-sm font-medium text-gray-700 mb-2 DragFormX-Label">
      {field.label}
    </label>

    {field.options.map((option) => (
      <div key={option.value} className="flex items-center mb-3 DragFormX-Radio-Option">
        <input
          type="radio"
          id={`${field.id}-${option.value}`}
          name={field.name}
          value={option.value}
          checked={value === option.value || false}
          onChange={handleChange}
          data-type="multiple-radio"
          className={`mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded-full focus:ring-indigo-500 DragFormX-Radio-Input ${error ? "border-red-500" : ""
        }`}
          required={field.required}
        />

        <label htmlFor={`${field.id}-${option.value}`} className="text-sm text-gray-800 DragFormX-Radio-Text">
          {option.text}
        </label>
      </div>
    ))}

    {field.description && (
      <p className="text-xs text-gray-600 mt-2 DragFormX-Radio-Description">
        {field.description}
      </p>
    )}
    {error && <div className="text-red-500 text-sm mt-1 DragFormX-Error">{error}</div>}

  </div>
);

export default MultipleRadio;
