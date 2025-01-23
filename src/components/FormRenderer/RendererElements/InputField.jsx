import React from 'react'

const InputField = ({ field, value, handleChange }) => {
    return (
      <div key={field.id} className="mb-4">
        {field.label && <label htmlFor={field.id}>{field.label}</label>}
        <input
          {...field}
          value={value || ''}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    );
  };
  
export default InputField