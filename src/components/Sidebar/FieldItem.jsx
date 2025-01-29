import React from "react";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

const FieldItem = ({ field, onAddTask }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useDraggable({ id: field.type });

  const style = {
    visibility: isDragging ? "hidden" : "",
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent conflicts with drag events
    onAddTask(field); // Call the callback to add the new task
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-gray-800 break-words truncate text-wrap text-white font-medium text-sm flex justify-start items-center h-12 rounded-md cursor-pointer shadow-md  hover:bg-gray-700 transition-colors duration-300 p-3"
      onClick={handleClick}
    >
      <span className="break-words text-wrap flex flex-wrap justify-center items-center mx-3">{field.image}</span>
      {field.label}
    </div>
  );
};

export default FieldItem;
