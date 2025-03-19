"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../navbar";
import Footer from "../footer/footer";
import MiceScroll from "../atoms/mice-scroll";
import HeroContent from "./hero-content";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images
  const images = [
    "/assets/2313.jpg",
    "/assets/22335.jpg",
    "/assets/24342.jpg",
    "/assets/2313.png",
    "/assets/b3.png",
    "/assets/b4.png",
    "/assets/b5.png",
  ];

  // Agent details corresponding to each background image
  const agents = [
    {
      id: 1,
      agent_logo: "/assets/logo1.png",
      name: "Agent One",
      amount: "1,000,000",
      address_line_1: "123 Street",
      address_line_2: "Suite 456",
      city: "New York",
      postal_code: "10001",
      country_name: "USA",
    },
    {
      id: 2,
      agent_logo: "/assets/logo2.png",
      name: "Agent Two",
      amount: "2,500,000",
      address_line_1: "456 Avenue",
      city: "Los Angeles",
      postal_code: "90001",
      country_name: "USA",
    },
    {
      id: 3,
      agent_logo: "/assets/logo3.png",
      name: "Agent Three",
      amount: "3,750,000",
      address_line_1: "789 Blvd",
      city: "Chicago",
      postal_code: "60601",
      country_name: "USA",
    },
    {
      id: 4,
      agent_logo: "/assets/logo4.png",
      name: "Agent Four",
      amount: "4,200,000",
      address_line_1: "101 Main St",
      city: "Houston",
      postal_code: "77001",
      country_name: "USA",
    },
    {
      id: 5,
      agent_logo: "/assets/logo5.png",
      name: "Agent Five",
      amount: "5,600,000",
      address_line_1: "12 Elm St",
      city: "Miami",
      postal_code: "33101",
      country_name: "USA",
    },
    {
      id: 6,
      agent_logo: "/assets/logo6.png",
      name: "Agent Six",
      amount: "6,800,000",
      address_line_1: "45 Pine St",
      city: "San Francisco",
      postal_code: "94101",
      country_name: "USA",
    },
    {
      id: 7,
      agent_logo: "/assets/logo7.png",
      name: "Agent Seven",
      amount: "7,200,000",
      address_line_1: "78 Maple St",
      city: "Seattle",
      postal_code: "98101",
      country_name: "USA",
    },
  ];

  // Update the displayed agent data based on the background image
  const agent = agents[currentImageIndex];

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-[100vh] text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
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
        <div className="absolute z-10 top-18 right-2 transform -translate-x-1/2 md:translate-x-0 md:right-8 desktop:right-20 flex flex-col space-y-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-[2px] md:h-8 desktop:h-[4rem] cursor-pointer ${
                currentImageIndex === index ? "bg-gold" : "bg-white"
              }`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Mice Scroll Indicator */}
      <div className="absolute bottom-[125px] lg:bottom-[11dvh] 3xl:bottom-[12.3dvh] right-0 container__padding z-10">
        <MiceScroll />
      </div>

      {/* Hero Content (Changes when background changes) */}
      <div className="absolute bottom-0 space-y-[1.5dvh] 3xl:space-y-[2dvh] mt-auto">
        <div className="relative w-full lg:w-fit container__padding">
          <AnimatePresence mode="wait">
            <HeroContent key={agent.id} agent={agent} />
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="relative">
          <Footer />
        </div>
      </div>
    </div>
  );
}
