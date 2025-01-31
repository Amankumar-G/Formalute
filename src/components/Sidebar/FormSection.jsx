import React from 'react';
import FieldItem from './FieldItem';

function FormSection({ group, onAddTask }) {
  return (
    <>
      {/* Heading */}
      <h1 className="text-xl font-semibold text-gray-900 pt-5 pl-6">{group.heading}</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-6 py-4">
        {/* Render Field Items */}
        {group.fields.map((field, index) => (
          <FieldItem key={index} field={field} onAddTask={onAddTask} />
        ))}
      </div>
    </>
  );
}

export default FormSection;
