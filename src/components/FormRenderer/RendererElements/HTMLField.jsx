import React from "react";

const HTMLField = ({ field }) => {
  console.log(field)
   const baseStyle = {
      color : field.color, // Dynamic color
      fontStyle: field.italic ? "italic" : "normal", // Dynamic italic
      fontWeight: field.bold ? "bold" : "normal", // Dynamic bold// Reduce opacity while dragging
    };

  const textClass =
  field.tag === "h1"
    ? `text-2xl font-bold ${field.className}`
    : field.tag === "h2"
    ? `text-xl font-semibold ${field.className}`
    : field.tag === "h3"
    ? `text-lg font-medium ${field.className}`
    : `text-base ${field.className}`;
    return (
      <div
      style={baseStyle}
      className="mb-4"
    >
      {field.tag === "h1" && <h1 style={baseStyle} className={textClass}>{field.label}</h1>}
      {field.tag === "h2" && <h2 style={baseStyle} className={textClass}>{field.label}</h2>}
      {field.tag === "h3" && <h3 style={baseStyle} className={textClass}>{field.label}</h3>}
      {field.tag === "p" && <p style={baseStyle} className={textClass}>{field.label}</p>}
    </div>
    );
  }


export default HTMLField;
