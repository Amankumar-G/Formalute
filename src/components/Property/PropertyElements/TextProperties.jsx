import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";
import PatternSelect from "./PatternSelect";

// A helper to extract the initial form details from the activeElement.
const getInitialFormDetails = (activeElement) => ({
  label: activeElement?.label || "",
  name: activeElement?.name || "",
  placeholder: activeElement?.placeholder || "",
  classname: activeElement?.classname || "",
  required: activeElement?.required || false,
  errormessage: activeElement?.errormessage || "",
  // Always store the actual regex value.
  pattern: activeElement?.pattern || "",
  errormessagepattern: activeElement?.errormessagepattern || "",
  minlength: activeElement?.minlength || "",
  errormessageminlength: activeElement?.errormessageminlength || "",
  maxlength: activeElement?.maxlength || "",
  errormessagemaxlength: activeElement?.errormessagemaxlength || "",
  autocomplete: activeElement?.autocomplete || false,
  spellcheck: activeElement?.spellcheck || false,
});

const predefinedPatterns = [
  { value: "^[a-zA-Z]+$", label: "Letters Only" },
  { value: "^[0-9]+$", label: "Numbers Only" },
  { value: "^[a-zA-Z0-9]+$", label: "Alphanumeric" },
  { value: "^\\S+@\\S+\\.\\S+$", label: "Email" },
];

const TextProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);
  
  // Initialize state from activeElement.
  const [formDetails, setFormDetails] = useState(getInitialFormDetails(activeElement));

  // Update form details when activeElement changes.
  useEffect(() => {
    setFormDetails(getInitialFormDetails(activeElement));
  }, [activeElement]);

  // Handle changes from InputField or Toggle.
  const handleFieldChange = (field, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // Update the pattern and its error message.
  const handlePatternChange = ({ pattern, errorMessage }) => {
    setFormDetails((prev) => ({
      ...prev,
      pattern,
      errormessagepattern: errorMessage,
    }));
  };

  return (
    <div className="bg-gray-100 flex flex-col px-6 py-6 space-y-6 rounded-lg shadow-md">
      {/* Header */}
      <Header
        title={`Type: ${capitalize(activeElement.type)}`}
        buttonText="DONE"
        onClick={() => handleDone(formDetails)}
      />

      {/* Basic Fields */}
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          id="placeholder"
          label="Placeholder"
          placeholder="Enter placeholder"
          value={formDetails.placeholder}
          onChange={handleFieldChange}
        />
        <InputField
          id="classname"
          label="Class Name"
          placeholder="Enter class name"
          value={formDetails.classname}
          onChange={handleFieldChange}
        />
      </div>

      {/* Required Field Toggle with Error Message */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Toggle
            id="required"
            label="Required Field"
            checked={formDetails.required}
            onChange={handleFieldChange}
          />
          {formDetails.required && (
            <InputField
              id="errormessage"
              label="Error Message for Required Field"
              placeholder="Default: This field is required"
              value={formDetails.errormessage}
              onChange={handleFieldChange}
            />
          )}
        </div>
      </div>

      {/* Toggle Additional Properties */}
      <button
        className="text-sm font-medium text-gray-800 bg-gray-200 py-2 px-5 rounded-md border border-gray-300 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 ease-in-out"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties
          ? "Hide Additional Properties"
          : "Show Additional Properties"}
      </button>

      {/* Additional Properties */}
      {showAdditionalProperties && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Toggle
            id="autocomplete"
            label="Auto Complete"
            checked={formDetails.autocomplete}
            onChange={handleFieldChange}
          />
          <Toggle
            id="spellcheck"
            label="Spell Check"
            checked={formDetails.spellcheck}
            onChange={handleFieldChange}
          />

          <div className="space-y-2">
            <InputField
              id="minlength"
              type="number"
              label="Min Length"
              placeholder="Enter min length"
              value={formDetails.minlength}
              onChange={handleFieldChange}
            />
            {formDetails.minlength && (
              <InputField
                id="errormessageminlength"
                label="Error Message for Min Length"
                placeholder="Default: Value too short"
                value={formDetails.errormessageminlength}
                onChange={handleFieldChange}
              />
            )}
          </div>

          <div className="space-y-2">
            <InputField
              id="maxlength"
              type="number"
              label="Max Length"
              placeholder="Enter max length"
              value={formDetails.maxlength}
              onChange={handleFieldChange}
            />
            {formDetails.maxlength && (
              <InputField
                id="errormessagemaxlength"
                label="Error Message for Max Length"
                placeholder="Default: Value too long"
                value={formDetails.errormessagemaxlength}
                onChange={handleFieldChange}
              />
            )}
          </div>

          {/* Reusable PatternSelect component */}
          <PatternSelect
            type = {activeElement.type}
            predefinedPatterns={predefinedPatterns}
            pattern={formDetails.pattern}
            errorMessage={formDetails.errormessagepattern}
            onChange={handlePatternChange}
          />
        </div>
      )}
    </div>
  );
};

export default TextProperties;
