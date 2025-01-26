import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const HTML = ({
  label,
  id,
  value,
  color = 'black', // Default color
  italic = false, // Default to not italic
  bold = false, // Default to not bold
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    opacity: isDragging ? 0.5 : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
    color, // Dynamically set text color
    fontStyle: italic ? 'italic' : 'normal', // Dynamically set italic
    fontWeight: bold ? 'bold' : 'normal', // Dynamically set bold
  };
  console.log(value);
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      {/* Dynamically render content based on the 'value' */}
      {value === 'h1' && <h1 style={style} className="text-xl">{label}</h1>}
      {value === 'h2' && <h2 style={style} className="text-lg">{label}</h2>}
      {value === 'h3' && <h3 style={style} className="text-md">{label}</h3>}
      {value === 'p' && <p style={style} className="text-base">{label}</p>}
      {/* Add more cases for other 'value' types if needed */}
    </div>
  );
};

export default HTML;
