import React from 'react';

export default function Landing() {
  return (
    <div className="flex items-center justify-between min-h-screen bg-purple-500">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold text-white">Subscribe</h1>
        <p className="text-white mt-4">
          Get the latest updates and news. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <div className="w-1/2 h-full bg-gradient-to-b from-purple-500 to-white clip-bottom-swirl"></div>
    </div>
  );
}