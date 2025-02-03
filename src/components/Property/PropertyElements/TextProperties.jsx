import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const TextProperties = ({ activeElement, capitalize, handleDone }) => {
  const [showAdditionalProperties, setShowAdditionalProperties] =
    useState(false);

  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    placeholder: activeElement.placeholder || "",
    pattern: activeElement.pattern || "",
    autoComplete: activeElement.autoComplete || false,
    maxLength: activeElement.maxLength || "",
    minLength: activeElement.minLength || "",
    spellCheck: activeElement.spellCheck || false,
    name: activeElement.name || "",
    className: activeElement.className || "",
    errorMessagePattern: activeElement.errorMessagePattern || "",
    errorMessageMaxLength: activeElement.errorMessageMaxLength || "",
    errorMessageMinLength: activeElement.errorMessageMinLength || "",
    errorMessage: activeElement.errorMessage || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      placeholder: activeElement.placeholder || "",
      pattern: activeElement.pattern || "",
      autoComplete: activeElement.autoComplete || false,
      maxLength: activeElement.maxLength || "",
      minLength: activeElement.minLength || "",
      spellCheck: activeElement.spellCheck || false,
      name: activeElement.name || "",
      className: activeElement.className || "",
      errorMessagePattern: activeElement.errorMessagePattern || "",
      errorMessageMaxLength: activeElement.errorMessageMaxLength || "",
      errorMessageMinLength: activeElement.errorMessageMinLength || "",
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
          type="text"
          label="Placeholder"
          placeholder="Enter placeholder"
          value={formDetails.placeholder}
          onChange={handleFieldChange}
        />
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
          label="Required Field"
          checked={formDetails.required}
          onChange={handleFieldChange}
          className="mt-4"
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
        className="text-sm font-medium text-gray-800 bg-gray-200 py-2 px-5 rounded-md border border-gray-300 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-200 ease-in-out"
        onClick={() => setShowAdditionalProperties((prev) => !prev)}
      >
        {showAdditionalProperties
          ? "Hide Additional Properties"
          : "Show Additional Properties"}
      </button>

      {showAdditionalProperties && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["pattern", "maxLength", "minLength"].map((id) => (
            <div key={id} className="space-y-2">
              <InputField
                id={id}
                type={
                  id.includes("Length") || id === "size" ? "number" : "text"
                }
                label={id.charAt(0).toUpperCase() + id.slice(1)}
                placeholder={`Enter ${id}`}
                value={formDetails[id]}
                onChange={handleFieldChange}
              />
              {formDetails[id] && id === "pattern" && (
                <InputField
                  id="errorMessagePattern"
                  type="text"
                  label="Error Message for Pattern"
                  placeholder="Default: Invalid format"
                  value={formDetails.errorMessagePattern}
                  onChange={handleFieldChange}
                />
              )}
              {formDetails[id] && id === "maxLength" && (
                <InputField
                  id="errorMessageMaxLength"
                  type="text"
                  label="Error Message for Max Length"
                  placeholder="Default: Value too long"
                  value={formDetails.errorMessageMaxLength}
                  onChange={handleFieldChange}
                />
              )}
              {formDetails[id] && id === "minLength" && (
                <InputField
                  id="errorMessageMinLength"
                  type="text"
                  label="Error Message for Min Length"
                  placeholder="Default: Value too short"
                  value={formDetails.errorMessageMinLength}
                  onChange={handleFieldChange}
                />
              )}
            </div>
          ))}
          <Toggle
            id="autoComplete"
            label="Auto Complete"
            checked={formDetails.autoComplete}
            onChange={handleFieldChange}
          />
          <Toggle
            id="spellCheck"
            label="Spell Check"
            checked={formDetails.spellCheck}
            onChange={handleFieldChange}
          />
        </div>
      )}
    </div>
  );
};

export default TextProperties;
