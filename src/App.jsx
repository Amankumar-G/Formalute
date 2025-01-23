import React, { useState, useMemo, useCallback, useEffect } from "react";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, rectIntersection } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import FormElements from "./components/Sidebar/FormElements";
import FormBuilder from "./components/Builder/FormBuilder";
import Notification from "./components/Notification";
import PropertyBar from "./components/Property/PropertyBar";
import FormRenderer from "./components/FormRenderer/FormRenderer";
import FormData from "./FormData";
import config from "./MainConfigFile";
import './index.css' 

function App() { 
  // State variables
  const [isExpanded, setIsExpanded] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const [jsonConfig , setJsonConfig] = useState(null)
  const [isProperty, setIsProperty] = useState(false);
  const [formElements, setFormElements] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isDeleteWarningVisible, setIsDeleteWarningVisible] = useState(false);
  const [pendingDeletionElement, setPendingDeletionElement] = useState(null);
  const [isInvalidDropZone, setIsInvalidDropZone] = useState(false);

  // Drag-and-Drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Utility: Map form element IDs to their positions
  const positionMap = useMemo(
    () =>
      formElements.reduce((acc, element, index) => {
        acc[element.id] = index;
        return acc;
      }, {}),
    [formElements]
  );

  const getTaskPos = useCallback((id) => positionMap[id] ?? -1, [positionMap]);

  // Handlers
  const handleExpandToggle = () => {
    setIsProperty(false);
    setIsExpanded((prev) => !prev);
  };
  const handleIsProperty = (element) => {
    setActiveElement(element);
    setIsExpanded(true);
    setIsProperty(true);
  };
  
  const handleDragStart = useCallback(
    (event) => {
      const originalPos = getTaskPos(event.active.id);
      
      if (originalPos === -1) {
        // Add a new form element
        setFormElements((prevElements) => {
          const newElement = addTask(event.active.id);
          if (newElement) {
            setActiveId(newElement.id);
            event.active.data.current = { newId: newElement.id, hasAdded: true };
            showNotification("Form Element added!");
            return [...prevElements, newElement];
          }
          return prevElements;
        });
      } else {
        event.active.data.current = { hasAdded: false };
      }
      
      setActiveId(event.active.data.current?.newId || event.active.id);
    },
    [getTaskPos]
  );
  
  const handleDragOver = useCallback(
    (event) => {
      const { active, over } = event;
        if(over==null){
          setIsInvalidDropZone(true);
        }else{
          setIsInvalidDropZone(false);
        }
      if (!over || active.id === over.id) return;

      setFormElements((prevElements) => {
        const originalPos = getTaskPos(active.data.current?.newId || active.id);
        const newPos = getTaskPos(over.id);
        return arrayMove(prevElements, originalPos, newPos);
      });
    },
    [getTaskPos]
  );

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (!over) {
      setPendingDeletionElement(active.data.current?.newId || active.id);
      setIsDeleteWarningVisible(true);
    } else {
      setActiveId(null);
    }
  }, []);

  const addTask = (type) => {
    const template = config.find((input) => input.type === type);
    if (!template) return null;
    return { ...template, id: uuidv4() };
  };

  const handleSave = () => {
    const data = JSON.stringify(formElements, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ConfigForm.json";
    link.click();
  };
  
  const handleRenderer = () =>{
    setIsRendered((prev)=> !prev)
  }

  const handleAddTask = (field) => {
    const newElement = addTask(field.type);
    setFormElements((prevElements) => [...prevElements, newElement]);
    showNotification("Form Element added!");
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 1000);
  };

  const handleConfirmDelete = () => {
    setFormElements((prevElements) =>
      prevElements.filter((element) => element.id !== pendingDeletionElement)
    );
    setIsDeleteWarningVisible(false);
    setPendingDeletionElement(null);
  };
  
 useEffect(() => {
  setJsonConfig(JSON.stringify(formElements, null, 2)); // Convert formElements to a JSON string
}, [formElements]); // This effect runs when formElements changes

  return (
    <div className="flex h-screen overflow-x-hidden flex-col">
    {notification && <Notification notification={notification} />}
    {isDeleteWarningVisible && (
  <>
    <div className="modal-overlay"></div>
    <div className="modal">
      <p>Are you sure you want to delete this element?</p>
      <button onClick={handleConfirmDelete}>Confirm</button>
      <button onClick={() => setIsDeleteWarningVisible(false)}>Cancel</button>
    </div>
  </>
)}

    {/* Navbar */}
    <div className="w-full z-10 bg-gray-700 text-white p-4 flex justify-between items-center shadow-md">
      {/* Navbar Title */}
      <div className="text-lg font-bold">Ninja JS</div>
      
      {/* Navbar Menu */}
      <div className="flex space-x-6">
        <button
          onClick={handleExpandToggle}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Add Element
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Save
        </button>
        <button
          onClick={handleRenderer}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Preview
        </button>
      </div>
    </div>
    
    {/* Main Content */}
    <div className="flex flex-1 overflow-hidden">
      {/* Drag-and-Drop Context */}
      <DndContext
        sensors={sensors}
        collisionDetection={rectIntersection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragEnd}
      >
        {/* Left Panel */}
        {!isRendered && (
          <div className={`transition-all duration-500 ${isExpanded ? "w-1/2" : "w-full"} overflow-y-auto`}>
            <FormBuilder
              isExpanded={isExpanded}
              formElements={formElements}
              activeId={activeId}
              setFormElements={setFormElements}
              addTask={addTask}
              getTaskPos={getTaskPos}
              handleIsProperty={handleIsProperty}
              isInvalidDropZone={isInvalidDropZone}
            />
          </div>
        )}
  
        {/* Right Panel */}
        {!isRendered && (
          <div
            className={`transform  transition-all duration-500 ${
              isExpanded ? "translate-x-0 w-1/2 opacity-100" : "translate-x-full w-0 opacity-0"
            } overflow-y-auto`}
          >
            {isProperty ? (
                <PropertyBar activeElement={activeElement} setFormElements={setFormElements} />
            ) : (
              <FormElements onAddTask={handleAddTask} />
            )}
          </div>
        )}
  
        {/* FormRenderer (Only shows when isRendered is true) */}
        {isRendered && (
          <div className={`overflow-y-scroll transform transition-all duration-500 translate-y-0 w-full opacity-100`}>
            <FormRenderer jsonConfig={jsonConfig} />
          </div>
        )}
      </DndContext>
    </div>
  </div>
  

  );
}

export default App;




