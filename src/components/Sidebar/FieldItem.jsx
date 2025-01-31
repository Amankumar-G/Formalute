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
  className="bg-gray-800 text-white font-medium text-xs flex justify-center sm:justify-start items-center h-10 rounded-md cursor-pointer shadow-md hover:bg-gray-700 transition-colors duration-300 p-2 sm:w-auto sm:h-12 sm:p-3"
  onClick={handleClick}
>
  <span className="flex justify-start items-start">{field.image}</span>
  <span className="hidden sm:flex sm:ml-2">{field.label}</span>
</div>

  );
};

export default FieldItem;
