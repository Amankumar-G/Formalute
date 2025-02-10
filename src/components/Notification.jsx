import React from "react";

const Notification = ({ notification, color = "gray" ,down }) => {
  const bgColorClass = {
    gray: "bg-gray-800",
    red: "bg-red-700",
    green: "bg-green-700",
    blue: "bg-blue-700",
    yellow: "bg-yellow-600",
  }[color] || "bg-gray-800"; // Default to gray if invalid color is passed

  return (
    <div
      className={`absolute inset-x-0 top-4 mx-auto w-max px-4 py-2 text-white rounded-lg shadow-lg flex items-center gap-3 animate-pop z-50 ${bgColorClass} ${down ? "mt-12" : "mt-0"}`}
    >
      <span className="text-sm font-medium">{notification}</span>
    </div>
  );
};

export default Notification;
