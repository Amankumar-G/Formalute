import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const DateProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    placeholder: activeElement.placeholder || "",
    min: activeElement.min || "",
    max: activeElement.max || "",
    step: activeElement.step || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      placeholder: activeElement.placeholder || "",
      min: activeElement.min || "",
      max: activeElement.max || "",
      step: activeElement.step || "",
    });
  }, [activeElement]);

  const handleFieldChange = (field, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
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
      <InputField
        id="placeholder"
        type="text"
        label="PLACEHOLDER"
        placeholder="Enter placeholder"
        value={formDetails.placeholder}
        onChange={handleFieldChange}
      />

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
            type="date"
            label="MIN DATE"
            placeholder="Enter minimum date"
            value={formDetails.min}
            onChange={handleFieldChange}
          />
          <InputField
            id="max"
            type="date"
            label="MAX DATE"
            placeholder="Enter maximum date"
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
        </div>
      )}
    </div>
  );
};

export default DateProperties;
