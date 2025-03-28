/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import CenterNavItems from "./center-nav-items";
import LeftNavItems from "./left-nav-items";
import RightNavItems from "./right-nav-items";
import RandomizedAudioWaveAnimation from "../atoms/randomized-audio-wave-animation";

const Navbar = () => {
  return (
    <div className="p-[16px] 2xl:p-[40px] space-y-[8px]">
      <div
        className={clsx(
          "flex justify-between items-center"
        )}
      >
        {/* left side */}
        <div className="justify-self-start flex items-center">
          <LeftNavItems />
        </div>
        {/* center, HIDDEN in small screens for now  */}
        <div className="hidden lg:flex justify-self-center">
          <CenterNavItems />
        </div>
        {/* right side  */}
        <div className="flex space-x-5 lg:space-x-8 2xl:space-x-14 items-center justify-self-end">
          <RightNavItems variant="absolute" />
        </div>
      </div>

      <div className="flex justify-between items-center pt-[16px] 2xl:pt-[40px]">
        <div className="hidden sm:block" >
          <RandomizedAudioWaveAnimation />
        </div>
        <p className="uppercase text-white tracking-[2px] text-[6.67px] lg:text-[6.5px] xl:text-[9.23px] 2xl:text-[15px] opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer">
          list with us
        </p>
      </div>
    </div>
  );
};

export default Navbar;
