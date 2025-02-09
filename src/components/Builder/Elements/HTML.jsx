import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const HTML = ({
  label,
  id,
  tag,
  color = "black",
  italic = false,
  bold = false,
  fontSize = "16",
  textAlign = "left",
  description = "",
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const baseStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
    color,
    fontStyle: italic ? "italic" : "normal",
    fontWeight: bold ? "bold" : "normal",
    opacity: isDragging ? 0.5 : 1,
    fontSize: `${fontSize}px`,
    textAlign,
  };

  // Determine a text class based on the tag
  const textClass =
    tag === "h1"
      ? "text-2xl font-bold"
      : tag === "h2"
      ? "text-xl font-semibold"
      : tag === "h3"
      ? "text-lg font-medium"
      : "text-base";

  let renderedElement;
  // Render the proper HTML tag based on the selection
  switch (tag) {
    case "h1":
      renderedElement = <h1 style={baseStyle} className={textClass}>{label}</h1>;
      break;
    case "h2":
      renderedElement = <h2 style={baseStyle} className={textClass}>{label}</h2>;
      break;
    case "h3":
      renderedElement = <h3 style={baseStyle} className={textClass}>{label}</h3>;
      break;
    case "p":
      renderedElement = <p style={baseStyle} className={textClass}>{label}</p>;
      break;
    default:
      renderedElement = <div style={baseStyle} className={textClass}>{label}</div>;
  }

  return (
    <div
      ref={setNodeRef}
      style={baseStyle}
      {...attributes}
      {...listeners}
      className={`sortable-item mb-2`}
    >
      {renderedElement}
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
};

export default HTML;
