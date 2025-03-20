import React from "react";
import ZigProGlobalAgends from "../svgs/zig-pro-global_agends-svg";
import FooterMarquee from "./footer-marquee";

const Footer = () => {
  return (
    <footer className="flex min-h-[10dvh] bg-black items-center space-x-5 p-[16px]">
      {/* left  */}
      <div>
        <ZigProGlobalAgends
          fill="#fff"
          className="w-[46.32px] lg:w-[64.14px] 3xl:w-[83.38px] h-auto"
        />
      </div>
      {/* marquee  */}
      <FooterMarquee />
    </footer>
  );
};

export default Footer;
