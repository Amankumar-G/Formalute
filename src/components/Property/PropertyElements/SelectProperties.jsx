import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const SelectProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);
  console.log(activeElement)
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    multiple: activeElement.multiple || false,
    size: activeElement.size || "",
    options: activeElement.options || [{ value: "", text: "" }],
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      multiple: activeElement.multiple || false,
      size: activeElement.size || "",
      options: activeElement.options || [{ value: "", text: "" }],
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
    <div className=" bg-gray-200 flex flex-col px-6 py-4 space-y-8">
      <Header
        title={`Type : ${capitalize(activeElement.type)}`}
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
      <Toggle
        id="multiple"
        label="ALLOW MULTIPLE SELECTION"
        checked={formDetails.multiple}
        onChange={handleFieldChange}
      />

      {/* Options Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-gray-700">Options</h3>
        {formDetails.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-4">
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
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              onClick={() => removeOption(index)}
            >
              Remove
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

      {/* Toggle Button for Additional Properties */}
      <button
        className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties ? "Hide Additional Properties" : "Show Additional Properties"}
      </button>

      {/* Additional Properties Section */}
      {showAdditionalProperties && (
        <div className="grid grid-cols-2 gap-6 mt-4">
          <InputField
            id="size"
            type="number"
            label="SIZE"
            placeholder="Enter visible size"
            value={formDetails.size}
            onChange={handleFieldChange}
          />
        </div>
      )}
    </div>
  );
};

export default SelectProperties;
