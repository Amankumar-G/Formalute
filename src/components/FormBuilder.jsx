import React, { useEffect } from 'react';
import Textarea from './Elements/Textarea';
import Select from './Elements/Select';
import Input from './Elements/Input';
import Radio from './Elements/Radio';
import Checkbox from './Elements/Checkbox';
import Button from './Elements/Button';
import { SortableContext } from '@dnd-kit/sortable';
import MultiCheckBox from './Elements/MultiCheckBox';
import { DragOverlay } from '@dnd-kit/core';
import config from '../MainConfigFile';

const renderFormElement = (element) => {
    switch (element.type) {
        case 'text':
        case 'email':
        case 'password':
        case 'date':
        case 'number':
        case 'file':
        case 'tel':
        case 'url':
        case 'color':
        case 'range':
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
                props.isExpanded ? 'w-1/2' :'w-full' 
            }`}
        >
            <div
                className={`mx-auto transition-all duration-500 ${
                    props.isExpanded ? 'w-1/2' : 'w-1/3'
                } `}
            >
                <SortableContext items={props.formElements} strategy={() => {}}>
                    <div className="flex flex-col gap-6">
                        {props.formElements.map((element) => (
                            <div
                                key={element.id}
                                onClick={()=>props.handleIsProperty(element)}
                                className="p-4 border border-transparent hover:border-gray-600 transition-all  rounded-lg duration-300"
                            >
                                {renderFormElement(element)}
                            </div>
                        ))}
                    </div>
                </SortableContext>
                <DragOverlay>
                    {props.activeId ? (() => {
                        const elem = props.formElements.find(
                            (elem) => elem.id === props.activeId
                        );
                        return elem ? (
                            <div className="p-2 opacity-90 hover:opacity-75 transition-all duration-300">
                                {renderFormElement(elem)}
                            </div>
                        ) : null;
                    })() : null}
                </DragOverlay>
            </div>
        </div>
    );
}

export default FormBuilder;
