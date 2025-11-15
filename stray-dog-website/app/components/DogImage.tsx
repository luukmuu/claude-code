'use client';

import React from 'react';

const DogImage = () => {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md mx-auto"
    >
      {/* Background Circle */}
      <circle cx="200" cy="200" r="190" fill="#dbeafe" />

      {/* Dog Body */}
      <ellipse cx="200" cy="250" rx="100" ry="80" fill="#60a5fa" />

      {/* Dog Head */}
      <circle cx="200" cy="160" r="70" fill="#60a5fa" />

      {/* Left Ear */}
      <ellipse cx="155" cy="130" rx="25" ry="45" fill="#3b82f6" transform="rotate(-25 155 130)" />

      {/* Right Ear */}
      <ellipse cx="245" cy="130" rx="25" ry="45" fill="#3b82f6" transform="rotate(25 245 130)" />

      {/* Eyes */}
      <circle cx="180" cy="155" r="8" fill="#1e3a8a" />
      <circle cx="220" cy="155" r="8" fill="#1e3a8a" />
      <circle cx="182" cy="153" r="3" fill="white" />
      <circle cx="222" cy="153" r="3" fill="white" />

      {/* Nose */}
      <ellipse cx="200" cy="175" rx="12" ry="10" fill="#1e3a8a" />

      {/* Mouth */}
      <path
        d="M 200 175 Q 190 185 185 190"
        stroke="#1e3a8a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 200 175 Q 210 185 215 190"
        stroke="#1e3a8a"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Front Legs */}
      <rect x="170" y="300" width="20" height="60" rx="10" fill="#3b82f6" />
      <rect x="210" y="300" width="20" height="60" rx="10" fill="#3b82f6" />

      {/* Paws */}
      <ellipse cx="180" cy="360" rx="15" ry="10" fill="#2563eb" />
      <ellipse cx="220" cy="360" rx="15" ry="10" fill="#2563eb" />

      {/* Tail */}
      <path
        d="M 280 240 Q 320 220 330 250"
        stroke="#3b82f6"
        strokeWidth="25"
        fill="none"
        strokeLinecap="round"
      />

      {/* Collar */}
      <rect x="175" y="220" width="50" height="8" rx="4" fill="#ef4444" />
      <circle cx="200" cy="224" r="6" fill="#fbbf24" stroke="#1e3a8a" strokeWidth="1" />
    </svg>
  );
};

export default DogImage;
