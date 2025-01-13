import React from 'react'
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Input = ({ label, type = 'text', id, name, placeholder }) => {
  const { attributes, listeners, setNodeRef, transform, transition,isDragging} = useSortable({ id });
  console.log(type)
  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item h-24">
      <label htmlFor={id} className="block text-base font-bold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type === "hidden"? "text" : type}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled
        className="pointer-events-none block w-full h-14 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:bg-white disabled:text-black disabled:cursor-default"
      />
    </div>
  );
};
  
export default Input