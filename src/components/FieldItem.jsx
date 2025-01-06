import React from 'react';
import {CSS} from '@dnd-kit/utilities'
import { useDraggable } from '@dnd-kit/core';

const FieldItem =({ field }) =>{
   const { attributes, listeners, setNodeRef, transform, transition,isDragging } = useDraggable({ id:field.type });
  
    const style = {
      visibility:  isDragging ? "hidden" : "" , 
      transform: CSS.Transform.toString(transform),
      transition,
    };
 return (
    <div
      ref={setNodeRef}
      style={style} 
      {...attributes} 
      {...listeners} 
      name={field.type}
      className="bg-fontBlack text-white font-light text-sm flex justify-start items-center h-10 rounded"
    >
      <span className="flex justify-center items-center mx-3">
        
      </span>
      {field.label}
    </div>
  );
}

export default FieldItem;
