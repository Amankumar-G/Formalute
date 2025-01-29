import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const NumberProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    placeholder: activeElement.placeholder || "",
    min: activeElement.min || "",
    max: activeElement.max || "",
    step: activeElement.step || "",
    maxlength: activeElement.maxlength || "",
    name: activeElement.name || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      placeholder: activeElement.placeholder || "",
      min: activeElement.min || "",
      max: activeElement.max || "",
      step: activeElement.step || "",
      maxlength: activeElement.maxlength || "",
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
    title={`Type : ${capitalize(activeElement.type)}`}
    buttonText="DONE"
    onClick={() => handleDone(formDetails)}
    className="border-b pb-4 mb-6"
  />

  {/* General Properties (label & required toggle) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

  {/* Basic Properties */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <InputField
      id="placeholder"
      type="text"
      label="PLACEHOLDER"
      placeholder="Enter placeholder"
      value={formDetails.placeholder}
      onChange={handleFieldChange}
    />
    <Toggle
      id="required"
      label="REQUIRED FIELD"
      checked={formDetails.required}
      onChange={handleFieldChange}
    />
  </div>

  {/* Toggle Button for Additional Properties */}
  <button
    className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition-all duration-200 ease-in-out"
    onClick={() => setShowAdditionalProperties((prev) => !prev)}
  >
    {showAdditionalProperties ? "Hide Additional Properties" : "Show Additional Properties"}
  </button>

  {/* Additional Properties Section */}
  {showAdditionalProperties && (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      <InputField
        id="min"
        type="number"
        label="MIN VALUE"
        placeholder="Enter minimum value"
        value={formDetails.min}
        onChange={handleFieldChange}
      />
      <InputField
        id="max"
        type="number"
        label="MAX VALUE"
        placeholder="Enter maximum value"
        value={formDetails.max}
        onChange={handleFieldChange}
      />
      <InputField
        id="step"
        type="number"
        label="STEP"
        placeholder="Enter step value"
        value={formDetails.step}
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

export default NumberProperties;
