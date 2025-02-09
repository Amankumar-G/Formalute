import React,{ useState, useMemo, useCallback } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";
import config from "../MainConfigFile"; 

const usePartitions = (initialPartitions = [[]]) => {
  const [formPartitions, setFormPartitions] = useState(initialPartitions);
  const [activePartitionIndex, setActivePartitionIndex] = useState(0);

  // Get elements of the currently active partition
  const currentPartitionElements = useMemo(
    () => formPartitions[activePartitionIndex] || [],
    [formPartitions, activePartitionIndex]
  );

  // Create a mapping of element IDs to their positions
  const positionMap = useMemo(
    () =>
      currentPartitionElements.reduce((acc, element, index) => {
        acc[element.id] = index;
        return acc;
      }, {}),
    [currentPartitionElements]
  );

  const getTaskPos = useCallback(
    (id) => positionMap[id] ?? -1,
    [positionMap]
  );

  // Create a new element based on a given type
  const addTask = useCallback((type) => {
    const template = config.find((input) => input.type === type);
    return template ? { ...template, id: uuidv4() } : null;
  }, []);

  const addElementToCurrentPartition = useCallback((element) => {
    setFormPartitions((prev) => {
      const updatedPartitions = [...prev];
      updatedPartitions[activePartitionIndex] = [
        ...updatedPartitions[activePartitionIndex],
        element,
      ];
      return updatedPartitions;
    });
  }, [activePartitionIndex]);

  const deleteElementFromCurrentPartition = useCallback((id) => {
    setFormPartitions((prev) => {
      const updatedPartitions = [...prev];
      updatedPartitions[activePartitionIndex] =
        updatedPartitions[activePartitionIndex].filter((el) => el.id !== id);
      return updatedPartitions;
    });
  }, [activePartitionIndex]);

  const moveElementWithinCurrentPartition = useCallback((oldIndex, newIndex) => {
    setFormPartitions((prev) => {
      const updatedPartitions = [...prev];
      updatedPartitions[activePartitionIndex] = arrayMove(
        updatedPartitions[activePartitionIndex],
        oldIndex,
        newIndex
      );
      return updatedPartitions;
    });
  }, [activePartitionIndex]);

  // Partition navigation and management
  const addPartition = useCallback(() => {
    setFormPartitions((prev) => {
      const newPartitions = [...prev, []];
      setActivePartitionIndex(newPartitions.length - 1);
      return newPartitions;
    });
  }, []);

  const deletePartition = useCallback((index) => {
    setFormPartitions((prev) => {
      if (prev.length === 1) return prev; // Prevent deletion of the last partition
      const updated = prev.filter((_, i) => i !== index);
      
      setActivePartitionIndex((prevIndex) =>
        index <= prevIndex && prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
      return updated;
    });
  }, []);

  const navigatePartition = useCallback((direction) => {
    setActivePartitionIndex((prevIndex) => {
      const newIndex =
        direction === "forward" ? prevIndex + 1 : prevIndex - 1;
      return Math.max(0, Math.min(newIndex, formPartitions.length - 1));
    });
  }, [formPartitions]);

  return {
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
  };
};

export default usePartitions;
