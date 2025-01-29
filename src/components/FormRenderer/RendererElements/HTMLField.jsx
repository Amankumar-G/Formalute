import React from "react";

const HTMLField = ({ field }) => {
  console.log(field)
   const baseStyle = {
      color : field.color, // Dynamic color
      fontStyle: field.italic ? "italic" : "normal", // Dynamic italic
      fontWeight: field.bold ? "bold" : "normal", // Dynamic bold// Reduce opacity while dragging
    };

    
  const textClass =
  field.value === "h1"
    ? "text-2xl font-bold"
    : field.value === "h2"
    ? "text-xl font-semibold"
    : field.value === "h3"
    ? "text-lg font-medium"
    : "text-base";
    return (
      <div
      style={baseStyle}
      className="mb-4"
    >
      {field.value === "h1" && <h1 style={baseStyle} className={textClass}>{field.label}</h1>}
      {field.value === "h2" && <h2 style={baseStyle} className={textClass}>{field.label}</h2>}
      {field.value === "h3" && <h3 style={baseStyle} className={textClass}>{field.label}</h3>}
      {field.value === "p" && <p style={baseStyle} className={textClass}>{field.label}</p>}
    </div>
    );
  }


export default HTMLField;
