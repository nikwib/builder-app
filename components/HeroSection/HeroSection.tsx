import React from "react";

const HeroSection = () => {


  return (
    <div className=" relative text-customYellow py-16 lg:py-32 px-4 sm:px-6 w-full flex justify-center items-center h-screen">
      <div className=" bg-full-page bg-cover bg-center absolute top-0 left-0 w-full blur-customBlur bg-green z-[1] h-screen"></div>
      <div className="absolute top-0 left-0 w-full bg-black/50 blur-lg z-[2] h-screen"></div>
      <div className=" z-[3] text-center flex flex-col justify-center items-center gap-2 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Daily reflections meets christian wisdom
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight"></h2>
        <h2 className="tracking-tight pt-6">
          Write your thoughts daily, receive personalized AI feedback
        </h2>
        <div className="mt-10">
            <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
