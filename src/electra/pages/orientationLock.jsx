// OrientationLock.js

import React, { useEffect, useState } from 'react';

const OrientationLock = ({handleDisable, isMobile}) => {
    const [isLandScape, setIsLandScape] = useState(false);

    useEffect(() => {

        if(isMobile && isLandScape){
            handleDisable(true);
            window.screen.orientation.lock("portrait").catch(error => console.error(error));
        }
        else{
            handleDisable(false);
        }
      }, [isMobile, isLandScape]);
  


  useEffect(() => {
    const handleOrientationChange = () => {
        // handleDisable(false);
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setIsLandScape(isPortrait);
    };
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    setIsLandScape(!isPortrait);
    // Attach the orientation change event listener
    window.addEventListener('orientationchange', handleOrientationChange);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return null;
};

export default OrientationLock;
