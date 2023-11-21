
import React from 'react';

const ConfirmationPopup = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <p>Etes-vous sûr de vouloir poursuivre?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmationPopup;
