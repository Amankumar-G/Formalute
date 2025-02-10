import React, { useState, useEffect,useMemo } from "react";
import InputField from "./InputField";


const getPredefinedPatterns = (type) => {

  switch (type) {
    case "text":
      return [
        { value: "^[a-zA-Z]+$", label: "Letters Only" },
        { value: "^[a-zA-Z0-9]+$", label: "Alphanumeric" },
        { value: "^[a-zA-Z ]+$", label: "Letters and Spaces" },
        { value: "^[a-z]+$", label: "Lowercase Letters Only" },
        { value: "^[A-Z]+$", label: "Uppercase Letters Only" },
      ];

    case "email":
      return [
        { value: "^\\S+@\\S+\\.\\S+$", label: "Email Format (basic)" },
        { value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", label: "Email Format (strict)" },
      ];

    case "tel":
      return [
        { value: "^[0-9]+$", label: "Numbers Only" },
        { value: "^[0-9]{10}$", label: "10-digit Phone Number" },
        { value: "^\\+?[0-9]{1,3}[ -]?[0-9]{6,12}$", label: "International Phone Number" },
      ];

    case "password":
      return [
        { value: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", label: "Min 8 chars, Letters & Numbers" },
        { value: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", label: "Min 8 chars, Letters, Numbers & Special Character" },
        { value: "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}$", label: "Min 8 chars, Uppercase, Lowercase & Number" },
        { value: "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&]).{8,}$", label: "Strong Password (Upper, Lower, Number & Special Char)" },
      ];

    case "number":
      return [
        { value: "^[0-9]+$", label: "Whole Numbers Only" },
        { value: "^[0-9]*\\.?[0-9]+$", label: "Decimal Numbers Allowed" },
        { value: "^-?[0-9]+$", label: "Positive and Negative Integers" },
      ];

    case "date":
      return [
        { value: "^\\d{4}-\\d{2}-\\d{2}$", label: "YYYY-MM-DD Format" },
        { value: "^\\d{2}/\\d{2}/\\d{4}$", label: "DD/MM/YYYY Format" },
        { value: "^\\d{2}-\\d{2}-\\d{4}$", label: "MM-DD-YYYY Format" },
      ];

    case "url":
      return [
        { value: "^(https?|ftp)://[^\\s/$.?#].[^\\s]*$", label: "Valid URL" },
        { value: "^(https?://)?(www\\.)?[a-zA-Z0-9._-]+\\.[a-zA-Z]{2,}$", label: "URL without Protocol" },
      ];

    case "zipcode":
      return [
        { value: "^[0-9]{5}$", label: "US ZIP Code (5 Digits)" },
        { value: "^[0-9]{5}-[0-9]{4}$", label: "US ZIP+4 Code" },
        { value: "^[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d$", label: "Canada Postal Code" },
      ];

    case "username":
      return [
        { value: "^[a-zA-Z0-9_]{3,16}$", label: "3-16 chars (letters, numbers, underscores)" },
        { value: "^(?!.*\\.\\.)(?!.*\\.$)[a-zA-Z0-9_.]{3,16}$", label: "No consecutive dots, 3-16 chars" },
      ];

    default:
      return [];
  }
};

const PatternSelect = ({
  type = "text",
  pattern,        // Current regex (if custom, this will be the custom regex)
  errorMessage,   // The error message for this pattern
  onChange,       // Callback to update parent's state: receives an object { pattern, errorMessage }
  // Optional labels and placeholders:
  selectLabel = "Pattern",
  customLabel = "Custom Pattern",
  customPlaceholder = "Enter custom regex pattern",
  errorMessageLabel = "Error Message for Pattern",
  errorMessagePlaceholder = "Default: Invalid format.",
}) => {



  const predefinedPatterns = useMemo(() => getPredefinedPatterns(type), [type]);

  
  // Check if the current pattern matches one of our predefined ones.
  const isPredefined = predefinedPatterns.some((p) => p.value === pattern);
  // If the pattern is predefined, the select value is the pattern; otherwise, it’s "custom".
  const selectValue = isPredefined ? pattern : "custom";

  // We only need local state to manage the custom pattern text.
  const [customPattern, setCustomPattern] = useState(isPredefined ? "" : pattern);

  // Whenever the parent's pattern changes, update the custom pattern state if needed.
  useEffect(() => {
    if (!isPredefined) {
      setCustomPattern(pattern);
    } else {
      setCustomPattern("");
    }
  }, [pattern, isPredefined]);

  // When the select value changes, update the parent's state.
  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value !== "custom") {
      // For predefined values, immediately update with the new pattern.
      onChange({ pattern: value, errorMessage });
    } else {
      // For custom, send the current custom pattern value.
      onChange({ pattern: customPattern, errorMessage });
    }
  };

  // When the custom pattern input changes, update local state and parent's state.
  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomPattern(value);
    // If the select is on custom, notify the parent.
    if (selectValue === "custom") {
      onChange({ pattern: value, errorMessage });
    }
  };

  // When the error message changes, update the parent's state.
  const handleErrorMessageChange = (e) => {
    const value = e.target.value;
    onChange({
      // Send the custom pattern if in custom mode; otherwise, send the predefined pattern.
      pattern: selectValue === "custom" ? customPattern : pattern,
      errorMessage: value,
    });
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor="pattern-select"
        className="block text-sm font-medium text-gray-700"
      >
        {selectLabel}
      </label>
      <select
        id="pattern-select"
        value={selectValue}
        onChange={handleSelectChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a pattern</option>
        {predefinedPatterns.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
        <option value="custom">Custom</option>
      </select>

      {selectValue === "custom" && (
        <InputField
          id="customPattern"
          label={customLabel}
          placeholder={customPlaceholder}
          value={customPattern}
          onChange={(id, val) =>
            handleCustomChange({ target: { value: val } })
          }
        />
      )}

      <InputField
        id="patternErrorMessage"
        label={errorMessageLabel}
        placeholder={errorMessagePlaceholder}
        value={errorMessage}
        onChange={(id, val) =>
          handleErrorMessageChange({ target: { value: val } })
        }
      />
    </div>
  );
};

export default PatternSelect;
