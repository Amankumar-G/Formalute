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
import HTMLField from "./RendererElements/HTMLField";
import ColorRenderer from "./RendererElements/ColorRenderer";
import RangeRenderer from "./RendererElements/RangeRenderer";
import { FiArrowLeft, FiArrowRight, FiEdit } from 'react-icons/fi'; // Importing React Icons
// import rawJson from "./ConfigFormWithPartitions (20).json?raw";


  const FormRenderer = ({jsonConfig,  onSubmit, action = "#", method = "POST" }) => {

    const [errors, setErrors] = useState({});
    const parsedConfig = useMemo(() => {
      try {
        return jsonConfig ? JSON.parse(jsonConfig) : [];
      } catch (err) {
        console.error("Invalid JSON Config:", err);
        return [];
      }
    }, [jsonConfig]);
  const [formData, setFormData] = useState(() =>
    parsedConfig.reduce((acc, partition) => {
      partition.elements.forEach((field) => {
        if (field.name) {
          acc[field.name] = field.value || "";
        }
      });
      return acc;
    }, {})
  );
  
  
  const [activePartitionIndex, setActivePartitionIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked, files, options, multiple, dataset } = e.target;
    if (!name) return; 
    setFormData((prev) => {
      let updatedValue;
      const inputType = dataset.type || type;
  
      switch (inputType) {
        case "checkbox":
          updatedValue = !!checked;
          break;
        case "file":
          if (files) {
            let fileArray = Array.from(files);
            
            // Validate file size
            const field = parsedConfig.flatMap(p => p.elements).find(f => f.name === name);
            if (field && field.sizelimit) {
              const maxSize = field.sizelimit * 1024 * 1024; // Convert MB to bytes
              const oversizedFiles = fileArray.filter(file => file.size > maxSize);
  
              if (oversizedFiles.length > 0) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  [name]: field.errormessagesize || `File size must be under ${field.sizelimit}MB.`,
                }));
                return prev; // Do not update formData if files are too large
              }
            }
  
            updatedValue = fileArray;
          } else {
            updatedValue = [];
          }
          break;
        case "select-multiple":
          if (multiple && options) {
            updatedValue = Array.from(options)
              .filter((option) => option.selected)
              .map((option) => option.value);
          }
          break;
        case "multiple-checkbox":
          updatedValue = prev[name] ? [...prev[name]] : [];
          if (checked && !updatedValue.includes(value)) {
            updatedValue.push(value);
          } else {
            updatedValue = updatedValue.filter((item) => item !== value);
          }
          break;
        default:
          updatedValue = value;
      }
  
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
  
      return {
        ...prev,
        [name]: updatedValue,
      };
    });
  };
  



  const renderField = (field) => {
    const value = formData[field.name];
    const error = errors[field.name];
    const fieldProps = { field , value, handleChange, error };
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
        return <ColorRenderer {...fieldProps} />;
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
        return <HTMLField {...fieldProps} />;
      case "range":
        return <RangeRenderer {...fieldProps} />;
      case "divider":
        return <hr />;
      default:
        console.warn(`Unsupported field type: ${field.type}`);
        return null;
    }
  };

  const validateField = (field, value) => {
    const errors = [];

    // ✅ Check required fields
    if (field.required) {
        if (field.type === 'multiple-checkbox') {
            if (!value || value.length === 0) {
                errors.push(field.errormessage || 'At least one option must be selected.');
            }
        } else if (!value) {
            errors.push(field.errormessage || 'This field is required.');
        }
    }
    // ✅ Validate number, range, and date fields
    if (['number', 'range', 'date'].includes(field.type)) {
      const numValue = Number(value);
        if (field.min != "" && numValue < field.min) {
            errors.push(field.errormessagemin || `Value too short`);
        }
        if (field.max != "" && numValue > field.max) {

            errors.push(field.errormessagemax || `Value too long`);
        }
    }

    // ✅ Validate text-based fields (min/max length)
    if (['text', 'textarea', 'password', 'email', 'tel', 'url'].includes(field.type)) {
        const length = value ? value.length : 0;
        if (field.minlength && length < field.minlength) {
            errors.push(field.errormessageminlength || `Minimum length is ${field.minlength}.`);
        }
        if (field.maxlength && length > field.maxlength) {
            errors.push(field.errormessagemaxlength || `Maximum length is ${field.maxlength}.`);
        }
    }

    // ✅ Validate regex pattern
    if (field.pattern && value) {
        const regex = new RegExp(field.pattern);
        if (!regex.test(value)) {
            errors.push(field.errormessagepattern || 'Invalid format.');
        }
    }

    // ✅ Validate file inputs
    if (field.type === 'file' && value.length > 0) {
        if (field.accept) {
            const acceptedTypes = field.accept.split(',').map(t => t.trim());
            const isValidType = value.every(file => 
                acceptedTypes.some(type => 
                    type === 'image/*' ? file.type.startsWith('image/') : file.type === type || file.name.endsWith(type)
                )
            );
            if (!isValidType) {
                errors.push(field.errormessageaccept || 'Invalid file type.');
            }
        }
        if (field.sizelimit) {
            const maxSize = field.sizelimit * 1024 * 1024;
            const isValidSize = value.every(file => file.size <= maxSize);
            if (!isValidSize) {
                errors.push(field.errormessagesize || `File size must be under ${field.sizelimit}MB.`);
            }
        }
    }

    return errors.length ? errors.join(' ') : null;
};

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFields = parsedConfig.flatMap(p => p.elements);
    const newErrors = {};
    allFields.forEach(field => {
      const value = formData[field.name];
      const error = validateField(field, value);
      if (error) newErrors[field.name] = error;
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      if (onSubmit) onSubmit(formData);
      else alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
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
        noValidate
        action={action}
        method={method}
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg shadow-indigo-500/20 overflow-y-scroll DragFormX-form"
      >
        {parsedConfig.length > 0 && parsedConfig[activePartitionIndex] ? (
          <div className="space-y-8 DragFormX-fields">
            {parsedConfig[activePartitionIndex].elements.map((field) => (
              <div key={field.id} className="space-y-4 DragFormX-field">
                {renderField(field)}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center DragFormX-empty">No fields to render</p>
        )}

        {parsedConfig.length > 1 ? (
          <div className="w-full max-w-md mx-auto mt-6 bg-indigo-100 DragFormX-pagination">
            <div className="flex items-center justify-between gap-6 p-5 bg-white DragFormX-pagination-controls">
              {/* Back Button */}
              {activePartitionIndex > 0 && (
                <button
                  type="button"
                  onClick={() => setActivePartitionIndex(activePartitionIndex - 1)}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105 text-sm font-medium DragFormX-back-btn"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
              )}

              {/* Progress Dots */}
              <ul className="flex gap-3 items-center mx-auto DragFormX-progress-dots">
                {parsedConfig.map((_, index) => (
                  <li
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index <= activePartitionIndex ? "bg-indigo-600" : "bg-indigo-200"} DragFormX-progress-dot`}
                  />
                ))}
              </ul>

              {/* Next or Submit Button */}
              {activePartitionIndex < parsedConfig.length - 1 ? (
                <button
                  type="button"
                  onClick={(e) => {
                      e.preventDefault();
                      const currentPartition = parsedConfig[activePartitionIndex];
                      const newErrors = {};
                      currentPartition.elements.forEach(field => {
                        const value = formData[field.name];
                        const error = validateField(field, value);
                        if (error) newErrors[field.name] = error;
                      });
                      if (Object.keys(newErrors).length) {
                        setErrors(newErrors);
                      } else {
                        setActivePartitionIndex((prev) => Math.min(prev + 1, parsedConfig.length - 1));
                        // Clear current partition's errors
                        const updatedErrors = { ...errors };
                        currentPartition.elements.forEach(field => delete updatedErrors[field.name]);
                        setErrors(updatedErrors);
                      }
                    }}
                  className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105 DragFormX-next-btn"
                >
                  <span className="text-sm font-medium">Next</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center gap-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 DragFormX-submit-btn"
                >
                  <span className="text-sm font-medium">Submit</span>
                  <FiArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-indigo-600 text-white rounded-md font-semibold text-lg hover:bg-indigo-700 transition-all duration-300 DragFormX-submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default FormRenderer;
