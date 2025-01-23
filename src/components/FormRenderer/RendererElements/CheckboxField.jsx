import React from 'react'

const CheckboxField = ({ field, value, handleChange }) => (
    <div key={field.id} className="mb-4">
      <label htmlFor={field.id} className="flex items-center">
        <input
          {...field}
          checked={value || false}
          onChange={handleChange}
          className="mr-2"
        />
        <span>{field.label}</span>
      </label>
    </div>
  );

export default CheckboxField