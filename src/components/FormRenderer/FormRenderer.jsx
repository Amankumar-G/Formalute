import React, { useState, useMemo } from 'react';
import  convertAttributesToCamelCase  from './RendererElements/camleCaseUtil';
import InputField from './RendererElements/InputField';
import TextareaField from './RendererElements/TextareaField';
import SelectField from './RendererElements/SelectField';
import CheckboxField from './RendererElements/CheckboxField';
import MultipleCheckbox from './RendererElements/MultipleCheckbox';
import MultipleRadio from './RendererElements/MultipleRadio';
import FileField from './RendererElements/FileField';
import HiddenField from './RendererElements/HiddenField';

const FormRenderer = ({ jsonConfig }) => {
  const parsedConfig = useMemo(() => {
    try {
      return JSON.parse(jsonConfig) || [];
    } catch (err) {
      console.error('Invalid JSON Config:', err);
      return [];
    }
  }, [jsonConfig]);

  const [formData, setFormData] = useState(() =>
    parsedConfig.reduce((acc, field) => {
      acc[field.name] = field.value || '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value, type, checked, files, options, multiple, dataset } = e.target;
    setFormData((prev) => {
      let updatedValue;

      const inputType = dataset.type || type;

      switch (inputType) {
        case 'checkbox':
          updatedValue = checked;
          break;
        case 'file':
          updatedValue = files;
          break;
        case 'select-multiple':
          if (multiple && options) {
            updatedValue = Array.from(options)
              .filter((option) => option.selected)
              .map((option) => option.value);
          }
          break;
        case 'multiple-checkbox':
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
    console.log('Form data submitted:', formData);
  };

  const renderField = (field) => {
    const value = formData[field.name];
    const fieldProps = { field: convertAttributesToCamelCase(field), value, handleChange };

    // Add styling for invalid and valid states
    const baseClass =
      'mt-1 block w-full rounded-md border shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500';
    const validationClass = 'invalid:border-red-500 invalid:ring-red-500 valid:border-green-500';

    const inputFieldProps = {
      ...fieldProps,
      className: `${baseClass} ${validationClass}`,
      required: field.required,
    };

    switch (field.type) {
      case 'text':
      case 'email':
      case 'password':
      case 'tel':
      case 'url':
      case 'number':
      case 'date':
        return <InputField {...inputFieldProps} />;
      case 'textarea':
        return <TextareaField {...inputFieldProps} />;
      case 'select':
        return <SelectField {...inputFieldProps} />;
      case 'checkbox':
        return <CheckboxField {...inputFieldProps} />;
      case 'multiple-checkbox':
        return <MultipleCheckbox {...inputFieldProps} />;
      case 'radio':
        return <MultipleRadio {...inputFieldProps} />;
      case 'file':
        return <FileField {...inputFieldProps} />;
      case 'hidden':
        return <HiddenField {...inputFieldProps} />;
      default:
        console.warn(`Unsupported field type: ${field.type}`);
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 mt-16 bg-white rounded-lg shadow-md">
      {parsedConfig.length > 0
        ? parsedConfig.map(renderField)
        : <p>No fields to render</p>}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormRenderer;
