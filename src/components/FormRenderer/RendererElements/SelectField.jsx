import React from 'react';

const SelectField = ({ field, value, handleChange }) => {
  const isMultiple = field.multiple;

  return (
    <div key={field.id} className="mb-6">
      {field.label && (
        <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
          {field.label}
        </label>
      )}
      <select
        {...field}
        value={isMultiple ? value || [] : value || ''}
        onChange={handleChange}
        className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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

export default SelectField;
