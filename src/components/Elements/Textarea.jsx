import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Textarea = ({ label, id, name, placeholder }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : 1, // Ensure no dullness for disabled state
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      <label htmlFor={id} className="block text-base font-bold text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        rows="5"
        disabled
        className="pointer-events-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-white disabled:text-black disabled:cursor-default resize-none"
      ></textarea>
    </div>
  );
};

export default Textarea;
