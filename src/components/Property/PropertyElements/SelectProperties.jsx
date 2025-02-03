import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";
import { IoIosRemoveCircleOutline } from "react-icons/io";// Importing an icon from lucide-react


const SelectProperties = ({ activeElement, capitalize, handleDone }) => {
   const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    multiple: activeElement.multiple || false,
    size: activeElement.size || "",
    options: activeElement.options || [{ value: "", text: "" }],
    name: activeElement.name || "",
    className: activeElement.className || "",
    errorMessage: activeElement.errorMessage || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      multiple: activeElement.multiple || false,
      size: activeElement.size || "",
      options: activeElement.options || [{ value: "", text: "" }],
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

  const handleOptionChange = (index, field, value) => {
    const updatedOptions = [...formDetails.options];
    updatedOptions[index][field] = value;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      options: updatedOptions,
    }));
  };

  const addOption = () => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      options: [...prevDetails.options, { value: "", text: "" }],
    }));
  };

  const removeOption = (index) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      options: prevDetails.options.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="bg-gray-100 flex flex-col px-6 py-6 space-y-6 rounded-lg shadow-md">
  <Header
    title={`Type : ${capitalize(activeElement.type)}`}
    buttonText="DONE"
    onClick={() => handleDone(formDetails)}
    className="border-b pb-4 mb-6"
  />
<div className="flex items-center space-x-8">
  {/* Name Field */}
  <InputField
    id="name"
    label="NAME"
    placeholder="Enter name"
    value={formDetails.name}
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
  {/* General Properties (Label & Required Toggle) */}
  <div className="flex items-center space-x-8">
    <InputField
      id="label"
      label="LABEL"
      placeholder="Enter label"
      value={formDetails.label}
      onChange={handleFieldChange}
    />
      {/* Basic Properties */}
  <Toggle
    id="multiple"
    label="ALLOW MULTIPLE SELECTION"
    checked={formDetails.multiple}
    onChange={handleFieldChange}
  />
  </div>
  <div className="flex">
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

  {/* Options Section */}
  <div className="space-y-4">
    <h3 className="text-lg font-bold text-gray-700">Options</h3>
    {formDetails.options.map((option, index) => (
      <div
        key={index}
        className="grid grid-cols-1 sm:grid-cols-[40%_40%_20%] gap-4 items-center"
      >
        <InputField
          id={`option-value-${index}`}
          type="text"
          label="Value"
          placeholder="Enter option value"
          value={option.value}
          onChange={(field, value) => handleOptionChange(index, "value", value)}
        />
        <InputField
          id={`option-text-${index}`}
          type="text"
          label="Text"
          placeholder="Enter option text"
          value={option.text}
          onChange={(field, value) => handleOptionChange(index, "text", value)}
        />
        <button
          onClick={() => removeOption(index)}
          aria-label="Remove Option"
          className="text-red-500 hover:text-red-600"
        >
          <IoIosRemoveCircleOutline className="w-6 h-6 mt-6 ml-7" />
        </button>
      </div>
    ))}
    <button
      className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
      onClick={addOption}
    >
      Add Option
    </button>
  </div>
</div>
  
  );
};

export default SelectProperties;
