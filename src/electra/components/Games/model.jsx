import React, { useState } from 'react';
import './model.css';

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyles = {
    display: isOpen ? 'block' : 'none',
  };

  const overlayStyles = {
    display: isOpen ? 'flex' : 'none',
  };

  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the overlay
  };

  return (
    <div className="game-win modal-overlay" style={overlayStyles} onClick={closeModal}>
      <div className="custom-modal" style={modalStyles} onClick={stopPropagation}>
        <div className="modal-content">
          {/* <span className="close-button" onClick={closeModal}>&times;</span> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
