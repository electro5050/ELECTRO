import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const imageStyle = {
  width: '100%',
  height: '90%',
  objectFit: 'contain',
  marginTop: "10%"
};

function Avathar({ imageUrl, imageSize, editIconClick }) {
  const imageContainerStyle = {
    width: imageSize,
    height: imageSize,
    border: '1px solid #000',
    backgroundColor: 'rgb(255 247 153)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
    position: 'relative',
  };

  const editIconStyle = {
    position: 'absolute',
    paddingBottom: '12%',
    paddingTop: '12%',
    bottom:0,
    cursor: 'pointer',
    background: "rgba(36, 36, 36, 0.7)",
    width: "100%",
    fontSize: "min(30px, 0.8vw)"
  };

  return (
    <div style={imageContainerStyle}>
      <img src={imageUrl} alt="" style={imageStyle} />
      {editIconClick && <FontAwesomeIcon icon={faEdit} style={editIconStyle} onClick={editIconClick} />}
    </div>
  );
}

export default Avathar;
