import React from 'react'
import Textarea from './Elements/Textarea'
import Select from './Elements/Select'
import Input from './Elements/Input'
import Radio from './Elements/Radio'
import Checkbox from './Elements/Checkbox'
import Button from './Elements/Button'
import {SortableContext ,verticalListSortingStrategy } from '@dnd-kit/sortable'
import MultiCheckBox from './Elements/MultiCheckBox'



const renderFormElement = (element) => {
    switch (element.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'date' : 
        case 'number':
        case 'file' : 
        case 'tel' :
        case 'url' :    
        case 'color' :
        case 'range' :
            return <Input key={element.id} {...element} />;
        case 'textarea':
            return <Textarea key={element.id} {...element} />;
        case 'select':
            return <Select key={element.id} {...element} />;
        case 'radio':
            return <Radio key={element.id} {...element} />;
        case 'checkbox':
            return <Checkbox key={element.id} {...element} />;
        case 'multi-checkbox':
            return <MultiCheckBox key={element.id} {...element} />;
        case 'submit':
        case 'reset':
            return <Button key={element.id} {...element} />;
        default:
            return null;
    }
};


function FormBuilder(props) {
  return (
    <div
        className={`bg-gray-100  pt-24 min-h-screen overflow-y-auto text-black text-4xl font-bold transition-all duration-500 ${
          props.isExpanded ? "w-full" : "w-1/2"
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${props.isExpanded ? "w-1/3" : "w-1/2"} `}>
        <SortableContext items={props.formElements} strategy={verticalListSortingStrategy}>
                <div className='flex flex-col gap-6'>
                     {props.formElements.map(renderFormElement)}
                 </div>
        </SortableContext>
    
        </div>
      </div>
  )
}

export default FormBuilder