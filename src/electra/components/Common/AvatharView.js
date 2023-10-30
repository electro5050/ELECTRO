import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

function Avathar({ imageUrl, imageSize, isEditable }) {
  const imageContainerStyle = {
    width: imageSize,
    height: imageSize,
    border: '1px solid #000',
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
    position: 'relative',
  };

  const editIconStyle = {
    position: 'absolute',
    paddingBottom: '5px',
    paddingTop: '5px',
    bottom:0,
    cursor: 'pointer',
    background: "rgba(36, 36, 36, 0.7)",
    width: "100%"
  };

  return (
    <div style={imageContainerStyle}>
      <img src={imageUrl} alt="" style={imageStyle} />
      {isEditable && <FontAwesomeIcon icon={faEdit} style={editIconStyle} />}
    </div>
  );
}

export default Avathar;
