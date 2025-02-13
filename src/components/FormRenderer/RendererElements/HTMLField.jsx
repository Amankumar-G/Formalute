import React from "react";

const HTMLField = ({ field, PREFIX = "Formable" }) => {
  if (!field) return null;

  const {
    color,
    italic,
    bold,
    fontSize,
    textAlign,
    classname,
    label,
    tag,
    description,
  } = field;

  const baseStyle = {
    color: color || "inherit",
    fontStyle: italic ? "italic" : "normal",
    fontWeight: bold ? "bold" : "normal",
    fontSize: fontSize ? `${fontSize}px` : "inherit",
    textAlign: textAlign || "left",
  };

  // Determine the base text class based on the HTML tag.
  const textClass =
    tag === "h1"
      ? "text-2xl font-bold"
      : tag === "h2"
      ? "text-xl font-semibold"
      : tag === "h3"
      ? "text-lg font-medium"
      : "text-base";

  let renderedElement;
  // Render the proper HTML tag based on the selection.
  // An extra dynamic prefix class is appended for easy future styling.
  switch (tag) {
    case "h1":
      renderedElement = (
        <h1 style={baseStyle} className={`${textClass} ${PREFIX}-HTMLField-Text`}>
          {label}
        </h1>
      );
      break;
    case "h2":
      renderedElement = (
        <h2 style={baseStyle} className={`${textClass} ${PREFIX}-HTMLField-Text`}>
          {label}
        </h2>
      );
      break;
    case "h3":
      renderedElement = (
        <h3 style={baseStyle} className={`${textClass} ${PREFIX}-HTMLField-Text`}>
          {label}
        </h3>
      );
      break;
    case "p":
      renderedElement = (
        <p style={baseStyle} className={`${textClass} ${PREFIX}-HTMLField-Text`}>
          {label}
        </p>
      );
      break;
    default:
      renderedElement = (
        <div style={baseStyle} className={`${textClass} ${PREFIX}-HTMLField-Text`}>
          {label}
        </div>
      );
  }

  return (
    <div
      style={baseStyle}
      className={`mb-4 ${PREFIX}-HTMLField-Container ${classname || ""}`}
    >
      {renderedElement}
      {description && (
        <p className={`text-sm text-gray-500 mt-1 ${PREFIX}-HTMLField-Description`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default HTMLField;
