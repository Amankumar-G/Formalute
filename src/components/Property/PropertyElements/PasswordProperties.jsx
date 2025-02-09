import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const TextProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] = useState(false);

  // Initialize with all keys defined with default values.
  const [formDetails, setFormDetails] = useState({
    label: activeElement?.label || "",
    name: activeElement?.name || "",
    placeholder: activeElement?.placeholder || "",
    classname: activeElement?.classname || "",
    required: activeElement?.required || false,
    errormessage: activeElement?.errormessage || "",
    pattern: activeElement?.pattern || "",
    errormessagepattern: activeElement?.errormessagepattern || "",
    minlength: activeElement?.minlength || "",
    errormessageminlength: activeElement?.errormessageminlength || "",
    maxlength: activeElement?.maxlength || "",
    errormessagemaxlength: activeElement?.errormessagemaxlength || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement?.label || "",
      name: activeElement?.name || "",
      placeholder: activeElement?.placeholder || "",
      classname: activeElement?.classname || "",
      required: activeElement?.required || false,
      errormessage: activeElement?.errormessage || "",
      pattern: activeElement?.pattern || "",
      errormessagepattern: activeElement?.errormessagepattern || "",
      minlength: activeElement?.minlength || "",
      errormessageminlength: activeElement?.errormessageminlength || "",
      maxlength: activeElement?.maxlength || "",
      errormessagemaxlength: activeElement?.errormessagemaxlength || "",
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

      {/* Required Field Toggle with Error Message Below */}
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

          <div className="space-y-2">
            <InputField
              id="pattern"
              type="text"
              label="Pattern"
              placeholder="Enter allowed pattern"
              value={formDetails.pattern}
              onChange={handleFieldChange}
            />
            {formDetails.pattern && (
              <InputField
                id="errormessagepattern"
                label="Error Message for Pattern"
                placeholder="Default: Invalid format."
                value={formDetails.errormessagepattern}
                onChange={handleFieldChange}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextProperties;
