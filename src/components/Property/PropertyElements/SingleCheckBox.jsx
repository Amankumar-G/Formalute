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
    });

    useEffect(() => {
        setFormDetails({
            label: activeElement.label || "",
            required: activeElement.required || false,
            name: activeElement.name || "",
            value: activeElement.value || "",
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
    <InputField
      id="name"
      label="NAME"
      placeholder="Enter name"
      value={formDetails.name}
      onChange={handleFieldChange}
    />

    {/* Label and Required Toggle */}
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
  </div>
</div>

    );
};

export default SingleCheckBox;
