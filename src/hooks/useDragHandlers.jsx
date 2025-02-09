import React,{ useCallback } from "react";

const useDragHandlers = ({
  getTaskPos,
  addTask,
  addElementToCurrentPartition,
  moveElementWithinCurrentPartition,
  showNotification,
  setActiveId,
  setIsInvalidDropZone,
  setIsDeleteWarningVisible,
  setPendingDeletionElement
}) => {

  const handleDragStart = useCallback(
    (event) => {
      if (!event.active.data) {
        event.active.data = {};
      }
      const originalPos = getTaskPos(event.active.id);
      if (originalPos === -1) {
        // The dragged element is not yet in the partition – create and add it.
        const newElement = addTask(event.active.id);
        if (newElement) {
          setActiveId(newElement.id);
          event.active.data.current = { newId: newElement.id, hasAdded: true };
          showNotification("Form Element added!");
          addElementToCurrentPartition(newElement);
        }
      } else {
        event.active.data.current = { hasAdded: false };
      }
      setActiveId(event.active.data.current?.newId || event.active.id);
    },
    [getTaskPos, addTask, addElementToCurrentPartition, setActiveId, showNotification]
  );

  const handleDragOver = useCallback(
    (event) => {
      const { active, over } = event;
      if (!over) {
        setIsInvalidDropZone(true);
        return;
      }

      setIsInvalidDropZone(false);
      if (active.id === over.id) return;

      const originalPos = getTaskPos(active.data.current?.newId || active.id);
      const newPos = getTaskPos(over.id);
      if (originalPos === -1 || newPos === -1 || originalPos === newPos) return;

      moveElementWithinCurrentPartition(originalPos, newPos);
    },
    [getTaskPos, moveElementWithinCurrentPartition]
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

  return { handleDragStart, handleDragOver, handleDragEnd };
};

export default useDragHandlers;
