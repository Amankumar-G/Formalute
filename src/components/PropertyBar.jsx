import React from 'react'

const PropertyBar = (props) => {
  return (
    <div className={`min-h-screen bg-customGray flex flex-col transition-all duration-500 ${
        !props.isExpanded ? "w-0 opacity-0" : "w-1/2 opacity-100"
      }`}>
     HII
    </div>
  )
}

export default PropertyBar