import React from 'react';
import FieldItem from './FieldItem';

function FormSection({ group, onAddTask}) {
  return (
    <>
      {/* Heading */}
      <h1 className="text-base font-bold Black pt-3 pl-5">{group.heading}</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full max-w-4xl p-5">
        {/* Grid Items */}
        {group.fields.map((field, index) => (
        <FieldItem key={index} field={field} onAddTask={onAddTask} />
        ))}
      </div>
    </>
  );
}

export default FormSection;
