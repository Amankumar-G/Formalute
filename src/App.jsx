// src/App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import FormEditor from "./components/Editor/FormEditor";
import usePartitions from "./hooks/usePartitions";
import useDragHandlers from "./hooks/useDragHandlers";
import useNotification from "./hooks/useNotification";
import FormRenderer from "./components/FormRenderer/FormRenderer"
import "./index.css";



function App({ onSave }) {
  // Top-level states
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isProperty, setIsProperty] = useState(false);
  const [isMultiPart, setIsMultiPart] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [activeElement, setActiveElement] = useState(null);
  const [isDeleteWarningVisible, setIsDeleteWarningVisible] = useState(false);
  const [pendingDeletionElement, setPendingDeletionElement] = useState(null);
  const [isInvalidDropZone, setIsInvalidDropZone] = useState(false);
  const [jsonConfig, setJsonConfig] = useState(null);

  
  // Custom hooks
  const {
    formPartitions,
    activePartitionIndex,
    currentPartitionElements,
    getTaskPos,
    addTask,
    addElementToCurrentPartition,
    deleteElementFromCurrentPartition,
    moveElementWithinCurrentPartition,
    addPartition,
    deletePartition,
    navigatePartition,
    setFormPartitions,
    setActivePartitionIndex,
  } = usePartitions();

  const { notification, color, showNotification } = useNotification();
  
  const { handleDragStart, handleDragOver, handleDragEnd } = useDragHandlers({
    getTaskPos,
    addTask,
    addElementToCurrentPartition,
    moveElementWithinCurrentPartition,
    showNotification,
    setActiveId,
    setIsInvalidDropZone,
    setIsDeleteWarningVisible,
    setPendingDeletionElement
  });

  // Handle save functionality: prepare and download JSON config
  const handleSave = () => {
    if(formPartitions.length === 0 || formPartitions.every(row => row.length === 0)){
      showNotification("No form element for PUBLISH","gray")
      return;
    }
    const data = formPartitions.map((partition, index) => ({
      partitionIndex: index + 1,
      elements: partition,
    }));
    const jsonData = JSON.stringify(data, null, 2);
    // const blob = new Blob([jsonData], { type: "application/json" });
    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // link.download = "ConfigFormWithPartitions.json";
    // link.click();
    if (onSave) onSave(jsonData);
  };

  // Toggle between editor and preview
  const handleRenderer = () => {
   
    if(formPartitions.length === 0 || formPartitions.every(row => row.length === 0)){
      showNotification("No element for PREVIEW","blue")
      return;
    }
    setIsRendered((prev) => !prev);
  };

  // Confirm deletion (from modal)
  const handleConfirmDelete = () => {
    deleteElementFromCurrentPartition(pendingDeletionElement);
    setIsDeleteWarningVisible(false);
    setPendingDeletionElement(null);
  };

  // Update the JSON configuration whenever partitions change
  useEffect(() => {
    const data = formPartitions.map((partition, index) => ({
      partitionIndex: index + 1,
      elements: partition,
    }));
    setJsonConfig(JSON.stringify(data, null, 2));
  }, [formPartitions]);

  return (
    <div className="flex h-screen overflow-x-hidden flex-col">
      {isDeleteWarningVisible && (
        <Modal
          handleConfirmDelete={handleConfirmDelete}
          setIsDeleteWarningVisible={setIsDeleteWarningVisible}
        />
      )}

      <Navbar
        handleExpandToggle={() => {
          setIsProperty(false);
          setIsRendered(false);
          setIsExpanded((prev) => !prev);
        }}
        handleSave={handleSave}
        handleRenderer={handleRenderer}
        handleIsMultiPart={() => {
          setIsRendered(false);
          setIsMultiPart((prev) => !prev);
        }}
        
        notification={notification}
      />

      <div className="flex flex-1 overflow-hidden">
        {!isRendered ? (
          <FormEditor
          activeElement={activeElement}
            setActiveElement={setActiveElement}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            isProperty={isProperty}
            setIsProperty={setIsProperty}
            isRendered={isRendered}
            setIsRendered={setIsRendered}
            activeId={activeId}
            setActiveId={setActiveId}
            currentPartitionElements={currentPartitionElements}
            activePartitionIndex={activePartitionIndex}
            formPartitions={formPartitions}
            navigatePartition={navigatePartition}
            addPartition={addPartition}
            deletePartition={deletePartition}
            setFormPartitions={setFormPartitions}
            getTaskPos={getTaskPos}
            addTask={addTask}
            addElementToCurrentPartition={addElementToCurrentPartition}
            deleteElementFromCurrentPartition={deleteElementFromCurrentPartition}
            moveElementWithinCurrentPartition={moveElementWithinCurrentPartition}
            showNotification={showNotification}
            isMultiPart={isMultiPart}
            setIsMultiPart={setIsMultiPart}
            notification={notification}
            color={color}
            isInvalidDropZone={isInvalidDropZone}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDragEnd={handleDragEnd}
            setActivePartitionIndex={setActivePartitionIndex}
          />
        ) : (
        <div className="overflow-y-scroll w-full">
            <FormRenderer jsonConfig={jsonConfig} />
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
