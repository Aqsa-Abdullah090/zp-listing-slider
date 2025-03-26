// /* eslint-disable @next/next/no-img-element */
// import clsx from "clsx";
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";
// import Heart from "../atoms/heart";

// const tempThumbnailImages = [
//   {
//     id: 1,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F1.png?alt=media&token=ad1d9ceb-5f0a-4f46-9a26-f4014c6b6d02",
//     country: "uk",
//   },
//   {
//     id: 2,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F2.png?alt=media&token=d1ef2f56-f3be-46cc-80bd-60fdee4bafe6",
//     country: "uk",
//   },
//   {
//     id: 3,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F3.png?alt=media&token=f3018214-821d-4182-9728-2e81d234c106",
//     country: "uk",
//   },
//   {
//     id: 4,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F4.png?alt=media&token=ed013751-34d6-46f4-b310-1e04dff34bea",
//     country: "uk",
//   },
//   {
//     id: 5,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F5.png?alt=media&token=317f94d1-ba5f-4d38-9a6b-86c472cb26c3",
//     country: "uk",
//   },
//   {
//     id: 6,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F6.png?alt=media&token=3fa64872-b8e2-46f1-9536-a2aca708a5b5",
//     country: "uk",
//   },
//   {
//     id: 7,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F7.png?alt=media&token=e26cd974-2264-410d-b0ad-a2d6a07508f1",
//     country: "uk",
//   },
//   {
//     id: 8,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F8.png?alt=media&token=f11f7f03-9f2b-44aa-87f8-fbcf1d430d23",
//     country: "uk",
//   },
//   {
//     id: 9,
//     thumbnail:
//       "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F5.png?alt=media&token=317f94d1-ba5f-4d38-9a6b-86c472cb26c3",
//     country: "uk",
//   },
// ];

// const verticalCarouselSettings = {
//   infinite: true,
//   speed: 2000,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   vertical: true,
//   verticalSwiping: true,
//   autoplay: true,
//   autoplaySpeed: 0,
//   arrows: false,
//   cssEase: "linear",
//   rtl: true,
//   responsive: [
//     {
//       breakpoint: 2560,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 4,
//       },
//     },
//   ],
// };

// const VerticalMarquee = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="h-screen w-full flex justify-center items-center overflow-hidden"
//     >
//       <Slider {...verticalCarouselSettings} className="h-full w-full">
//         {tempThumbnailImages.map((listing) => (
//           <div
//             key={listing.id}
//             className={clsx("relative mb-5 h-full", isHovered && "opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer")}
//           >
//             <Link href={`/beta/listing-detail-page/?listing-id=${listing.id}`}>
//               <img
//                 src={listing.thumbnail}
//                 alt="Listing Image"
//                 className="w-full h-full object-cover"
//               />
//             </Link>
//             <img
//               src="/assets/ZigPro.svg"
//               className="h-[19px] 3xl:h-[25px] absolute top-3 left-3 3xl:top-5 3xl:left-5 z-[2] opacity-50"
//               alt="zig pro"
//             />
//             {/* flag */}
//             <img
//               src="/assets/temp/uk-flag.png"
//               className="h-[19px] 3xl:h-[25px] absolute top-3 3xl:top-5 right-3 3xl:right-5 z-[2]"
//               alt="UK Flag"
//             />
//             <Heart />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default VerticalMarquee;

"use client";
import React from "react";
import { motion } from "framer-motion";
import Heart from "../atoms/heart";

const tempThumbnailImages = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F1.png?alt=media&token=ad1d9ceb-5f0a-4f46-9a26-f4014c6b6d02",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F2.png?alt=media&token=d1ef2f56-f3be-46cc-80bd-60fdee4bafe6",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F3.png?alt=media&token=f3018214-821d-4182-9728-2e81d234c106",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F4.png?alt=media&token=ed013751-34d6-46f4-b310-1e04dff34bea",
  },
];

// Duplicate images for seamless scrolling
const scrollingImages = [...tempThumbnailImages, ...tempThumbnailImages];

function VerticalMarquee() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <motion.div
        className="flex flex-col space-y-4"
        initial={{ y: 0 }} // Start from the first 4 images visible
        animate={{ y: ["-100%", "-75%", "-50%", "-25%", "0%"] }} // Moves 1 image at a time
        transition={{
          ease: "linear",
          duration: 10, // Adjust speed
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {scrollingImages.map((listing, index) => (
          <div key={index} className="relative w-full h-40">
            {/* Main Image */}
            <img
              src={listing.thumbnail}
              alt={`Listing Image ${index + 1}`}
              className="w-full h-full object-cover shadow-md"
            />

            {/* Watermark Image */}
            <img
              src="/assets/ZigPro.svg"
              className="h-[19px] 3xl:h-[25px] absolute top-3 left-3 3xl:top-5 3xl:left-5 z-[2] opacity-50"
              alt="Zig Pro"
            />

            {/* UK Flag */}
            <img
              src="/assets/temp/uk-flag.png"
              className="h-[19px] 3xl:h-[25px] absolute top-3 3xl:top-5 right-3 3xl:right-5 z-[2]"
              alt="UK Flag"
            />

            {/* Heart Icon */}
            <Heart />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default VerticalMarquee;







