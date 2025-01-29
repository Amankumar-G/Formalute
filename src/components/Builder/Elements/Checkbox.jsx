import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Checkbox = ({ label, id, name }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.6 : 1, // Slightly reduce opacity while dragging
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'grab', // Indicate dragability
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item flex items-center gap-2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition-all"
    >
      {/* Checkbox Input */}
      <input
        type="checkbox"
        id={id}
        name={name}
        className="pointer-events-none h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 disabled:bg-white disabled:text-black disabled:cursor-not-allowed"
        disabled
      />

      {/* Label */}
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
