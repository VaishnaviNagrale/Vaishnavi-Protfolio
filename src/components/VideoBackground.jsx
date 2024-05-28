// VideoBackground.js

import React from 'react';

const VideoBackground = ({ videoUrl }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
    </div>
  );
};

export default VideoBackground;