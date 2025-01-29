import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Button = ({ id, type, value }) => {
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
      className="sortable-item flex flex-col gap-2"
    >
      <button
        type={type}
        className="pointer-events-none w-full px-4 py-2 text-white text-lg font-medium bg-zinc-500 rounded-md shadow-sm hover:bg-zinc-700 transition-colors disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
