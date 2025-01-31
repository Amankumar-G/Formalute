import React from "react";
import '../index.css'
const Notification = ({ notification }) => {
  return (
    <div className="top-4 bg-gray-800 text-white w-fit px-3 sm:px-7 mx-auto mt-2 py-2 rounded-lg shadow-lg z-50 flex flex-row items-center gap-3 animate-pop">
      {/* Optional Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
        />
      </svg>

      {/* Notification Message */}
      <span className="sm:text-sm text-xs font-medium">{notification}</span>
    </div>
  );
};

export default Notification;
