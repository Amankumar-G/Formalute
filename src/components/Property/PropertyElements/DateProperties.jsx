import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const DateProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    min: activeElement.min || "",
    max: activeElement.max || "",
    step: activeElement.step || "",
    name: activeElement.name || "",
    classname: activeElement.classname || "",
    errormessage: activeElement.errormessage || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      min: activeElement.min || "",
      max: activeElement.max || "",
      step: activeElement.step || "",
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

  return (
    <div className="bg-gray-100 flex flex-col px-6 py-6 space-y-6 rounded-lg shadow-md">
  <Header
    title={`Type : ${capitalize(activeElement.type)}`}
    buttonText="DONE"
    onClick={() => handleDone(formDetails)}
    className="border-b pb-4 mb-6"
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
  
  {/* Basic Properties (placeholder & required toggle) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <InputField
      id="classname"
      type="text"
      label="Class Name"
      placeholder="Enter Class"
      value={formDetails.classname}
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
            id="errormessage"
            type="text"
            label="Error Message for Required Field"
            placeholder="Default: This field is required"
            value={formDetails.errormessage}
            onChange={handleFieldChange}
          />
        )}
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
