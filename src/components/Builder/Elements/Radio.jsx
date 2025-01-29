import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Radio = ({ id, label, options, required }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.6 : 1, // Slight opacity change when dragging
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
      {/* Group Label */}
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          {label}
        </label>
      )}

      {/* Radio Options */}
      <div className="flex flex-col gap-3">
        {options.map(({ value, text }) => (
          <RadioItem
            key={value}
            id={`${id}-${value}`}
            name={id}
            value={value}
            label={text}
            required={required}
          />
        ))}
      </div>
    </div>
  );
};

const RadioItem = ({ id, name, value, label, defaultChecked, required }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Radio Input */}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        required={required}
        disabled
        className="pointer-events-none h-4 w-4 text-indigo-600 border-gray-300 rounded-full focus:ring-indigo-500 disabled:cursor-not-allowed"
      />

      {/* Radio Label */}
      <label
        htmlFor={id}
        className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
