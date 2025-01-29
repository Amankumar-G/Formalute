import React from 'react';
import FormElementsData from './FormElementData';
import FormSection from './FormSection';

const FormElements = (props) => {
  const sections = FormElementsData.map((group, index) => {
    return <FormSection key={index} group={group} onAddTask={props.onAddTask} />;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-all duration-500 p-6">
      {sections}
    </div>
  );
}

export default FormElements;
