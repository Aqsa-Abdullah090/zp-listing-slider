/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Marquee from "react-fast-marquee"; 
import { useState } from "react";
import Link from "next/link";
import Heart from "../atoms/heart";

const tempThumbnailImages = [
  {
    id: 1,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F1.png?alt=media&token=ad1d9ceb-5f0a-4f46-9a26-f4014c6b6d02",
    country: "uk",
    flag_url: "/path-to-uk-flag.png",
  },
  {
    id: 2,
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/zimopro-7df3c.appspot.com/o/testing-images%2F400%2F2.png?alt=media&token=d1ef2f56-f3be-46cc-80bd-60fdee4bafe6",
    country: "uk",
    flag_url: "/path-to-uk-flag.png",
  },
];

const VerticalMarquee = ({ isSideMenuOpen }) => { // ✅ Accept `isSideMenuOpen` as a prop
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Marquee
        direction="down"
        pauseOnHover={true}
        speed={50}
        gradient={false}
        style={{ height: isSideMenuOpen ? "100vh" : "60vh" }} 
      >
        {tempThumbnailImages.map((listing) => (
          <div key={listing.id} className={clsx("relative mb-5", isHovered && "opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer")}>
            <Link href={`/beta/listing-detail-page/?listing-id=${listing.id}`}>
              <img
                src={listing.thumbnail} 
                alt=""
                className="w-[400px] object-cover"
              />
            </Link>
            <img
              src="/assets/ZigPro.svg"
              className="h-[19px] 3xl:h-[25px] absolute top-3 left-3 3xl:top-5 3xl:left-5 z-[2] opacity-50"
              alt=""
            />
            {/* flag */}
            {listing.flag_url && (
              <img
                src={listing.flag_url}
                className="h-[19px] 3xl:h-[25px] absolute top-3 3xl:top-5 right-3 3xl:right-5 z-[2]"
                alt=""
              />
            )}
            <Heart />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default VerticalMarquee;