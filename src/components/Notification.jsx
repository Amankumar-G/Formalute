import React from "react";

const Notification = ({ notification, color = "gray" }) => {
  const bgColorClass = {
    gray: "bg-gray-800",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
  }[color] || "bg-gray-800"; // Default to gray if invalid color is passed

  return (
    <div
      className={`absolute inset-x-0 top-4 mx-auto w-max px-4 py-2 text-white rounded-lg shadow-lg flex items-center gap-3 animate-pop ${bgColorClass}`}
    >
      <span className="text-sm font-medium">{notification}</span>
    </div>
  );
};

export default Notification;
