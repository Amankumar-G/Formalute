import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from './Toggle';
import Header from "./Header";

const SingleCheckBox = ({ activeElement, capitalize, handleDone }) => {

    const [formDetails, setFormDetails] = useState({
        label: activeElement.label || "",
        required: activeElement.required || false,
        name: activeElement.name || "",
        value: activeElement.value || "",
        className: activeElement.className || "",
        errorMessage: activeElement.errorMessage || "",
    });

    useEffect(() => {
        setFormDetails({
            label: activeElement.label || "",
            required: activeElement.required || false,
            name: activeElement.name || "",
            value: activeElement.value || "",
            className: activeElement.className || "",
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
    className="border-b pb-4 mb-6"
  />

  {/* General Properties */}
  <div className="space-y-6">
    {/* Name Field */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <InputField
      id="name"
      label="NAME"
      placeholder="Enter name"
      value={formDetails.name}
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
    </div>
    {/* Label and Required Toggle */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
   
  </div>
</div>

    );
};

export default SingleCheckBox;
