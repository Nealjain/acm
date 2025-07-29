import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-white">
      <div className="absolute inset-0">
        {/* 3D Scene will go here */}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl font-bold">Innovation Begins Here</h1>
        {/* Scroll hint will go here */}
      </div>
    </section>
  );
};

export default HeroSection;
