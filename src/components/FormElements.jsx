import React from 'react'
import FormElementsData from './FormElementData'
import FormSection from './FormSection'

const FormElements = (props) => {
  const sections = FormElementsData.map((group,index) =>{
    return <FormSection key={index} group={group} />
  })
  return (
    <div className={`min-h-screen bg-customGray flex flex-col transition-all duration-500 ${
        props.isExpanded ? "w-0 opacity-0" : "w-1/2 opacity-100"
      }`}>
     {sections}
    </div>
  )
}

export default FormElements

