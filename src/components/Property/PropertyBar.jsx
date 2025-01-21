import React from "react";
import Header from "./PropertyElements/Header";
import TextProperties from "./PropertyElements/TextProperties";
import NumberProperties from "./PropertyElements/NumberProperties";
import SelectProperties from "./PropertyElements/SelectProperties";
import TextAreaProperties from "./PropertyElements/TextAreaProperties";
import DateProperties from "./PropertyElements/DateProperties";
import FileUploadProperties from "./PropertyElements/FileUploadProperties";
import HiddenProperties from "./PropertyElements/HiddenProperties";
import CheckboxProperties from "./PropertyElements/CheckboxProperties";
import RadioButtonProperties from "./PropertyElements/RadioButtonProperties";

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PropertyBar = ({ activeElement, setFormElements }) => {
  const handleDone = (formDetails) => {
    setFormElements((prevElements) =>
      prevElements.map((element) =>
        element.id === activeElement.id
          ? { ...element, ...formDetails }
          : element
      )
    );
  };

  const renderPropertyComponent = () => {
    switch (activeElement.type) {
      case "text":
      case "email":
      case "password":
      case "tel":
      case "url":
        return (
          <TextProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "multiple-checkbox":
        return (
          <CheckboxProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "hidden":
        return (
          <HiddenProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "textarea":
        return (
          <TextAreaProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "date":
        return (
          <DateProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "number":
        return (
          <NumberProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "select":
        return (
          <SelectProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "file":
        return (
          <FileUploadProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "radio":
        return (
          <RadioButtonProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      default:
        return <div>No properties available for this type.</div>;
    }
  };

  return (
    <div
      className="h-full bg-gray-200 border-l border-gray-300"
    >
      {renderPropertyComponent()}
    </div>
  );
};

export default PropertyBar;
