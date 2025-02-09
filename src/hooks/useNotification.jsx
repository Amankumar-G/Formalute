import { useState } from "react";

const useNotification = () => {
  const [notification, setNotification] = useState(null);
  const [color, setColor] = useState("gray");

  const showNotification = (message, color = "gray") => {
    setNotification(message);
    setColor(color);

    setTimeout(() => {
      setNotification(null);
      setColor("gray");
    }, 1000); 
  };

  return { notification, color, showNotification };
};

export default useNotification;
