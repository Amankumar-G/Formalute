import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const MultiCheckBox = ({ label, id, name , options}) => {  
  
  const { attributes, listeners, setNodeRef, transform, transition,isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      <div className="flex flex-col">
      <label htmlFor={`${label}`} className="mb-2 block text-base text-gray-700">
            {label}
        </label>
        {options.map((option, index) => {
            return (
                <div key={index} className="flex items-center mb-4">
                    <input
                    type="checkbox"
                    id={`${name}-${index}`}
                    value={option.value}
                    name={name}
                    disabled
                    className="pointer-events-none h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={`${name}-${index}`} className="ml-2 block text-sm text-gray-700">
                        {option.text}
                    </label>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default MultiCheckBox;
