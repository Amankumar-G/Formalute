import React from 'react'

const FileField = ({ field, handleChange }) => {
    console.log(field)
    return (
    <div key={field.id} className="mb-4">
      {field.label && <label htmlFor={field.id}>{field.label}</label>}
      <input
        {...field}
        onChange={handleChange}
        className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )};
export default FileField