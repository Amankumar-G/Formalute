import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Input = ({ label, type = "text", id, name, placeholder }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.6 : 1, // Reduce opacity slightly when dragging
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab", // Show grab cursor to indicate dragability
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item flex flex-col gap-1"
    >
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        {label}
      </label>

      {/* Input */}
      <input
        type={type === "hidden" ? "text" : type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled
        className="pointer-events-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default Input;
