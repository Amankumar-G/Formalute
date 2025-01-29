import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Select = ({ label, id, name, options = [] }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

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
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-800 mb-2"
      >
        {label}
      </label>

      {/* Select Dropdown */}
      <select
        id={id}
        name={name}
        size={options.length} // Expanded view to show all options
        disabled
        className="pointer-events-none block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm text-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-sm">
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
