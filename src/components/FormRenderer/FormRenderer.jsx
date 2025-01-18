import React, { useState } from 'react';

const FormRenderer = ({ formConfig }) => {
  const [formData, setFormData] = useState(
    formConfig.reduce((acc, field) => {
      acc[field.name] = field.value || '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
    });
  };

  const renderField = (field) => {
    const {
      type,
      name,
      label,
      placeholder,
      required,
      value,
      pattern,
      id,
      options,
      min,
      max,
      step,
      multiple,
      rows,
      cols,
      accept,
      minlength,
      maxlength,
      autocomplete,
      spellcheck,
      size,
    } = field;

    switch (type) {
      case 'text':
      case 'email':
      case 'password':
      case 'tel':
      case 'url':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
            <input
              type={type}
              name={name}
              id={id}
              value={formData[name] || ''}
              placeholder={placeholder}
              onChange={handleChange}
              required={required}
              pattern={pattern ? pattern :null}
              minLength={minlength}
              maxLength={maxlength}
              autoComplete={autocomplete}
              spellCheck={spellcheck}
              size={size}
              className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'date':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
            <input
              type="date"
              name={name}
              id={id}
              value={formData[name] || ''}
              min={min}
              max={max}
              onChange={handleChange}
              required={required}
              className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'number':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
            <input
              type="number"
              name={name}
              id={id}
              value={formData[name] || ''}
              placeholder={placeholder}
              min={min}
              max={max}
              step={step}
              onChange={handleChange}
              required={required}
              className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'textarea':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
            <textarea
              name={name}
              id={id}
              value={formData[name] || ''}
              placeholder={placeholder}
              rows={rows}
              cols={cols}
              onChange={handleChange}
              required={required}
              className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'file':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
            <input
              type="file"
              name={name}
              id={id}
              accept={accept}
              multiple={multiple}
              onChange={handleChange}
              required={required}
              className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        );
      case 'select':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="block text-gray-700">{label}</label>}
            <select
              name={name}
              id={id}
              value={formData[name] || ''}
              onChange={handleChange}
              required={required}
              className="w-full p-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        );
      case 'checkbox':
        return (
          <div key={id} className="mb-4">
            {label && <label htmlFor={id} className="text-gray-700">{label}</label>}
            <input
              type="checkbox"
              name={name}
              id={id}
              checked={formData[name] || false}
              onChange={handleChange}
              required={required}
              className="mr-2"
            />
          </div>
        );
      case 'multiple-checkbox':
        return (
          <div key={id} className="mb-4">
            {label && <label className="block text-gray-700">{label}</label>}
            {options.map((option) => (
              <div key={option.value} className="mb-2">
                <input
                  type="checkbox"
                  name={name}
                  value={option.value}
                  checked={formData[name]?.includes(option.value) || false}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>{option.text}</label>
              </div>
            ))}
          </div>
        );
      case 'radio':
        return (
          <div key={id} className="mb-4">
            {label && <label className="block text-gray-700">{label}</label>}
            {options.map((option) => (
              <div key={option.value} className="mb-2">
                <input
                  type="radio"
                  name={name}
                  id={id}
                  value={option.value}
                  checked={formData[name] === option.value}
                  onChange={handleChange}
                  required={required}
                  className="mr-2"
                />
                <label>{option.text}</label>
              </div>
            ))}
          </div>
        );
      case 'hidden':
        return (
          <input
            type="hidden"
            name={name}
            id={id}
            value={value}
            onChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {formConfig.map(renderField)}
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
