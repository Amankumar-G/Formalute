import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const Button = ({ id, type, value }) => {
  const { attributes, listeners, setNodeRef, transform, transition ,isDragging} = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      <button
        type={type}
        className="pointer-events-none bg-zinc-500 hover:bg-zinc-700 text-white text-xl py-2 px-4 rounded my-auto block disabled:bg-white disabled:text-black disabled:cursor-default"
        disabled
      >
        {value}
      </button>
    </div>
  );
};

export default Button;
