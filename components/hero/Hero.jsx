"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../footer/footer";
import MiceScroll from "../atoms/mice-scroll";
import HeroContent from "./hero-content";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  // Background images
  const images = [
    "/assets/2313.jpg",
    "/assets/22335.jpg",
    "/assets/24342.jpg",
    "/assets/63421.jpg",
    "/assets/131123.jpg",
    "/assets/424221.jpg",
    "/assets/454353.jpg",
    "/assets/534521.jpg",
  ];

  // Preload images once when the component mounts
  useEffect(() => {
    const preload = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    setPreloadedImages(preload);
  }, []);

  // Agent details corresponding to each background image
  const agents = [
    {
      id: 1,
      agent_logo: "https://zimopro.com/assets/temp/agents_logos/Barnes_IR.svg",
      name: "Agent One",
      amount: "1,000,000 GBP",
      address_line_1: "123 Street",
      city: "New York",
      postal_code: "10001",
      country_name: "USA",
    },
    {
      id: 2,
      agent_logo: "https://zimopro.com/assets/temp/agents_logos/E&V.svg",
      name: "Agent Two",
      amount: "2,500,000 GBP",
      address_line_1: "456 Avenue",
      city: "Los Angeles",
      postal_code: "90001",
      country_name: "USA",
    },
    {
      id: 3,
      agent_logo: "https://zimopro.com/assets/temp/agents_logos/F&C.svg",
      name: "Agent Three",
      amount: "3,750,000 GBP",
      address_line_1: "789 Blvd",
      city: "Chicago",
      postal_code: "60601",
      country_name: "USA",
    },
    {
      id: 4,
      agent_logo: "https://zimopro.com/assets/temp/agents_logos/CB.svg",
      name: "Agent Four",
      amount: "4,200,000 GBP",
      address_line_1: "101 Main St",
      city: "Houston",
      postal_code: "77001",
      country_name: "USA",
    },
    {
      id: 5,
      agent_logo:
        "https://zimopro.com/assets/temp/agents_logos/Christies_IRE.svg",
      name: "Agent Five",
      amount: "5,600,000 GBP",
      address_line_1: "12 Elm St",
      city: "Miami",
      postal_code: "33101",
      country_name: "USA",
    },
    {
      id: 6,
      agent_logo:
        "https://zimopro.com/assets/temp/agents_logos/John_Taylor.svg",
      name: "Agent Six",
      amount: "6,800,000 GBP",
      address_line_1: "45 Pine St",
      city: "San Francisco",
      postal_code: "94101",
      country_name: "USA",
    },
    {
      id: 7,
      agent_logo: "https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg",
      name: "Agent Seven",
      amount: "7,200,000 GBP",
      address_line_1: "78 Maple St",
      city: "Seattle",
      postal_code: "98101",
      country_name: "USA",
    },
    {
      id: 8,
      agent_logo: "https://zimopro.com/assets/temp/agents_logos/Savills.svg",
      name: "Agent Eight",
      amount: "7,800,000 GBP",
      address_line_1: "90 Oak St",
      city: "Boston",
      postal_code: "02101",
      country_name: "USA",
    },
  ];

  const agent = agents[currentImageIndex % agents.length];

  // Handle auto-slide transition
  useEffect(() => {
    let interval;
    let progressInterval;

    setProgress(0);

    progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 5.56)); // Complete in 18s
    }, 1000);

    interval = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0);
    }, 18000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(interval);
    };
  }, [currentImageIndex]);

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
    setProgress(0);
  };

  return (
    <div className="relative h-full w-full text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-10 ease-in"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header Component */}
      <div className="relative">
        <Navbar />
      </div>

      {/* Slide Indicators */}
      <div className="w-full">
        <div className="absolute z-10 top-24 2xl:top-56 right-[16px] 2xl:right-[32px] flex flex-col space-y-4 2xl:space-y-6">
          {images.map((_, index) => (
            <div
              key={index}
              className="relative cursor-pointer w-[2px] h-[30px] 2xl:w-[4px] 2xl:h-[60px] bg-[#808080] overflow-hidden"
              onClick={() => handleIndicatorClick(index)}
            >
              {currentImageIndex === index && (
                <div
                  className="absolute top-0 left-0 w-full bg-white"
                  style={{ height: `${progress}%` }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mice Scroll Indicator */}
      <div className="absolute bottom-[110px] lg:bottom-[11dvh] 3xl:bottom-[12.3dvh] right-0 px-[16px] 2xl:px-[32px] py-[8px] z-10">
        <MiceScroll />
      </div>

      {/* Hero Content */}
      <div className="absolute bottom-0 space-y-[1.5dvh] 3xl:space-y-[2dvh] mt-auto">
        <div className="relative w-full lg:w-fit px-[16px] 2xl:px-[32px]">
          <AnimatePresence mode="wait">
            <HeroContent key={agent.id} agent={agent} />
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="relative w-full lg:w-fit">
          <Footer />
        </div>
      </div>
    </div>
  );
}

