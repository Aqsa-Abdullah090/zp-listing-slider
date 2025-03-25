import clsx from "clsx";
import { useEffect, useState } from "react";
import ZpSideMenuTransSvg from "../svgs/zp-side-menu-trans-svg";
import SideMenuTransSvg from "../svgs/side-menu-trans-svg";

type Variant = "fixed" | "absolute";

const SidebarBtn = ({toggleSidebar, variant, page }: { toggleSidebar: string, variant: Variant; page: string }) => {
  const [text, setText] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);

  const toggleText = () => {
    setText((prevText) => !prevText);
  };

  const toggleAnimate = () => {
    setAnimate((prevAnimate) => !prevAnimate);
  };

  useEffect(() => {
    const intervalId = setInterval(toggleText, 4000);
    const intervalIdAnimate = setInterval(toggleAnimate, 2000);

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalIdAnimate);
    };
  }, []);

  const reelsFixed = variant === "fixed" && page === "reels";
  const homeFixed = variant === "fixed" && page === "home";

  return (
    <button
    onClick={toggleSidebar}
      className={clsx(
        "duration-150 transition-all w-fit border-l-0 border-[2px]",
        "group",
        homeFixed && "bg-white hover:bg-black border-black",
        reelsFixed && "bg-transparent hover:bg-white border-white",
        variant === "absolute" && "bg-transparent hover:bg-white border-white"
      )}
    >
      <div
        className={clsx(
          "w-[27.78px] lg:w-[38.46px] 3xl:w-[50px] transition-transform duration-1000 ease-in-out",
          animate ? "-translate-x-full" : "-translate-x-[1px]"
        )}
      >
        {text ? (
          <ZpSideMenuTransSvg
            className={clsx(
              "w-[27.78px] lg:w-[38.46px] 3xl:w-[50px] h-auto",
              homeFixed && "fill-black group-hover:fill-white",
              variant === "absolute" || reelsFixed
                ? "fill-white group-hover:fill-black"
                : ""
            )}
          />
        ) : (
          <SideMenuTransSvg
            className={clsx(
              "w-[27.78px] lg:w-[38.46px] 3xl:w-[50px] h-auto",
              homeFixed && "fill-black group-hover:fill-white",
              variant === "absolute" || reelsFixed
                ? "fill-white group-hover:fill-black"
                : ""
            )}
          />
        )}
      </div>
    </button>
  );
};

export default SidebarBtn;

