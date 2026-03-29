// src/components/Star.jsx
import React from "react";

const Star = ({ size, top, left, delay }) => {
  return (
    <div
      className={`absolute bg-white rounded-full animate-twinkle`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export default Star;
