import React, { useState, useMemo, useCallback } from "react";
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
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import config from "./MainConfigFile";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formElements, setFormElements] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const handleButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const positionMap = useMemo(() => {
    return formElements.reduce((acc, task, index) => {
      acc[task.id] = index;
      return acc;
    }, {});
  }, [formElements]);

  const getTaskPos = useCallback(
    (id) => positionMap[id] ?? -1,
    [positionMap]
  );

  const handleDragStart = useCallback((event) => {
    const originalPos = getTaskPos(event.active.id);

    if (originalPos === -1) {
      setFormElements((tasks) => {
        const newTasks = [...tasks];
        const newItem = addTask(event.active.id, newTasks); // Add the new task

        if (newItem) {
          setActiveId(newItem.id);
          event.active.data.current = { newId: newItem.id, hasAdded: true };
          return [...newTasks, newItem]; // Return the updated task list
        }
        return tasks;
      });
    } else {
      event.active.data.current = { hasAdded: false };
    }

    setActiveId(event.active.data.current?.newId || event.active.id);
  }, [getTaskPos]);

  const handleDragOver = useCallback((event) => {
    const { active, over } = event;
    const activeId = active.data.current?.newId || active.id;

    if (!over || activeId === over.id) {
      return;
    }

    setFormElements((tasks) => {
      const originalPos = getTaskPos(activeId);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks, originalPos, newPos);
    });
  }, [getTaskPos]);

  const addTask = (type, currentElements) => {
    const response = config.find((input) => input.type === type);
    if (!response) return null;

    return {
      ...response,
      id: uuidv4(),
    };
  };

  const handleDragEnd = useCallback(() => {
    setActiveId(null);
  }, []);

  const handleSave = () => {
    const data = JSON.stringify(formElements, null, 2); // Convert formElements to JSON

    // Create a Blob with the JSON data and trigger download
    const blob = new Blob([data], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ConfigForm.json';
    link.click();
  };

  return (
    <div className="flex relative h-screen overflow-x-hidden">
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragCancel={handleDragEnd}
        sensors={sensors}
      >
        {/* Left Side */}
        <FormBuilder
          isExpanded={isExpanded}
          formElements={formElements}
          activeId={activeId}
          setFormElements={setFormElements}
          addTask={addTask}
          getTaskPos={getTaskPos}
        />

        {/* Right Side */}
        <FormElements isExpanded={isExpanded} />
      </DndContext>

      {/* Buttons */}
      <button
        onClick={handleButtonClick}
        className="absolute bottom-20 right-20 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600"
      >
        +
      </button>

      <button
        onClick={handleSave}
        className="absolute bottom-10 right-20 bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
}

export default App;
