import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const ColorProperties = ({ activeElement, capitalize, handleDone }) => {
   const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    value: activeElement.value || "#000000",
    name: activeElement.name || "",
    classname: activeElement.classname || "",
    errormessage: activeElement.errormessage || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      value: activeElement.value || "#000000",
      name: activeElement.name || "",
      classname: activeElement.classname || "",
      errormessage: activeElement.errormessage || "",
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

      <div className="flex items-center space-x-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          id="classname"
          type="text"
          label="Class Name"
          placeholder="Enter Class"
          value={formDetails.classname}
          onChange={handleFieldChange}
        />
      </div>


    </div>
  );
};

export default ColorProperties;
