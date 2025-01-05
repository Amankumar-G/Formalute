import React, { useState } from "react";
import FormElements from "./components/FormElements";
import FormBuilder from "./components/FormBuilder";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from "@dnd-kit/core";
import  FormData  from './components/FormData'
import { arrayMove ,sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import config from "./MainConfigFile";

function SplitScreen() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formElements, setFormElements] = useState(FormData);
  const handleButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };

    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    ); 
  const getTaskPos = (id) => formElements.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setFormElements((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      if(originalPos === -1){
        addTask(active.id)
        return
      }
      return arrayMove(tasks, originalPos, newPos);
    });
  };
  
  const addElement = (event) => {
    const name = event.target.getAttribute('name');
    const response = config.filter(input => input.type === name);
    setFormElements((elements) => [...elements, ...response.map(item => ({ ...item, id: formElements.length +1  }))]);
  }

  return (
    <div className="flex relative h-screen overflow-x-hidden">
     < DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
      {/* Left Side */}
  
      <FormBuilder isExpanded={isExpanded} formElements={formElements}/>

      {/* Right Side */}

      <FormElements isExpanded={isExpanded} addElement={addElement}/>

      {/* Button */}
      </DndContext>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-10 right-20 bg-green-500 text-white w-12  h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600"
      >
        +
      </button>


    </div>
  );
}

export default SplitScreen;
