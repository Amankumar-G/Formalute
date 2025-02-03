import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const RangeProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    min: activeElement.min || "",
    max: activeElement.max || "",
    step: activeElement.step || "",
    value: activeElement.value || "",
    name: activeElement.name || "",
    className: activeElement.className || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      min: activeElement.min || "",
      max: activeElement.max || "",
      step: activeElement.step || "",
      value: activeElement.value || "",
      name: activeElement.name || "",
      className: activeElement.className || "",
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
      />

      {/* General Properties (label, name, & required toggle) */}
      <div className="flex items-center space-x-8">
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
      <div className="flex items-center space-x-8">
        {/* Required Field */}
      <InputField
      id="className"
      type="text"
      label="Class Name"
      placeholder="Enter Class"
      value={formDetails.className}
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
        className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties ? "Hide Additional Properties" : "Show Additional Properties"}
      </button>

      {/* Additional Properties Section */}
      {showAdditionalProperties && (
        <div className="grid grid-cols-2 gap-6 mt-4">
          <InputField
            id="min"
            type="number"
            label="MINIMUM VALUE"
            placeholder="Enter minimum value"
            value={formDetails.min}
            onChange={handleFieldChange}
          />
          <InputField
            id="max"
            type="number"
            label="MAXIMUM VALUE"
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
            id="value"
            type="number"
            label="DEFAULT VALUE"
            placeholder="Enter default value"
            value={formDetails.value}
            onChange={handleFieldChange}
          />
        </div>
      )}
    </div>
  );
};

export default RangeProperties;
