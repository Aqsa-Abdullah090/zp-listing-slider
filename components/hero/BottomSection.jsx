import React from "react";

function BottomSection() {
  return (
    <div>
      {/* Content Section */}
      <div className="absolute bottom-6 px-2 md:px-8 desktop:px-20 w-full flex flex-col gap-4 md:flex-row items-center md:items-end justify-between">
        <div className="flex-shrink-0">
          <img
            src="/assets/g12.png"
            alt="logo"
            className="max-md:h-10 md:max-desktop:mb-1 max-desktop:h-14"
          />
        </div>
        <div className="flex flex-col items-center gap-2 md:gap-3 tracking-wider">
          <div className="tracking-widest text-[10px] md:text-[16px] desktop:text-[22px]">
            £5,000,000 GBP
          </div>
          <div className="text-center text-[6px] md:text-[14px] desktop:text-[20px] flex gap-2 md:gap-5 2xl:gap-8">
            <p>SHELTON STREET</p>
            <p>CONVENT GARDEN</p>
            <p>LONDON</p>
            <p>WC2H 9JQ</p>
            <p>UNITED KINGDOM</p>
          </div>
        </div>
        <div> 
          <img
            src="/assets/Ces-Logo.png"
            alt=""
            className="h-5 md:h-8 desktop:h-11"
          />
          <div className="flex gap-3 md:gap-6 items-end text-[9px] md:text-[14px] desktop:text-[20px] mt-3 md:mt-10 2xl:mt-14 tracking-wider">
            <p>£25.00 GBP</p>
            <p className="cursor-pointer">BUY ENTRY NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
