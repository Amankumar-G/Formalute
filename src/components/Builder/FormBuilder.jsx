import React from 'react';
import Textarea from './Elements/Textarea';
import Select from './Elements/Select';
import Input from './Elements/Input';
import Radio from './Elements/Radio';
import Checkbox from './Elements/Checkbox';
import Button from './Elements/Button';
import { SortableContext } from '@dnd-kit/sortable';
import MultiCheckBox from './Elements/MultiCheckBox';
import { DragOverlay } from '@dnd-kit/core';
import HTML from './Elements/HTML';
import DeleteBlackIcon from '../../assets/trash-delete-bin-svgrepo-com.svg';
import DeleteWhiteIcon from '../../assets/trash-delete-bin-svgrepo-com (1).svg';


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
        case 'hidden':
            return <Input key={element.id} {...element} />;
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
            return <Button key={element.id} {...element} />;
        case 'html':
            return <HTML key={element.id} {...element} />;
        case 'divider':
            return <hr key={element.id} />;
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
            className={`py-5 mx-auto transition-all duration-500 ${props.isExpanded ? 'w-1/2' : 'w-1/3'
                } overflow-y-auto`} // Parent allows scrolling if content overflows
        >
            <div className={`flex flex-col gap-2 ${props.stepper ? "max-h-[70vh]" : "max-h-[80vh]"} overflow-y-auto`}> {/* Added max-height and overflow-y-auto */}
                <SortableContext items={props.formElements} strategy={() => { }}>
                    {props.formElements.map((element) => (
                        <div
                            key={element.id}
                            onClick={
                                element.type !== "divider"
                                    ? (event) => {
                                        console.log(element);
                                        event.stopPropagation(); // Prevents event bubbling to parent elements.
                                        props.handleIsProperty(element); // Triggers the parent click behavior.
                                    }
                                    : undefined
                            }
                            className="p-4 border border-transparent hover:border-gray-600 transition-all rounded-lg duration-300 relative group"
                        >
                            {renderFormElement(element)}
                            <button
                                onClick={(event) => {
                                    event.stopPropagation(); // Prevents event bubbling to parent elements.
                                    props.handleDelete(element.id); // Call the delete handler with the element's ID.
                                }}
                                className="button absolute top-2 right-4 p-1 text-white rounded-full transition-all opacity-0 group-hover:opacity-100 border border-red-400 hover:bg-red-200"
                                aria-label="Delete"
                            >
                                <img
                                    src={DeleteBlackIcon}
                                    alt="Delete"
                                    className="w-4 h-4"
                                />
                            </button>

                        </div>
                    ))}
                </SortableContext>
            </div>

            <DragOverlay>
                {activeElement && (
                    <div
                        className={`${props.isInvalidDropZone ? 'invalid-zone' : ''
                            } rounded-lg p-4 bg-white shadow-md opacity-90 hover:opacity-75 transition-all duration-300`}
                    >
                        {renderFormElement(activeElement)}
                    </div>
                )}
            </DragOverlay>
        </div>


    );
}

export default FormBuilder;
