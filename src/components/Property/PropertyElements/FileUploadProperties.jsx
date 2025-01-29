import React, { useState,useEffect } from 'react';
import InputField from "./InputField";  // Assuming you have this InputField component
import Toggle from './Toggle';          // Assuming you have this Toggle component
import Header from "./Header";         // Assuming you have this Header component

const FileUploadProperties = ({ activeElement, handleDone }) => {
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    accept: activeElement.accept || ".jpg,.jpeg,.png,.pdf",
    multiple: activeElement.multiple || false,
    sizeLimit: activeElement.sizeLimit || 10,
    name: activeElement.name || "",  // in MB
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      accept: activeElement.accept || ".jpg,.jpeg,.png,.pdf",
      multiple: activeElement.multiple || false,
      sizeLimit: activeElement.sizeLimit || 10,
      name: activeElement.name || "",
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
    title="Type: File Upload"
    buttonText="DONE"
    onClick={() => handleDone(formDetails)}
    className="border-b pb-4 mb-6"
  />

  {/* General Properties (name & label with required toggle) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <InputField
      id="name"
      label="NAME"
      placeholder="Enter name"
      value={formDetails.name}
      onChange={handleFieldChange}
    />
    <InputField
      id="label"
      label="LABEL"
      placeholder="Enter label"
      value={formDetails.label}
      onChange={handleFieldChange}
    />
  </div>

  <div className="flex items-center space-x-6">
    <Toggle
      id="required"
      label="REQUIRED FIELD"
      checked={formDetails.required}
      onChange={handleFieldChange}
    />
  </div>

  {/* Basic Properties (accept file types & size limit) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <InputField
      id="accept"
      type="text"
      label="ACCEPT (File types)"
      placeholder="Enter accepted file types (e.g., .jpg,.png,.pdf)"
      value={formDetails.accept}
      onChange={handleFieldChange}
    />
    <InputField
      id="sizeLimit"
      type="number"
      label="SIZE LIMIT (MB)"
      placeholder="Enter size limit in MB"
      value={formDetails.sizeLimit}
      onChange={handleFieldChange}
    />
  </div>

  {/* Toggle for multiple file selection */}
  <div className="flex items-center space-x-6">
    <label className="font-medium">Allow Multiple Files</label>
    <Toggle
      id="multiple"
      checked={formDetails.multiple}
      onChange={handleFieldChange}
    />
  </div>
</div>

  );
};

export default FileUploadProperties;
