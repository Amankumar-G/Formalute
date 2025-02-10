
import React from "react";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensors,
  useSensor,
  rectIntersection,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import FormBuilder from "../Builder/FormBuilder";
import FormElements from "../Sidebar/FormElements";
import PropertyBar from "../Property/PropertyBar";
import { LeftButtons, RightButtons, AddButton, Stepper } from "../LeftRightButtons";
import Notification from "../Notification";

const FormEditor = ({
  isExpanded,
  setIsExpanded,
  isProperty,
  setIsProperty,
  isRendered,
  setIsRendered,
  activeId,
  setActiveId,
  activeElement,
  currentPartitionElements,
  activePartitionIndex,
  formPartitions,
  navigatePartition,
  addPartition,
  deletePartition,
  setFormPartitions,
  getTaskPos,
  addTask,
  color,
  addElementToCurrentPartition,
  deleteElementFromCurrentPartition,
  moveElementWithinCurrentPartition,
  showNotification,
  isMultiPart,
  setIsMultiPart,
  notification,
  isInvalidDropZone,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  setActivePartitionIndex,
  setActiveElement
}) => {
  // Initialize sensors for the drag-and-drop context
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={rectIntersection}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div
        className={`transition-all relative duration-500 ${
          isExpanded ? "w-1/2" : "w-full"
        } overflow-hidden`}
        >
        {notification && <Notification notification={notification} color={color} down={formPartitions.length >1}/>}
        {activePartitionIndex > 0 && (
          <LeftButtons handleNavigatePartition={() => navigatePartition("backward")} />
        )}

        {activePartitionIndex < formPartitions.length - 1 && (
          <RightButtons handleNavigatePartition={() => navigatePartition("forward")} />
        )}

        {formPartitions.length > 1 && (
          <Stepper
            handleDeletePartition={deletePartition}
            formPartitions={formPartitions}
            activePartitionIndex={activePartitionIndex}
            setActivePartitionIndex={setActivePartitionIndex}
            isRendered={isRendered}
          />
        )}

        {isMultiPart && activePartitionIndex === formPartitions.length - 1 && (
          <AddButton handleAddPartition={addPartition} />
        )}


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
          handleDelete={(e)=>{
            deleteElementFromCurrentPartition(e);
            showNotification("Form Element Deleted!" ,"red");
          }}
          addTask={addTask}
          getTaskPos={getTaskPos}
          handleIsProperty={(element) => {
            setActiveElement(element);
            setIsProperty(true);
            setIsExpanded(true);
          }}
          isInvalidDropZone={isInvalidDropZone}
          stepper={formPartitions.length > 1}
        />
      </div>

      <div
        className={`transform transition-all duration-500 ${
          isExpanded ? "translate-x-0 w-1/2 opacity-100" : "translate-x-full w-0 opacity-0"
        } overflow-y-auto`}
      >
        {isProperty ? (
          <PropertyBar
            activeElement={activeElement} 
            setFormPartitions={setFormPartitions}
            setIsProperty={setIsProperty}
            showNotification={showNotification}
            activePartitionIndex={activePartitionIndex}
          />
        ) : (
          <FormElements
            onAddTask={(field) => {
              const newElement = addTask(field.type);
              addElementToCurrentPartition(newElement);
              showNotification("Form Element added!","green");
            }}
          />
        )}
      </div>
    </DndContext>
  );
};

export default FormEditor;
