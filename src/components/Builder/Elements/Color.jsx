import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Color = ({ label, id, name, defaultValue = "#000000" }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.6 : 1,
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab", // Disabled cursor
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item flex flex-col gap-2 p-3 border border-gray-300 rounded-md bg-gray-100 shadow-sm"
    >
      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-600"
      >
        {label}
      </label>

      {/* Color Input */}
      <input
        type="color"
        id={id}
        name={name}
        defaultValue={defaultValue}
        disabled
        className="w-12 h-12 border border-gray-400 rounded-md cursor-not-allowed bg-gray-200"
      />
    </div>
  );
};

export default Color;
