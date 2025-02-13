import React from "react";

const FileField = ({ field, value, handleChange, error, PREFIX = "Formable" }) => {
  const excludedKeys = new Set(["autocomplete", "spellcheck", "minlength", "maxlength", "classname"]);
  const filteredField = Object.fromEntries(
    Object.entries(field).filter(
      ([key, val]) =>
        val !== "" &&
        val !== null &&
        val !== undefined &&
        !excludedKeys.has(key)
    )
  );
  
  // Ensure multiple is a boolean
  const isMultiple = field.multiple === true;

  return (
    <div key={field.id} className={`mb-6 ${PREFIX}-FileField-Container ${field.classname || ""}`}>
      {field.label && (
        <label
          htmlFor={field.id}
          className={`block text-sm font-medium text-gray-700 mb-2 ${PREFIX}-Label`}
        >
          {field.label}
        </label>
      )}
      
      <input
        {...filteredField}
        multiple={isMultiple}
        onChange={handleChange}
        type="file"
        className={`w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${PREFIX}-input ${error ? "border-red-500" : ""}`}
      />
      
      {value && value.length > 0 && (
        <div className={`mt-3 text-sm text-gray-700 ${PREFIX}-FileField-SelectedFiles`}>
          <strong>Selected File{isMultiple ? "s" : ""}:</strong>
          <ul className={`list-disc pl-5 ${PREFIX}-FileField-FileList`}>
            {value.map((file, index) => (
              <li key={index} className={`${PREFIX}-FileField-FileItem text-gray-600`}>
                {file.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && (
        <div className={`text-red-500 text-sm mt-1 ${PREFIX}-Error`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FileField;
