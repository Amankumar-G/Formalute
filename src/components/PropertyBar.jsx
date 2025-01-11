import React, { useState, useEffect } from "react";
import Header from "./PropertyElements/Header";
import InputField from "./PropertyElements/InputField";
import Toggle from "./PropertyElements/Toggle";

function capitalize(str) {
  if (!str) return str; 
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PropertyBar = ({ activeElement, setFormElements }) => {
  // State to hold form details
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    name: activeElement.name || "",
    value: activeElement.value || "",
    placeholder: activeElement.placeholder || "",
    required: activeElement.required || false,
    pattern: activeElement.pattern || "",
    autocomplete: activeElement.autocomplete || "",
    min: activeElement.min || "",
    max: activeElement.max || "",
    step: activeElement.step || "",
    options: activeElement.options || [],
  });

  // Update formDetails when activeElement changes
  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      name: activeElement.name || "",
      value: activeElement.value || "",
      placeholder: activeElement.placeholder || "",
      required: activeElement.required || false,
      pattern: activeElement.pattern || "",
      autocomplete: activeElement.autocomplete || "",
      min: activeElement.min || "",
      max: activeElement.max || "",
      step: activeElement.step || "",
      options: activeElement.options || [],
    });
  }, [activeElement]);

  // Update form field values
  const handleFieldChange = (field, value) => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  // Handle the Done button click
  const handleDone = () => {
    console.log(formDetails)
    setFormElements((prevElements) =>
      prevElements.map((element) =>
        element.id === activeElement.id
          ? { ...element, ...formDetails }
          : element
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col px-6 py-4 space-y-8">
      {/* Header */}
      <Header
        title={`Type : ${capitalize(activeElement.type)}`}
        buttonText="DONE"
        onClick={handleDone}
      />

      {/* Additional Input Fields */}
      <div className="flex flex-col space-y-6">
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
        <div className="flex items-center space-x-8">
          <InputField
            id="name"
            label="NAME"
            placeholder="Enter name"
            value={formDetails.name}
            onChange={handleFieldChange}
          />
        </div>

        {/* Show VALUE field only for specific types */}
        {["text", "email", "password", "number", "tel", "url", "textarea", "color"].includes(activeElement.type) && (
          <div className="flex items-center space-x-8">
            <InputField
              id="value"
              label="VALUE"
              placeholder="Enter value"
              value={formDetails.value}
              onChange={handleFieldChange}
            />
          </div>
        )}

        {/* Show PLACEHOLDER field if associated */}
        {activeElement.placeholder && (
          <div className="flex items-center space-x-8">
            <InputField
              id="placeholder"
              label="PLACEHOLDER"
              placeholder="Enter placeholder"
              value={formDetails.placeholder}
              onChange={handleFieldChange}
            />
          </div>
        )}

        {/* Show additional fields based on the type of field */}
        {activeElement.type === "number" && (
          <div className="flex items-center space-x-8">
            <InputField
              id="min"
              label="MINIMUM VALUE"
              placeholder="Enter minimum value"
              value={formDetails.min}
              onChange={handleFieldChange}
            />
            <InputField
              id="max"
              label="MAXIMUM VALUE"
              placeholder="Enter maximum value"
              value={formDetails.max}
              onChange={handleFieldChange}
            />
            <InputField
              id="step"
              label="STEP"
              placeholder="Enter step value"
              value={formDetails.step}
              onChange={handleFieldChange}
            />
          </div>
        )}

        {activeElement.type === "date" && (
          <div className="flex items-center space-x-8">
            <InputField
              id="min"
              label="MIN DATE"
              placeholder="Enter minimum date"
              value={formDetails.min}
              onChange={handleFieldChange}
            />
            <InputField
              id="max"
              label="MAX DATE"
              placeholder="Enter maximum date"
              value={formDetails.max}
              onChange={handleFieldChange}
            />
          </div>
        )}

        {activeElement.type === "select" && (
          <div className="flex items-center space-x-8">
            <InputField
              id="options"
              label="OPTIONS"
              placeholder="Enter options (comma separated)"
              value={formDetails.options.join(", ")}
              onChange={(e) =>
                handleFieldChange("options", e.target.value.split(","))
              }
            />
          </div>
        )}

        {/* Show pattern field for inputs that need regex validation */}
        {["text", "email", "password", "tel", "url"].includes(activeElement.type) && (
          <div className="flex items-center space-x-8">
            <InputField
              id="pattern"
              label="PATTERN"
              placeholder="Enter regex pattern"
              value={formDetails.pattern}
              onChange={handleFieldChange}
            />
          </div>
        )}

        {/* Show autocomplete field for appropriate input types */}
        {["text", "email", "password", "tel", "url"].includes(activeElement.type) && (
          <div className="flex items-center space-x-8">
            <InputField
              id="autocomplete"
              label="AUTOCOMPLETE"
              placeholder="Enter autocomplete value"
              value={formDetails.autocomplete}
              onChange={handleFieldChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyBar;
