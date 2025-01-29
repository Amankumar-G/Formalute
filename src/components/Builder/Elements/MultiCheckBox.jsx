import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const MultiCheckBox = ({ label, id, name, options }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.6 : 1, // Slight opacity change while dragging
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
      className="sortable-item p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-all"
    >
      {/* Main Label */}
      <label
        htmlFor={`${label}`}
        className="block text-sm font-medium text-gray-800 mb-2"
      >
        {label}
      </label>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Checkbox Input */}
            <input
              type="checkbox"
              id={`${name}-${index}`}
              value={option.value}
              name={name}
              disabled
              className="pointer-events-none h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 disabled:cursor-not-allowed"
            />

            {/* Option Label */}
            <label
              htmlFor={`${name}-${index}`}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCheckBox;
