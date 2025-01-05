import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Radio = ({ label, id, name, value }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      <div className="flex items-center mx-auto">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Radio;
