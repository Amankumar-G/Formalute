import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const HtmlProperties = ({ activeElement, capitalize, handleDone }) => {
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    tag: activeElement.tag || "h1",
    color: activeElement.color || "#000000", // default hex color
    fontSize: activeElement.fontSize || "16",  // in pixels
    textAlign: activeElement.textAlign || "left",
    bold: activeElement.bold || false,
    italic: activeElement.italic || false,
    description: activeElement.description || "",
    classname: activeElement.classname || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      tag: activeElement.tag || "h1",
      color: activeElement.color || "#000000",
      fontSize: activeElement.fontSize || "16",
      textAlign: activeElement.textAlign || "left",
      bold: activeElement.bold || false,
      italic: activeElement.italic || false,
      description: activeElement.description || "",
      classname: activeElement.classname || "",
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
        title={`Type: ${capitalize(activeElement.type)}`}
        buttonText="DONE"
        onClick={() => handleDone(formDetails)}
        className="border-b pb-4 mb-6"
      />

      {/* Basic Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          id="label"
          label="Label"
          placeholder="Enter label"
          value={formDetails.label}
          onChange={handleFieldChange}
        />
        <div className="flex flex-col">
          <label htmlFor="tag" className="mb-1 font-medium text-gray-700">
            HTML Tag
          </label>
          <select
            id="tag"
            value={formDetails.tag}
            onChange={(e) => handleFieldChange("tag", e.target.value)}
            className="p-2 border rounded"
          >
            <option value="h1">h1</option>
            <option value="h2">h2</option>
            <option value="h3">h3</option>
            <option value="p">p</option>
            <option value="div">div</option>
          </select>
        </div>
      </div>

      {/* Style Properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <InputField
          id="fontSize"
          type="number"
          label="Font Size (px)"
          placeholder="16"
          value={formDetails.fontSize}
          onChange={handleFieldChange}
        />
        <div className="flex flex-col">
          <label htmlFor="color" className="mb-1 font-medium text-gray-700">
            Color
          </label>
          <input
            type="color"
            id="color"
            value={formDetails.color}
            onChange={(e) => handleFieldChange("color", e.target.value)}
            className="w-10 h-10 p-0 border border-gray-300 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Text Settings */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end">
        <div className="flex flex-col">
          <label htmlFor="textAlign" className="mb-1 font-medium text-gray-700">
            Text Align
          </label>
          <select
            id="textAlign"
            value={formDetails.textAlign}
            onChange={(e) => handleFieldChange("textAlign", e.target.value)}
            className="p-2 border rounded"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
        </div>
        <Toggle
          id="bold"
          label="Bold"
          checked={formDetails.bold}
          onChange={handleFieldChange}
        />
        <Toggle
          id="italic"
          label="Italic"
          checked={formDetails.italic}
          onChange={handleFieldChange}
        />
      </div>

      {/* Additional Properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          id="description"
          label="Description"
          placeholder="Enter description"
          value={formDetails.description}
          onChange={handleFieldChange}
        />
        <InputField
          id="classname"
          type="text"
          label="Class Name"
          placeholder="Enter class name"
          value={formDetails.classname}
          onChange={handleFieldChange}
        />
      </div>
    </div>
  );
};

export default HtmlProperties;
