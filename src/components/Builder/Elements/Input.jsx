import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Input = ({ label, type = 'text', id, name, placeholder }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item h-20">
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        type={type === "hidden" ? "text" : type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled
        className="pointer-events-none placeholder:text-xs block w-full h-10 px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-white disabled:text-gray-700 disabled:cursor-default"
      />
    </div>
  );
};

export default Input;
