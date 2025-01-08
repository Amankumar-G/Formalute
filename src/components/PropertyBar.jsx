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
    required: false,
  });

  // Update formDetails when activeElement changes
  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      name: activeElement.name || "",
      value: activeElement.value || "",
      placeholder: activeElement.placeholder || "",
      required: activeElement.required || false,
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

        {activeElement.value && (
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
      </div>
    </div>
  );
};

export default PropertyBar;
