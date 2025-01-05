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
import FormData from './components/FormData'
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import config from "./MainConfigFile";

function SplitScreen() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formElements, setFormElements] = useState(FormData);
  console.log(formElements)
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
    if (!over || active.id === over.id) return;
  
    setFormElements((tasks) => {
      const originalPos = getTaskPos(active.id);
      let newTasks = [...tasks];
  
      if (originalPos === -1) {
        // Item is not in the list; add it
        const newItemIndex = newTasks.length; // The position where the new item will be added
        const newItem = addTask(active.id, newTasks); // Add item to the list
        if (newItem) {
          newTasks = [...newTasks, newItem];
          return arrayMove(newTasks, newItemIndex, getTaskPos(over.id));
        }
      }
  
      const newPos = getTaskPos(over.id);
      return arrayMove(newTasks, originalPos, newPos);
    });
  };
  
  const addTask = (type, currentElements) => {
    const response = config.find((input) => input.type === type);
    if (!response) return null;
  
    const newItem = {
      ...response,
      id: currentElements.length + 1, // Generate a unique ID
    };
  
    return newItem; // Return the new item to be added
  };
  
  const addElement = (event) => {
    console.log("add")
    const name = event.target.getAttribute('name');
    const response = config.filter(input => input.type === name);
    setFormElements((elements) => [...elements, ...response.map(item => ({ ...item, id: formElements.length + 1 }))]);
  }

  return (
    <div className="flex relative h-screen overflow-x-hidden">
      < DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
        {/* Left Side */}

        <FormBuilder isExpanded={isExpanded} formElements={formElements} />

        {/* Right Side */}

        <FormElements isExpanded={isExpanded} addElement={addElement} />

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
