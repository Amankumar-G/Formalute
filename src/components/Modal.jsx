import React from 'react'

const Modal = ({handleConfirmDelete,setIsDeleteWarningVisible}) => {
  return (
        <>
          <div className="modal-overlay"></div>
          <div className="modal">
            <p>Are you sure you want to delete this element?</p>
            <button onClick={handleConfirmDelete}>Confirm</button>
            <button onClick={() => setIsDeleteWarningVisible(false)}>Cancel</button>
          </div>
        </>
  )
}

export default Modal
