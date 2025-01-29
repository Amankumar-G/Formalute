import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const TextProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    placeholder: activeElement.placeholder || "",
    pattern: activeElement.pattern || "",
    autocomplete: activeElement.autocomplete || "",
    maxlength: activeElement.maxlength || "",
    minlength: activeElement.minlength || "",
    spellcheck: activeElement.spellcheck || "",
    size: activeElement.size || "",
    name: activeElement.name || "", // Added name field
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      placeholder: activeElement.placeholder || "",
      pattern: activeElement.pattern || "",
      autocomplete: activeElement.autocomplete || "",
      maxlength: activeElement.maxlength || "",
      minlength: activeElement.minlength || "",
      spellcheck: activeElement.spellcheck || "",
      size: activeElement.size || "",
      name: activeElement.name || "", // Initialize name field
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

  {/* General Properties (Label & Name Fields) */}
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

  {/* Basic Properties */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <InputField
      id="placeholder"
      type="text"
      label="Placeholder"
      placeholder="Enter placeholder"
      value={formDetails.placeholder}
      onChange={handleFieldChange}
    />
    <Toggle
      id="required"
      label="Required Field"
      checked={formDetails.required}
      onChange={handleFieldChange}
      className="mt-4"
    />
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <InputField
        id="pattern"
        type="text"
        label="Pattern"
        placeholder="Enter regex pattern"
        value={formDetails.pattern}
        onChange={handleFieldChange}
      />
      <InputField
        id="autocomplete"
        type="text"
        label="Autocomplete"
        placeholder="Enter autocomplete value"
        value={formDetails.autocomplete}
        onChange={handleFieldChange}
      />
      <InputField
        id="maxlength"
        type="number"
        label="Max Length"
        placeholder="Enter maximum length"
        value={formDetails.maxlength}
        onChange={handleFieldChange}
      />
      <InputField
        id="minlength"
        type="number"
        label="Min Length"
        placeholder="Enter minimum length"
        value={formDetails.minlength}
        onChange={handleFieldChange}
      />
      <InputField
        id="spellcheck"
        type="text"
        label="Spellcheck"
        placeholder="Enter true or false"
        value={formDetails.spellcheck}
        onChange={handleFieldChange}
      />
      <InputField
        id="size"
        type="number"
        label="Size"
        placeholder="Enter visual width in characters"
        value={formDetails.size}
        onChange={handleFieldChange}
      />
    </div>
  )}
</div>

  );
};

export default TextProperties;
