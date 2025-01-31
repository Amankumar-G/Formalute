import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  rectIntersection,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import FormElements from "./components/Sidebar/FormElements";
import FormBuilder from "./components/Builder/FormBuilder";
import Notification from "./components/Notification";
import Modal from "./components/Modal";
import PropertyBar from "./components/Property/PropertyBar";
import FormRenderer from "./components/FormRenderer/FormRenderer";
import config from "./MainConfigFile";
import "./index.css";
import Navbar from "./components/Navbar";
import { LeftButtons, RightButtons, AddButton,Stepper } from "./components/LeftRightButtons";


function App({ onSave }) {
  // State variables
  const [isExpanded, setIsExpanded] = useState(true);
  const [isRendered, setIsRendered] = useState(false);
  const [jsonConfig, setJsonConfig] = useState(null);
  const [isProperty, setIsProperty] = useState(false);
  const [isMultiPart, setIsMultiPart] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isDeleteWarningVisible, setIsDeleteWarningVisible] = useState(false);
  const [pendingDeletionElement, setPendingDeletionElement] = useState(null);
  const [isInvalidDropZone, setIsInvalidDropZone] = useState(false);
  const [formPartitions, setFormPartitions] = useState([[]]);
  const [activePartitionIndex, setActivePartitionIndex] = useState(0);
  const currentPartitionElements = useMemo(
    () => formPartitions[activePartitionIndex] || [],
    [formPartitions, activePartitionIndex]
  );
 
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // Memoized utility: Map form element IDs to their positions
  const positionMap = useMemo(
    () =>
      currentPartitionElements.reduce((acc, element, index) => {
        acc[element.id] = index;
        return acc;
      }, {}),
    [currentPartitionElements]
  );

  const getTaskPos = useCallback((id) => positionMap[id] ?? -1, [positionMap]);
  
  // Partition navigation
  const handleAddPartition = () => {
    setFormPartitions((prev) => {
      const newPartition = [...prev, []];
      setActivePartitionIndex(newPartition.length - 1); // Set the newly added partition as active
      showNotification("New Section Added!");
      return newPartition;
    });
  };

  const handleNavigatePartition = (direction) => {
    setActivePartitionIndex((prevIndex) => {
      const newIndex = direction === "forward" ? prevIndex + 1 : prevIndex - 1;
      return Math.max(0, Math.min(newIndex, formPartitions.length - 1));
    });
  };
  const handleExpandToggle = () => {
    setIsProperty(false);
    setIsRendered(false);
    setIsExpanded((prev) => !prev);
  };
  const handleIsProperty = (element) => {
    setActiveElement(element);
    setIsExpanded(true);
    setIsProperty(true);
  };
  // Drag-and-Drop Handlers
  const handleDragStart = useCallback(
    (event) => {
      const originalPos = getTaskPos(event.active.id);

      if (originalPos === -1) {
        // Add a new form element
        setFormPartitions((prev) => {
          const newElement = addTask(event.active.id);
          if (newElement) {
            setActiveId(newElement.id);
            event.active.data.current = { newId: newElement.id, hasAdded: true };
            showNotification("Form Element added!");

            return prev.map((partition, idx) =>
              idx === activePartitionIndex ? [...partition, newElement] : partition
            );
          }
          return prev;
        });
      } else {
        event.active.data.current = { hasAdded: false };
      }
      setActiveId(event.active.data.current?.newId || event.active.id);
    },
    [getTaskPos, activePartitionIndex]
  );

  const handleDragOver = useCallback(
    (event) => {
      const { active, over } = event;

      // If no valid drop target is under the dragged item
      if (!over) {
        setIsInvalidDropZone(true);
        return;
      }

      setIsInvalidDropZone(false);

      // Prevent redundant updates when active item is already over the same target
      if (active.id === over.id) return;

      // Update the partitions state without causing unnecessary fluctuation
      setFormPartitions((prevPartitions) => {
        const updatedPartitions = [...prevPartitions];

        const originalPos = getTaskPos(active.data.current?.newId || active.id);
        const newPos = getTaskPos(over.id);

        // If positions are invalid or unchanged, skip the update
        if (originalPos === -1 || newPos === -1 || originalPos === newPos) {
          return updatedPartitions;
        }

        updatedPartitions[activePartitionIndex] = arrayMove(
          updatedPartitions[activePartitionIndex],
          originalPos,
          newPos
        );

        return updatedPartitions;
      });
    },
    [getTaskPos, activePartitionIndex]
  );


  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (!over) {
        setPendingDeletionElement(active.id);
        setIsDeleteWarningVisible(true);
      } else {
        if (active.id === over.id && !event.active.data.current?.hasAdded) {
          setActiveId(null);
        }
      }
    },
    []
  );

  const handleDelete = (id) => {
    setFormPartitions((prev) => {
      const updatedPartitions = [...prev];
      updatedPartitions[activePartitionIndex] = updatedPartitions[
        activePartitionIndex
      ].filter((el) => el.id !== id);
      return updatedPartitions;
    });
  };
  const addTask = (type) => {
    const template = config.find((input) => input.type === type);
    return template ? { ...template, id: uuidv4() } : null;
  };

  // Save and Renderer Handlers
  const handleSave = () => {
    // Prepare data with partition details
    const data = formPartitions.map((partition, index) => ({
      partitionIndex: index + 1, // Start partition index from 1 for user clarity
      elements: partition,
    }));
  
    // Convert the structured data to a JSON string
    const jsonData = JSON.stringify(data, null, 2);
  
    // Save the JSON file
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ConfigFormWithPartitions.json";
    link.click();
  
    // Trigger onSave callback if provided
    if (onSave) onSave(jsonData);
  };
    

  const handleRenderer = () =>{ 
    setIsRendered((prev) => !prev)}
    ;

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 1000);
  };

  const handleConfirmDelete = () => {
    setFormPartitions((prev) => {
      const updatedPartitions = [...prev];
      updatedPartitions[activePartitionIndex] = updatedPartitions[
        activePartitionIndex
      ].filter((el) => el.id !== pendingDeletionElement);
      return updatedPartitions;
    });
    setIsDeleteWarningVisible(false);
    setPendingDeletionElement(null);
  };

  const handleIsMultiPart = () => {
    setIsRendered(false)
    setIsMultiPart((prev) => !prev);
  };

  const handleDeletePartition = (index) => {
    setFormPartitions((prev) => {
      if (prev.length === 1) {
        showNotification("Cannot delete the last partition!");
        return prev; // Prevent deleting the last partition
      }
      
      const updatedPartitions = prev.filter((_, i) => i !== index); // Remove the selected partition
  
      // Adjust active partition index if necessary
      setActivePartitionIndex((prevIndex) => {
        if (index <= prevIndex && prevIndex > 0) {
          return prevIndex - 1; // Move active index back if the deleted partition was before/at the active one
        }
        return prevIndex; // Keep index as is if the deleted partition was after
      });
  
      showNotification("Partition Deleted!");
      return updatedPartitions;
    });
  };
  

  useEffect(() => {
    setJsonConfig((prev) =>{
      const data = formPartitions.map((partition, index) => ({
        partitionIndex: index + 1, // Start partition index from 1 for user clarity
        elements: partition,
      }));
      prev = JSON.stringify(data, null, 2)
      return prev
    });
  }, [currentPartitionElements]);

  return (
    <div className="flex h-screen overflow-x-hidden flex-col">
      

      {isDeleteWarningVisible && (
        <Modal
          handleConfirmDelete={handleConfirmDelete}
          setIsDeleteWarningVisible={setIsDeleteWarningVisible}
        />
      )}

      <Navbar
        handleExpandToggle={handleExpandToggle}
        handleSave={handleSave}
        handleRenderer={handleRenderer}
        handleIsMultiPart={handleIsMultiPart}
        notification={notification}
        />

      <div className="flex flex-1 overflow-hidden">
        <DndContext
          sensors={sensors}
          collisionDetection={rectIntersection}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          {!isRendered && (
            <div
              className={`transition-all  relative duration-500 ${isExpanded ? "w-1/2" : "w-full"
                } overflow-hidden`}
            >
              {activePartitionIndex > 0 &&
                <LeftButtons handleNavigatePartition={handleNavigatePartition} />}

      
              { activePartitionIndex < formPartitions.length - 1 && <RightButtons handleNavigatePartition={handleNavigatePartition} />}


               {formPartitions.length > 1 &&<Stepper handleDeletePartition={handleDeletePartition} formPartitions={formPartitions} activePartitionIndex={activePartitionIndex} setActivePartitionIndex={setActivePartitionIndex} isRendered={isRendered}/>}

              {/* "+" Button */}
              {isMultiPart && activePartitionIndex === formPartitions.length - 1 &&
               <AddButton handleAddPartition={handleAddPartition} />}
              {/* <div className=""> */}
              {notification && <Notification notification={notification} />}
              <FormBuilder
                isExpanded={isExpanded}
                formElements={currentPartitionElements}
                activeId={activeId}
                setFormElements={(updatedElements) => {
                  setFormPartitions((prev) => {
                    const updatedPartitions = [...prev];
                    updatedPartitions[activePartitionIndex] = updatedElements;
                    return updatedPartitions;
                  });
                }}
                handleDelete={handleDelete}
                addTask={addTask}
                getTaskPos={getTaskPos}
                handleIsProperty={handleIsProperty}
                isInvalidDropZone={isInvalidDropZone}
                stepper={formPartitions.length > 1}
              />
            </div>
          )}

          {!isRendered && (
            <div
              className={`transform  transition-all duration-500 ${isExpanded ? "translate-x-0 w-1/2 opacity-100" : "translate-x-full w-0 opacity-0"
                } overflow-y-auto`}
            >
              {isProperty ? (
                <PropertyBar
                  activeElement={activeElement}
                  setFormPartitions={setFormPartitions}
                  setIsProperty={setIsProperty}
                  activePartitionIndex={activePartitionIndex}
                />
              ) : (
                <FormElements
                  onAddTask={(field) => {
                    const newElement = addTask(field.type);
                    setFormPartitions((prev) => {
                      const updatedPartitions = [...prev];
                      updatedPartitions[activePartitionIndex] = [
                        ...updatedPartitions[activePartitionIndex],
                        newElement,
                      ];
                      return updatedPartitions;
                    });
                    showNotification("Form Element added!");
                  }}
                />
              )}
            </div>
          )}

          {isRendered && (
            <div className="overflow-y-scroll w-full">
              <FormRenderer jsonConfig={jsonConfig} />
            </div>
          )}
        </DndContext>
      </div>
    </div>

  );
}

export default App;
