import React from 'react';
import FieldItem from './FieldItem';

function FormSection({ group, addElement ,activeId}) {
  return (
    <>
      {/* Heading */}
      <h1 className="text-base font-semibold text-fontBlack pt-5 pl-5">{group.heading}</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl p-5">
        {/* Grid Items */}
        {group.fields.map((field, index) => (
          <FieldItem key={index} field={field} />
        ))}
      </div>
    </>
  );
}

export default FormSection;
