import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const HR = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : 1, // Adjust opacity when dragging
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="sortable-item"
    >
     <hr className="w-4/5  mx-auto border-gray-300 border-t-[5px]" />
     </div>
  );
};

export default HR;
