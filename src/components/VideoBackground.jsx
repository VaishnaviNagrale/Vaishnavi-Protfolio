// VideoBackground.js

import React from 'react';

const VideoBackground = ({ videoUrl }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
    </div>
  );
};

export default VideoBackground;