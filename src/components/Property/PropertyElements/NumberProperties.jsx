import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const NumberProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] =
    useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    placeholder: activeElement.placeholder || "",
    min: activeElement.min || "",
    max: activeElement.max || "",
    step: activeElement.step || "",
    name: activeElement.name || "",
    classname: activeElement.classname || "",
    errormessagemax: activeElement.errormessagemax || "",
    errormessagemin: activeElement.errormessagemin || "",
    errormessage: activeElement.errormessage || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      placeholder: activeElement.placeholder || "",
      min: activeElement.min || "",
      max: activeElement.max || "",
      step: activeElement.step || "",
      name: activeElement.name || "",
      classname: activeElement.classname || "",
      errormessagemax: activeElement.errormessagemax || "",
      errormessagemin: activeElement.errormessagemin || "",
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
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          id="placeholder"
          type="text"
          label="Placeholder"
          placeholder="Enter placeholder"
          value={formDetails.placeholder}
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

      <button
        className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition-all duration-200 ease-in-out"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties
          ? "Hide Additional Properties"
          : "Show Additional Properties"}
      </button>

      {showAdditionalProperties && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <InputField
            id="min"
            type="number"
            label="Min Value"
            placeholder="Enter minimum value"
            value={formDetails.min}
            onChange={handleFieldChange}
          />
          {formDetails.min && (
            <InputField
              id="errormessagemin"
              type="text"
              label="Error Message for min Value"
              placeholder="Default: Value too low"
              value={formDetails.errormessagemin}
              onChange={handleFieldChange}
            />
          )}
          <InputField
            id="max"
            type="number"
            label="Max Value"
            placeholder="Enter maximum value"
            value={formDetails.max}
            onChange={handleFieldChange}
          />
          {formDetails.max && (
            <InputField
              id="errormessagemax"
              type="text"
              label="Error Message for max Value"
              placeholder="Default: Value too high"
              value={formDetails.errormessagemax}
              onChange={handleFieldChange}
            />
          )}
          <InputField
            id="step"
            type="number"
            label="Step"
            placeholder="Enter step value"
            value={formDetails.step}
            onChange={handleFieldChange}
          />
        </div>
      )}
    </div>
  );
};

export default NumberProperties;
