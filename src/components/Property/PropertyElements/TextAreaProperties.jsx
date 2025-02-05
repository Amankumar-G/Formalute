import React, { useState,useEffect } from "react";
import InputField from "./InputField";  // Assuming you have this InputField component
import Toggle from './Toggle';          // Assuming you have this Toggle component
import Header from "./Header";         // Assuming you have this Header component

const TextAreaProperties = ({ activeElement, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    placeholder: activeElement.placeholder || "",
    rows: activeElement.rows || 4,
    cols: activeElement.cols || 50,
    maxlength: activeElement.maxlength || 500,
    name: activeElement.name || "",
    className: activeElement.className || "", 
    errorMessage: activeElement.errorMessage || "",
  });
  console.log(formDetails.errorMessage)
   useEffect(() => {
      setFormDetails({
        label: activeElement.label || "",
        required: activeElement.required || false,
        placeholder: activeElement.placeholder || "",
        rows: activeElement.rows || 4,
        cols: activeElement.cols || 50,
        maxlength: activeElement.maxlength || 500,
        name: activeElement.name || "",
        className: activeElement.className || "", 
        errorMessage: activeElement.errorMessage || "",
      });
    }, [activeElement]);

  const handleFieldChange = (field, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <div className="bg-gray-100 flex flex-col px-6 py-6 space-y-6 rounded-lg shadow-md">
    <Header
      title={`Type: Textarea`}
      buttonText="DONE"
      onClick={() => handleDone(formDetails)}

    />
    
    {/* General Properties (label & required toggle) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        id="label"
        label="LABEL"
        placeholder="Enter label"
        value={formDetails.label}
        onChange={handleFieldChange}
      />
      <InputField
        id="name"
        label="NAME"
        placeholder="Enter name"
        value={formDetails.name}
        onChange={handleFieldChange}
      />
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Basic Properties */}
      <InputField
        id="placeholder"
        type="text"
        label="PLACEHOLDER"
        placeholder="Enter placeholder"
        value={formDetails.placeholder}
        onChange={handleFieldChange}
      />
      <InputField
      id="className"
      type="text"
      label="Class Name"
      placeholder="Enter Class"
      value={formDetails.className}
      onChange={handleFieldChange}
    />
 </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <Toggle
        id="required"
        label="REQUIRED FIELD"
        checked={formDetails.required}
        onChange={handleFieldChange}
      />
     {formDetails.required && (
          <InputField
            id="errorMessage"
            type="text"
            label="Error Message for Required Field"
            placeholder="Default: This field is required"
            value={formDetails.errorMessage}
            onChange={handleFieldChange}
          />
        )}
    </div>
    {/* Toggle Button for Additional Properties */}
    <button
      className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 shadow-none"
      onClick={() => setShowAdditionalProperties((prev) => !prev)}
    >
      {showAdditionalProperties ? "Hide Additional Properties" : "Show Additional Properties"}
    </button>
  
    {/* Additional Properties Section */}
    {showAdditionalProperties && (
      <div className="grid grid-cols-2 gap-6 mt-4">
        <InputField
          id="rows"
          type="number"
          label="ROWS"
          placeholder="Enter number of rows"
          value={formDetails.rows}
          onChange={handleFieldChange}
        />
        <InputField
          id="cols"
          type="number"
          label="COLS"
          placeholder="Enter number of columns"
          value={formDetails.cols}
          onChange={handleFieldChange}
        />
        <InputField
          id="maxlength"
          type="number"
          label="MAX LENGTH"
          placeholder="Enter maximum length"
          value={formDetails.maxlength}
          onChange={handleFieldChange}
        />
      </div>
    )}
  </div>
  
  );
};

export default TextAreaProperties;
