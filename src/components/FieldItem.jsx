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
      className="bg-fontBlack text-white font-light text-sm flex justify-start items-center h-10 rounded cursor-pointer"
      onClick={handleClick} // Add the click event here
    >
      <span className="flex justify-center items-center mx-3"></span>
      {field.label}
    </div>
  );
};

export default FieldItem;
