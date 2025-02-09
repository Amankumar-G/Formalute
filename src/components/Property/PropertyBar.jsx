import React from "react";
import TextProperties from "./PropertyElements/TextProperties";
import NumberProperties from "./PropertyElements/NumberProperties";
import SelectProperties from "./PropertyElements/SelectProperties";
import TextAreaProperties from "./PropertyElements/TextAreaProperties";
import DateProperties from "./PropertyElements/DateProperties";
import FileUploadProperties from "./PropertyElements/FileUploadProperties";
import HiddenProperties from "./PropertyElements/HiddenProperties";
import CheckboxProperties from "./PropertyElements/CheckboxProperties";
import RadioButtonProperties from "./PropertyElements/RadioButtonProperties";
import SingleCheckBox from "./PropertyElements/SingleCheckBox";
import HtmlProperties from "./PropertyElements/HtmlProperties";
import RangeProperties from "./PropertyElements/RangeProperties";
import ColorProperties from "./PropertyElements/ColorProperties";
import PasswordProperties from "./PropertyElements/PasswordProperties"

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const PropertyBar = ({ activeElement, setFormPartitions,showNotification, setIsProperty,activePartitionIndex }) => {
  const handleDone = (formDetails) => {
    setFormPartitions((prevPartitions) => {
      const updatedPartitions = [...prevPartitions];
      updatedPartitions[activePartitionIndex] = prevPartitions[activePartitionIndex].map(
        (element) =>
          element.id === activeElement.id
            ? { ...element, ...formDetails }
            : element
      );
      showNotification(`${formDetails.label} Updated!`,"yellow")
      setIsProperty(false);
      return updatedPartitions;
    });
  };
  const renderPropertyComponent = () => {
    switch (activeElement.type) {
      case "text":
      case "email":
      case "tel":
      case "url":
            return (
              <TextProperties
              activeElement={activeElement}
              capitalize={capitalize}
              handleDone={handleDone}
              />
            );
      case "password":
        return (
          <PasswordProperties
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
      case "checkbox":
        return (
          <SingleCheckBox
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
      case "html":
        return (
          <HtmlProperties
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
      case "range":
        return (
          <RangeProperties
            activeElement={activeElement}
            capitalize={capitalize}
            handleDone={handleDone}
          />
        );
      case "color":
        return (
          <ColorProperties
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
