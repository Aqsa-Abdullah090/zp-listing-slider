"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Card from "./card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick to ensure it runs only on the client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Main() {
  const sliderRef1 = useRef(null); // Ref for the first slider
  const sliderRef2 = useRef(null); // Ref for the second slider

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1928,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef1.current) sliderRef1.current.slickPrev(); // Move first slider
    if (sliderRef2.current) sliderRef2.current.slickPrev(); // Move second slider
  };

  const handleNext = () => {
    if (sliderRef1.current) sliderRef1.current.slickNext(); // Move first slider
    if (sliderRef2.current) sliderRef2.current.slickNext(); // Move second slider
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex gap-5 justify-between items-center py-10 px-8 desktop:px-20">
        <h1 className="text-[12px] md:text-[24px] 2xl:text-[30px] font-semibold uppercase">
          Featured
        </h1>
        <p className="uppercase text-[12px] md:text-[24px] font-semibold 2xl:text-[30px]">
          View All Homes
        </p>
        <div className="flex gap-3">
          {/* Custom Arrows */}
          <img
            src="/assets/Group 3100.png"
            alt="Previous"
            className="cursor-pointer max-md:h-5 max-2xl:h-14"
            onClick={handlePrev} // Trigger previous slide
          />
          <img
            src="/assets/Group 3094.png"
            alt="Next"
            className="cursor-pointer max-md:h-5 max-2xl:h-14"
            onClick={handleNext} // Trigger next slide
          />
        </div>
      </div>

      {/* First Slider Section */}
      <div className="mx-auto">
        <Slider ref={sliderRef1} {...settings}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div className="px-8 desktop:px-20" key={index}>
                <Card index={index + 1} />
              </div>
            ))}
        </Slider>
      </div>

      {/* Second Slider Section */}
      <div className="mx-auto mt-6">
        <Slider ref={sliderRef2} {...settings}>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div className="px-8 desktop:px-20" key={index}>
                <Card index={index + 1} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Main;
