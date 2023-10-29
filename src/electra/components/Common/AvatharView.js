import React from 'react';


const imageStyle = {
  width: '100%', // Ensure the image takes the full width of the container
  height: '100%', // Maintain the aspect ratio
  objectFit: 'cover', // This property ensures the image scales and covers the container
};

function Avathar({ imageUrl, imageSize }) {

const imageContainerStyle = {
    width: imageSize, // Define the width of the rectangle container
    height: imageSize, // Define the height of the rectangle container
        
        // Additional styling for the container
        border: '1px solid #000',
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '50%',
    };

      
  return (
    <div style={imageContainerStyle}>
      <img src={imageUrl} alt="" style={imageStyle} />
    </div>
  );
}

export default Avathar;
