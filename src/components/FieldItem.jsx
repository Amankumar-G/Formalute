import React from 'react';
import {CSS} from '@dnd-kit/utilities'
import { useDraggable } from '@dnd-kit/core';

const FieldItem =({ field, addElement }) =>{
   const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id:field.type });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
 return (
    <div
      ref={setNodeRef}
      style={style} 
      {...attributes} 
      {...listeners} 
      onClick={addElement}
      name={field.type}
      className="bg-fontBlack text-white font-light text-sm flex justify-start items-center h-10 rounded"
    >
      <span className="flex justify-center items-center mx-3">
        <img className="w-5" src={field.image} alt={field.label} />
      </span>
      {field.label}
    </div>
  );
}

export default FieldItem;
