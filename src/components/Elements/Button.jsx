import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Button = ({ id, type, value }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      <button
        type={type}
        className="bg-zinc-500 hover:bg-zinc-700 text-white text-xl py-2 px-4 rounded my-auto block"
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
