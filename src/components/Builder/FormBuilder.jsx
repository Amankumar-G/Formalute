import React from 'react';
import { SortableContext } from '@dnd-kit/sortable';
import { DragOverlay } from '@dnd-kit/core';
import { FaTrashAlt } from 'react-icons/fa';

import HR from './Elements/HR';
import Input from './Elements/Input';
import Textarea from './Elements/Textarea';
import Select from './Elements/Select';
import Radio from './Elements/Radio';
import Checkbox from './Elements/Checkbox';
import Button from './Elements/Button';
import MultiCheckBox from './Elements/MultiCheckBox';
import HTML from './Elements/HTML';
import Color from './Elements/Color';

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
        case 'range':
        case 'hidden':
            return <Input key={element.id} {...element} />;
        case 'color':
            return <Color key={element.id} {...element} />;
        case 'textarea':
            return <Textarea key={element.id} {...element} />;
        case 'select':
            return <Select key={element.id} {...element} />;
        case 'radio':
            return <Radio key={element.id} {...element} />;
        case 'checkbox':
            return <Checkbox key={element.id} {...element} />;
        case 'multiple-checkbox':
            return <MultiCheckBox key={element.id} {...element} />;
        case 'submit':
        case 'reset':
        case 'button':
            return <Button key={element.id} {...element} />;
        case 'html':
            return <HTML key={element.id} {...element} />;
        case 'divider':
            return <HR key={element.id} id={element.id} />;
        default:
            return null;
    }
};

function FormBuilder(props) {
    const activeElement = props.activeId
        ? props.formElements.find((elem) => elem.id === props.activeId)
        : null;

    return (
        <div
            className={`py-6 mx-auto mt-7 transition-all duration-500 ${props.isExpanded ? 'w-1/2' : 'w-1/3'} overflow-y-auto`} // Parent allows scrolling if content overflows
        >
            <div className={`flex flex-col gap-4 ${props.stepper ? 'max-h-[70vh]' : 'max-h-[80vh]'} overflow-y-auto`}>
                <SortableContext items={props.formElements} strategy={() => { }}>
                    {props.formElements.map((element) => (
                        <div
                            key={element.id}
                            onClick={
                                element.type !== 'divider'
                                    ? (event) => {
                                        event.stopPropagation(); // Prevents event bubbling to parent elements.
                                        props.handleIsProperty(element); // Triggers the parent click behavior.
                                    }
                                    : undefined
                            }
                            className="p-4 border border-transparent hover:border-gray-300 transition-all rounded-lg duration-300 relative group"
                        >
                            {renderFormElement(element)}
                            <button
                                onClick={(event) => {
                                    event.stopPropagation(); // Prevents event bubbling to parent elements.
                                    props.handleDelete(element.id); // Call the delete handler with the element's ID.
                                }}
                                className="button absolute top-2 right-4 p-2 text-white rounded-full bg-gray-600 opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-opacity duration-300"
                                aria-label="Delete"
                            >
                                <FaTrashAlt className="w-3 h-3" />
                            </button>
                        </div>
                    ))}
                </SortableContext>
            </div>

            <DragOverlay>
                {activeElement && (
                    <div
                        className={`${props.isInvalidDropZone ? 'invalid-zone' : ''} rounded-lg p-4 bg-white shadow-lg opacity-90 hover:opacity-75 transition-all duration-300`}
                    >
                        {renderFormElement(activeElement)}
                    </div>
                )}
            </DragOverlay>
        </div>
    );
}

export default FormBuilder;
