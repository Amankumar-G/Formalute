import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
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
    errorMessageMax: activeElement.errorMessageMax || "",
    errorMessageMin: activeElement.errorMessageMin || "",
    errorMessage: activeElement.errorMessage || "",
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
      errorMessageMax: activeElement.errorMessageMax || "",
      errorMessageMin: activeElement.errorMessageMin || "",
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
        title={`Type : ${capitalize(activeElement.type)}`}
        buttonText="DONE"
        onClick={() => handleDone(formDetails)}
      />

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

      <button
        className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties ? "Hide Additional Properties" : "Show Additional Properties"}
      </button>

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
          {formDetails.min && (
            <InputField
              id="errorMessageMin"
              type="text"
              label="Error Message for Min Value"
              placeholder="Default: Value too low"
              value={formDetails.errorMessageMin}
              onChange={handleFieldChange}
            />
          )}
          <InputField
            id="max"
            type="number"
            label="MAXIMUM VALUE"
            placeholder="Enter maximum value"
            value={formDetails.max}
            onChange={handleFieldChange}
          />
          {formDetails.max && (
            <InputField
              id="errorMessageMax"
              type="text"
              label="Error Message for Max Value"
              placeholder="Default: Value too high"
              value={formDetails.errorMessageMax}
              onChange={handleFieldChange}
            />
          )}
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
