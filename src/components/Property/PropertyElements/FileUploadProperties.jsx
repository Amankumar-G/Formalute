import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import Header from "./Header";

const FileUploadProperties = ({ activeElement, handleDone }) => {
  const [formDetails, setFormDetails] = useState({
    label: activeElement.label || "",
    required: activeElement.required || false,
    accept: activeElement.accept || ".jpg,.jpeg,.png,.pdf",
    multiple: activeElement.multiple || false,
    sizelimit: activeElement.sizelimit || 10,
    name: activeElement.name || "",
    classname: activeElement.classname || "",
    errormessage: activeElement.errormessage || "",
    errormessagesizelimit: activeElement.errormessagesizelimit || "",
  });

  useEffect(() => {
    setFormDetails({
      label: activeElement.label || "",
      required: activeElement.required || false,
      accept: activeElement.accept || ".jpg,.jpeg,.png,.pdf",
      multiple: activeElement.multiple || false,
      sizelimit: activeElement.sizelimit || 10,
      name: activeElement.name || "",
      classname: activeElement.classname || "",
      errormessage: activeElement.errormessage || "",
      errormessagesizelimit: activeElement.errormessagesizelimit || "",
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
        title="Type: File Upload"
        buttonText="DONE"
        onClick={() => handleDone(formDetails)}
        className="border-b pb-4 mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InputField
          id="name"
          label="NAME"
          placeholder="Enter name"
          value={formDetails.name}
          onChange={handleFieldChange}
        />
        <InputField
          id="label"
          label="LABEL"
          placeholder="Enter label"
          value={formDetails.label}
          onChange={handleFieldChange}
        />
        <InputField
          id="classname"
          type="text"
          label="Class Name"
          placeholder="Enter Class"
          value={formDetails.classname}
          onChange={handleFieldChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">ACCEPT (File Types)</label>
          <select
            id="accept"
            value={formDetails.accept}
            onChange={(e) => handleFieldChange("accept", e.target.value)}
            className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          >
            <option value=".jpg,.jpeg,.png,.pdf">Images</option>
            <option value=".pdf">PDFs</option>
            <option value=".doc,.docx,.pdf">Documents</option>
            <option value=".csv,.xlsx,.xls">Spreadsheets</option>
            <option value="*">All File Types</option>
          </select>
        </div>
        <InputField
          id="sizelimit"
          type="number"
          label="SIZE LIMIT (MB)"
          placeholder="Enter size limit in MB"
          value={formDetails.sizelimit}
          onChange={handleFieldChange}
        />
      </div>

      <div className="flex items-center space-x-6">
        <Toggle
          id="required"
          label="REQUIRED FIELD"
          checked={formDetails.required}
          onChange={handleFieldChange}
        />
        <Toggle
          id="multiple"
          label="Allow Multiple Files"
          checked={formDetails.multiple}
          onChange={handleFieldChange}
        />
      </div>

      {formDetails.required && (
        <InputField
          id="errormessage"
          type="text"
          label="Error Message for Required Field"
          placeholder="Default: This field is required"
          value={formDetails.errormessage}
          onChange={handleFieldChange}
        />
      )}
      {formDetails.sizelimit && (
        <InputField
          id="errormessagesizelimit"
          type="text"
          label="Error Message for Size Limit"
          placeholder="Default: File exceeds allowed size"
          value={formDetails.errormessagesizelimit}
          onChange={handleFieldChange}
        />
      )}
    </div>
  );
};

export default FileUploadProperties;