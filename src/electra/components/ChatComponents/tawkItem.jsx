import React, { useState, useEffect } from 'react';

const TawkItem = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // useEffect(() => {
  //   var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  //   var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  //   s1.async = true;
  //   s1.src = 'https://embed.tawk.to/653ff927a84dd54dc486d3b7/1he0uahf0';
  //   s1.charset = 'UTF-8';
  //   s1.setAttribute('crossorigin', '*');
  //   s0.parentNode.insertBefore(s1, s0);

  //   // Cleanup on component unmount
  //   return () => {
  //     s0.parentNode.removeChild(s1);
  //   };
  // }, []);

  const tawkStyle = {
    position: 'absolute',
    top: `${position.y}px`,
    left: `${position.x}px`,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <div
      className="tawk-item"
      style={tawkStyle}
      onMouseDown={handleMouseDown}
    >
      {/* Your Tawk content goes here */}
    </div>
  );
};

export default TawkItem;
