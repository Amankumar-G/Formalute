import React from 'react'

const Notification = ({notification}) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50">
          {notification}
     </div>
  )
}

export default Notification