import React, { useState, useMemo } from "react";
import { Stepper } from "../LeftRightButtons";
import convertAttributesToCamelCase from "./RendererElements/camleCaseUtil";
import InputField from "./RendererElements/InputField";
import TextareaField from "./RendererElements/TextareaField";
import SelectField from "./RendererElements/SelectField";
import CheckboxField from "./RendererElements/CheckboxField";
import MultipleCheckbox from "./RendererElements/MultipleCheckbox";
import MultipleRadio from "./RendererElements/MultipleRadio";
import FileField from "./RendererElements/FileField";
import HiddenField from "./RendererElements/HiddenField";
import HTMLField from "./RendererElements/HTMLField"
import ColorRenderer from "./RendererElements/ColorRenderer"
import RangeRenderer from "./RendererElements/RangeRenderer";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'; // Importing React Icons


const FormRenderer = ({ jsonConfig, onSubmit, action = "#", method = "POST" }) => {

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
          updatedValue = files ? Array.from(files) : [];
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
    if (onSubmit) {
      onSubmit(formData);
    } else {
      alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
    }
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
      case 'color':
        return <ColorRenderer {...fieldProps} />
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
      case "html":
        return <HTMLField {...fieldProps} />
      case "range":
        return <RangeRenderer {...fieldProps} />
      case "divider":
        return <hr></hr>
      default:
        console.warn(`Unsupported field type: ${field.type}`);
        return null;
    }
  };

  return (
    <div className="relative bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 DragFormX-container">
      {parsedConfig.length > 1 && (
        <Stepper
          formPartitions={parsedConfig}
          activePartitionIndex={activePartitionIndex}
          setActivePartitionIndex={setActivePartitionIndex}
        />  
      )}
      <form 
        action={action} method={method} onSubmit={handleSubmit} 
        className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg shadow-indigo-500/20 overflow-y-scroll DragFormX-form"
      >
        {parsedConfig.length > 0 && parsedConfig[activePartitionIndex] ? (
          <>
            <div className="space-y-8">
              {parsedConfig[activePartitionIndex].elements.map((field) => (
                <div key={field.id} className="space-y-4">
                  {renderField(field)}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">No fields to render</p>
        )}



        {parsedConfig.length > 1 ? (
          <div className="w-full max-w-md mx-auto mt-6 bg-indigo-100 ">
            <div className="flex items-center justify-between gap-6 p-5 bg-white">
              {/* Back Button */}
              {activePartitionIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setActivePartitionIndex(activePartitionIndex - 1)}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                >
                  <FiArrowLeft className="w-5 h-5" /> {/* React Icon for Back Arrow */}
                  <span>Back</span>
                </button>
              )}

              {/* Progress Dots */}
              <ul className="flex gap-3 items-center mx-auto">
                {parsedConfig.map((_, index) => (
                  <li
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index <= activePartitionIndex ? "bg-indigo-600" : "bg-indigo-200"
                      }`}
                  />
                ))}
              </ul>

              {/* Next or Submit Button */}
              {activePartitionIndex < parsedConfig.length - 1 ? (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePartitionIndex(activePartitionIndex + 1)
                  }}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm font-medium">Next</span>
                  <FiArrowRight className="w-5 h-5" /> {/* React Icon for Next Arrow */}
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm font-medium">Submit</span>
                  <FiArrowRight className="w-5 h-5" /> {/* React Icon for Submit Arrow */}
                </button>
              )}
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-md font-semibold text-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Submit
          </button>
        )}


      </form>
    </div>
  )
};


export default FormRenderer;
