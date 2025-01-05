import React from 'react'

function FormSection(props) {
  return (
    <>
     {/* Heading */}
     <h1 className="text-base font-semibold text-fontBlack pt-5 pl-5">{props.group.heading}</h1>
          
     {/* Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl p-5">
       {/* Grid Items */}

       {props.group.fields.map((field, index) => (
         <div
          onClick={props.addElement}
           key={index}
           name={field.type}
           className="bg-fontBlack text-white font-light text-sm flex justify-start items-center h-10 rounded"
         >
           <span className='flex justify-center items-center mx-3'><img className="w-5" src={field.image} alt="" /></span>
          {field.label}
         </div>
       ))}

     </div>
    </>
  )
}

export default FormSection