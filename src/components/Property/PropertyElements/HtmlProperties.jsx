import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const HtmlProperties = ({ activeElement, capitalize, handleDone }) => {
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    name: activeElement.name || "",
    value: activeElement.value || "h1",
    color: activeElement.color || "black",
    italic: activeElement.italic || false,
    bold: activeElement.bold || false,
    required: activeElement.required || false,
    description: activeElement.description || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      name: activeElement.name || "",
      value: activeElement.value || "h1",
      color: activeElement.color || "black",
      italic: activeElement.italic || false,
      bold: activeElement.bold || false,
      required: activeElement.required || false,
      description: activeElement.description || "",
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

  {/* General Properties */}
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

  {/* Text Formatting Properties */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <InputField
      id="value"
      label="HTML TAG (e.g., h1, h2, p)"
      placeholder="Enter HTML tag"
      value={formDetails.value}
      onChange={handleFieldChange}
    />
    <InputField
      id="color"
      label="COLOR"
      placeholder="Enter text color (e.g., black, red)"
      value={formDetails.color}
      onChange={handleFieldChange}
    />
    <Toggle
      id="italic"
      label="ITALIC"
      checked={formDetails.italic}
      onChange={handleFieldChange}
    />
    <Toggle
      id="bold"
      label="BOLD"
      checked={formDetails.bold}
      onChange={handleFieldChange}
    />
  </div>

  {/* Additional Properties */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <InputField
      id="description"
      label="DESCRIPTION"
      placeholder="Enter description"
      value={formDetails.description}
      onChange={handleFieldChange}
    />
    <Toggle
      id="required"
      label="REQUIRED FIELD"
      checked={formDetails.required}
      onChange={handleFieldChange}
    />
  </div>
</div>

  );
};

export default HtmlProperties;
