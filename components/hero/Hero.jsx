// components/Hero.js
"use client";
import React, { useState } from "react"; // Add useState to the import
import BottomSection from "./BottomSection";
import Navbar from "../navbar";
import Footer from "../footer/footer";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/2313.jpg",
    "/assets/22335.jpg",
    "/assets/24342.jpg",
    "/assets/2313.png",
    "/assets/b3.png",
    "/assets/b4.png",
    "/assets/b5.png",
  ];
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-[100vh] text-white">
      {" "}
      {/* Background Image */}{" "}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      
      {/* Overlay Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/assets/Group 3121.png"
          alt="Overlay Image"
          className="h-full w-full"
        />
      </div>
      {/* Header Component */}
      <div className="relative">
        <Navbar />
      </div>
      {/* Slide Indicators */}
      <div className="w-full">
        <div className="absolute z-10 bottom-48 md:bottom-16 desktop:bottom-20 max-md:left-1/2 transform -translate-x-1/2 md:translate-x-0 md:right-8 desktop:right-20 flex space-x-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-[2px] w-4 md:w-8 desktop:w-[4rem] cursor-pointer ${
                currentImageIndex === index ? "bg-gold" : "bg-white"
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="z-10 w-full">
        <BottomSection />
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
