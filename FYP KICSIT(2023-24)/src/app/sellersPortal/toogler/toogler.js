'use client'
import React, { useState } from 'react';

function ToggleComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-3/5">
      <button
        className="flex items-center justify-between w-full p-2 bg-gray-200 text-gray-800 rounded-md focus:outline-none"
        onClick={toggleParagraph}
      >
        <span>Toggle</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path d="M1.868 10.132a.5.5 0 0 1 .664-.09L8 13.71l5.468-3.668a.5.5 0 0 1 .664.748l-6 4a.5.5 0 0 1-.664 0l-6-4a.5.5 0 0 1-.09-.664z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path d="M1.868 5.868a.5.5 0 0 1 .664-.09L8 9.71l5.468-3.668a.5.5 0 0 1 .664.748l-6 4a.5.5 0 0 1-.664 0l-6-4a.5.5 0 0 1-.09-.664z"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 p-2 text-black bg-gray-300 rounded-md">
          Hidden Paragraph Content
        </p>
      )}
    </div>
  );
}

export default ToggleComponent;
