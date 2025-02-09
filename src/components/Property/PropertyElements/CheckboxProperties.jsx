import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";
import { IoIosRemoveCircleOutline } from "react-icons/io";// Importing an icon from lucide-react

const CheckboxProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    options: activeElement.options || [{ value: "", text: "" }],
    name: activeElement.name || "",
    classname: activeElement.classname || "",
    errormessage: activeElement.errormessage || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      options: activeElement.options || [{ value: "", text: "" }],
      name: activeElement.name || "",
      classname: activeElement.classname || "",
      errormessage: activeElement.errormessage || "",
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

      {/* General Properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          id="label"
          label="Label"
          placeholder="Enter label"
          value={formDetails.label}
          onChange={handleFieldChange}
        />
        <InputField
          id="name"
          label="Name"
          placeholder="Enter name"
          value={formDetails.name}
          onChange={handleFieldChange}
        />
         <InputField
          id="classname"
          type="text"
          label="Class Name"
          placeholder="Enter Class"
          value={formDetails.classname}
          onChange={handleFieldChange}
        />
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Toggle
          id="required"
          label="Required Field"
          checked={formDetails.required}
          onChange={handleFieldChange}
        />
         {formDetails.required && (
          <InputField
            id="errormessage"
            type="text"
            label="Error Message for Required Field"
            placeholder="Default: This field is required"
            value={formDetails.errormessage}
            onChange={handleFieldChange}
          />
        )}
      </div>

      {/* Options Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Options</h3>
        {formDetails.options.map((option, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-[40%_40%_20%] gap-4 items-center">
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
          >
            <IoIosRemoveCircleOutline className="w-6 h-6 mt-6 ml-7" color="red"  />
          </button>
        </div>
        
        ))}
        <button
          className="text-sm font-medium text-gray-800 bg-gray-200 py-2 px-5 rounded-md border border-gray-300 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 ease-in-out"
          onClick={addOption}
        >
          Add Option
        </button>
      </div>

      {/* Toggle Button for Additional Properties */}
      <button
        className="text-sm font-medium text-gray-800 bg-gray-200 py-2 px-5 rounded-md border border-gray-300 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 ease-in-out"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties ? "Hide Additional Properties" : "Show Additional Properties"}
      </button>

      {/* Additional Properties Section */}
      {showAdditionalProperties && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <InputField
            id="description"
            type="text"
            label="Description"
            placeholder="Enter checkbox description"
            value={formDetails.description || ""}
            onChange={handleFieldChange}
          />
        </div>
      )}
    </div>
  );
};

export default CheckboxProperties;
