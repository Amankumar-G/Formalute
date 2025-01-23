import React from 'react'


const SelectField = ({ field, value, handleChange }) => {
  const isMultiple = field.multiple;

  return (
    <div key={field.id} className="mb-4">
      {field.label && <label htmlFor={field.id}>{field.label}</label>}
      <select
        {...field}
        value={isMultiple ? value || [] : value || ''}
        onChange={handleChange}
        className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};


export default SelectField