import React, { useState, useMemo } from "react";
import { LeftButtons, RightButtons, AddButton, Stepper } from "../LeftRightButtons";
import convertAttributesToCamelCase from "./RendererElements/camleCaseUtil";
import InputField from "./RendererElements/InputField";
import TextareaField from "./RendererElements/TextareaField";
import SelectField from "./RendererElements/SelectField";
import CheckboxField from "./RendererElements/CheckboxField";
import MultipleCheckbox from "./RendererElements/MultipleCheckbox";
import MultipleRadio from "./RendererElements/MultipleRadio";
import FileField from "./RendererElements/FileField";
import HiddenField from "./RendererElements/HiddenField";


const FormRenderer = ({ jsonConfig }) => {
  // Parse the JSON configuration
  const parsedConfig = useMemo(() => {
    try {
      return JSON.parse(jsonConfig) || [];
    } catch (err) {
      console.error("Invalid JSON Config:", err);
      return [];
    }
  }, [jsonConfig]);

  const [formData, setFormData] = useState(() =>
    parsedConfig.reduce((acc, partition) => {
      partition.elements.forEach((field) => {
        acc[field.name] = field.value || "";
      });
      return acc;
    }, {})
  );

  const [activePartitionIndex, setActivePartitionIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked, files, options, multiple, dataset } = e.target;
    setFormData((prev) => {
      let updatedValue;

      const inputType = dataset.type || type;

      switch (inputType) {
        case "checkbox":
          updatedValue = checked;
          break;
        case "file":
          updatedValue = files;
          break;
        case "select-multiple":
          if (multiple && options) {
            updatedValue = Array.from(options)
              .filter((option) => option.selected)
              .map((option) => option.value);
          }
          break;
        case "multiple-checkbox":
          updatedValue = prev[name] || [];
          if (checked) {
            updatedValue = [...updatedValue, value];
          } else {
            updatedValue = updatedValue.filter((item) => item !== value);
          }
          break;
        default:
          updatedValue = value;
      }

      return {
        ...prev,
        [name]: updatedValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };



  const renderField = (field) => {
    const value = formData[field.name];
    const fieldProps = { field: convertAttributesToCamelCase(field), value, handleChange };

    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "tel":
      case "url":
      case "number":
      case "date":
        return <InputField {...fieldProps} />;
      case "textarea":
        return <TextareaField {...fieldProps} />;
      case "select":
        return <SelectField {...fieldProps} />;
      case "checkbox":
        return <CheckboxField {...fieldProps} />;
      case "multiple-checkbox":
        return <MultipleCheckbox {...fieldProps} />;
      case "radio":
        return <MultipleRadio {...fieldProps} />;
      case "file":
        return <FileField {...fieldProps} />;
      case "hidden":
        return <HiddenField {...fieldProps} />;
      default:
        console.warn(`Unsupported field type: ${field.type}`);
        return null;
    }
  };

  return (<div className="relative">
  {parsedConfig.length > 1 && <Stepper
    formPartitions={parsedConfig}
    activePartitionIndex={activePartitionIndex}
    setActivePartitionIndex={setActivePartitionIndex}
  />}
  <form
    onSubmit={handleSubmit}
    className="max-w-xl mx-auto p-6 mt-16 bg-white rounded-lg shadow-md"
  >
    {parsedConfig.length > 0 && parsedConfig[activePartitionIndex] ? (
      <>
        {parsedConfig[activePartitionIndex].elements.map((field) => (
          <div key={field.id} className="mb-4">
            {renderField(field)}
          </div>
        ))}
      </>
    ) : (
      <p>No fields to render</p>
    )}

{Array.isArray(parsedConfig) && parsedConfig.length > 1 ? (
  <div className="w-full max-w-md mx-auto bg-indigo-100 border-2 border-indigo-600 rounded-md">
    <div className="flex items-center justify-between gap-3 p-2 bg-white rounded">
      {/* Back Button - Hide when on first partition */}
      {activePartitionIndex > 0 && (
        <button
          type="button"
          onClick={() => setActivePartitionIndex(activePartitionIndex - 1)}
          className="flex items-center gap-1.5 border-none text-base font-medium py-1.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
        >
          <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
      )}

      {/* Dots for Progress - Ensure they are centered */}
      <ul className="flex gap-1 items-center mx-auto">
        {parsedConfig.map((_, index) => (
          <li
            key={index}
            className={`text-base font-normal w-2 h-2 rounded-full ${index <= activePartitionIndex ? 'bg-indigo-600' : 'bg-indigo-100'}`}
          />
        ))}
      </ul>

      {/* Next or Submit Button - Show Submit on last step */}
      {activePartitionIndex < parsedConfig.length - 1 ? (
        <button
          type="button"
          onClick={() => setActivePartitionIndex(activePartitionIndex + 1)}
          className="flex items-center gap-1.5 border-none text-base font-medium py-1.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <path d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      ) : (
        <button
          type="submit"
          className="flex items-center gap-1.5 border-none text-base font-medium py-1.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
        >
          Submit
        </button>
      )}
    </div>
  </div>
) : (
  <button
    type="submit"
    className="block w-full py-3 mt-4 bg-indigo-600 text-white rounded-md font-semibold text-lg hover:bg-indigo-700"
  >
    Submit
  </button>
)}

  </form>
</div>)

};

export default FormRenderer;
