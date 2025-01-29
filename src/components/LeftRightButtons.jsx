import React from "react";
import { FaTrashAlt } from 'react-icons/fa'; // Optional: Importing a trash icon for better look


import { IoIosArrowBack, IoIosArrowForward, IoIosAdd } from "react-icons/io"; // Import the icons

export const LeftButtons = ({ handleNavigatePartition }) => {
  return (
    <button
      className="group absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer left-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-black"
      onClick={() => handleNavigatePartition("backward")}
    >
      <IoIosArrowBack
        className="text-black group-hover:text-white text-xl transition-all duration-300"
        size={24}
      />
    </button>
  );
};

export const RightButtons = ({ handleNavigatePartition }) => {
  return (
    <button
      className="group absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-black"
      onClick={() => handleNavigatePartition("forward")}
    >
      <IoIosArrowForward
        className="text-black group-hover:text-white text-xl transition-all duration-300"
        size={24}
      />
    </button>
  );
};

export const AddButton = ({ handleAddPartition }) => {
  return (
    <button
      className="group absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-black"
      onClick={handleAddPartition}
    >
      <IoIosAdd
        className="text-black group-hover:text-white text-xl transition-all duration-300"
        size={24}
      />
    </button>
  );
};


export const Stepper = ({ formPartitions, activePartitionIndex, setActivePartitionIndex, handleDeletePartition }) => {
  return (
    <ol className="flex my-4 items-center mx-auto w-[70%] text-xs text-gray-900 font-medium sm:text-base overflow-x-auto">
      {formPartitions.map((_, index) => (
        <li
          key={index}
          className="flex w-full relative group cursor-pointer"
        >
          {/* Partition Indicator */}
          <div
            onClick={() => setActivePartitionIndex(index)}
            className={`flex flex-col items-center mx-auto relative w-full
              ${index === activePartitionIndex - 1
                ? "text-indigo-600 after:bg-indigo-600"
                : index <= activePartitionIndex
                  ? "text-indigo-600 after:bg-indigo-600"
                  : "text-gray-900 after:bg-gray-200"}
              after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4
              after:z-0`} // Added z-0 to ensure the line is underneath
          >
            <span
              className={`w-6 h-6 ${index === activePartitionIndex
                ? "bg-indigo-600 text-white"
                : index < activePartitionIndex
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-50 text-indigo-600 border-indigo-600"
                } border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10 z-10`} // Added z-10 to bring the number above the line
            >
              {index + 1}
            </span>
          </div>

          {/* Delete Button */}
          {/* Delete Button */}
          {handleDeletePartition && (
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents event bubbling
                handleDeletePartition(index);
              }}
              className="absolute top-0 right-0 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out shadow-md hover:scale-105"
              aria-label={`Delete Partition ${index + 1}`}
              disabled={formPartitions.length === 1} // Disable if it's the only partition
            >
              <FaTrashAlt className="w-4 h-4" /> {/* Trash icon */}
            </button>
          )}

        </li>
      ))}
    </ol>
  );
};
