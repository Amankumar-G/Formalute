import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";


const TextProperties = ({ activeElement,capitalize ,handleDone }) => {
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
        onClick={()=>handleDone(formDetails)}
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
            id="pattern"
            type="text"
            label="PATTERN"
            placeholder="Enter regex pattern"
            value={formDetails.pattern}
            onChange={handleFieldChange}
          />
          <InputField
            id="autocomplete"
            type="text"
            label="AUTOCOMPLETE"
            placeholder="Enter autocomplete value"
            value={formDetails.autocomplete}
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
          <InputField
            id="minlength"
            type="number"
            label="MIN LENGTH"
            placeholder="Enter minimum length"
            value={formDetails.minlength}
            onChange={handleFieldChange}
          />
          <InputField
            id="spellcheck"
            type="text"
            label="SPELLCHECK"
            placeholder="Enter true or false"
            value={formDetails.spellcheck}
            onChange={handleFieldChange}
          />
          <InputField
            id="size"
            type="number"
            label="SIZE"
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
