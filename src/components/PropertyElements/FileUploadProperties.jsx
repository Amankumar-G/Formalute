import React, { useState } from 'react';
import InputField from "./InputField";  // Assuming you have this InputField component
import Toggle from './Toggle';          // Assuming you have this Toggle component
import Header from "./Header";         // Assuming you have this Header component

const FileUploadProperties = ({ activeElement, handleDone }) => {
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    accept: activeElement.accept || ".jpg,.jpeg,.png,.pdf",
    multiple: activeElement.multiple || false,
    sizeLimit: activeElement.sizeLimit || 10, // in MB
  });

  const handleFieldChange = (field, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col px-6 py-4 space-y-8">
      <Header
        title={`Type: File Upload`}
        buttonText="DONE"
        onClick={() => handleDone(formDetails)}
      />
      
      {/* General Properties (label & required toggle) */}
      <div className="flex items-center space-x-8">
        <InputField
          id="label"
          label="LABEL"
          placeholder="Enter label"
          value={formDetails.label}
          onChange={handleFieldChange}
        />
        <Toggle   
          id="required"
          label="REQUIRED FIELD"
          checked={formDetails.required}
          onChange={handleFieldChange}
        />
      </div>

      {/* Basic Properties */}
      <InputField
        id="accept"
        type="text"
        label="ACCEPT (File types)"
        placeholder="Enter accepted file types (e.g., .jpg,.png,.pdf)"
        value={formDetails.accept}
        onChange={handleFieldChange}
      />

      {/* Toggle for multiple file selection */}
      <div className="flex items-center space-x-8">
        <label className="font-medium">Allow Multiple Files</label>
        <Toggle   
          id="multiple"
          checked={formDetails.multiple}
          onChange={handleFieldChange}
        />
      </div>

      {/* File Size Limit */}
      <InputField
        id="sizeLimit"
        type="number"
        label="SIZE LIMIT (MB)"
        placeholder="Enter size limit in MB"
        value={formDetails.sizeLimit}
        onChange={handleFieldChange}
      />

    </div>
  );
};

export default FileUploadProperties;
