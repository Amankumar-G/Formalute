import React from 'react'

const MultipleRadio = ({ field, value, handleChange }) => (
    
    <div key={field.id} className="mb-4">
      <label className="block font-bold mb-2">{field.label}</label>
      {field.options.map((option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
          type="radio"
          id={`${field.id}-${option.value}`}
          name={field.name}
          value={option.value}
          checked={value?.includes(option.value) || false}
          onChange={handleChange} // No need to modify type in the event
          data-type="multiple-radio" // Inform handleChange about the custom type
          className="mr-2"
          required={field.required}
          />
  
          <label htmlFor={`${field.id}-${option.value}`} className="text-sm">
            {option.text}
          </label>
        </div>
      ))}
      {field.description && (
        <p className="text-xs text-gray-600 mt-1">{field.description}</p>
      )}
    </div>
  );

export default MultipleRadio