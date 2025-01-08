import React from 'react'
import { useState } from 'react';

const TestItem = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className="flex w-full h-64 bg-gray-200">
        {/* First Child */}
        <div className="w-1/2 bg-blue-500 flex items-center justify-center text-white">
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600"
          >
            Toggle
          </button>
        </div>
  
        {/* Second Child */}
        <div
          className={`bg-red-500 transition-all duration-500 ${
            isExpanded ? "w-1/2 opacity-100" : "w-0 opacity-0"
          }`}
        >
          {isExpanded && (
            <div className="p-4 text-white">
              <p>This is the second child!</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default TestItem