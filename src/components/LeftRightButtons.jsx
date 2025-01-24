import React from "react";


export const LeftButtons = ({ handleNavigatePartition }) => {
  return (
    <button
      className="group absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer left-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-black"
      onClick={() => handleNavigatePartition("backward")}
    >
      <span className="absolute w-3 h-3 border-t-2 border-l-2 border-black rotate-[-45deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:border-white"></span>
    </button>
  );
};

export const RightButtons = ({ handleNavigatePartition }) => {
  return (
    <button
      className="group absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-black"
      onClick={() => handleNavigatePartition("forward")}
    >
      <span className="absolute w-3 h-3 border-t-2 border-l-2 border-black rotate-[135deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:border-white"></span>
    </button>
  );
}

export const AddButton = ({ handleAddPartition }) => {
  return (
    <button
      className="group absolute w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-black"
      onClick={handleAddPartition}
    >
      <span className="absolute text-xl font-bold text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:text-white">
        +
      </span>
    </button>
  );
}

export const Stepper = ({ formPartitions, activePartitionIndex, setActivePartitionIndex }) => {
  return (
    <ol className="flex my-4 items-center mx-auto w-[70%] text-xs text-gray-900 font-medium sm:text-base overflow-x-auto">
      {formPartitions.map((_, index) => (
      <li
      key={index}
      onClick={() => setActivePartitionIndex(index)}
      className={`flex w-full relative ${
        index === activePartitionIndex - 1
          ? "text-indigo-600 after:bg-indigo-600"
          : index <= activePartitionIndex
          ? "text-indigo-600 after:bg-indigo-600"
          : "text-gray-900 after:bg-gray-200"
      }
          "after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-4"
          "after:content-none"
      `}
    >
          <div className="block mx-auto whitespace-nowrap z-10">
            <span
              className={`w-6 h-6 ${index === activePartitionIndex
                  ? "bg-indigo-600 text-white"
                  : index < activePartitionIndex
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-50 text-indigo-600 border-indigo-600"
                } border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10`}
            >
              {index + 1}
            </span>
          </div>
        </li>
      ))}
    </ol>

  );
}