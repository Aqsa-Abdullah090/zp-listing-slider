/* eslint-disable @next/next/no-img-element */
"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import CenterNavItems from "./center-nav-items";
import LeftNavItems from "./left-nav-items";
import RightNavItems from "./right-nav-items";
import { AnimatePresence, motion } from "framer-motion";

// Define types for props
interface MiniNavProps {
  page: string;
  isFixedVisible?: boolean;
  navbarColor?: string;
}

const MiniNav: React.FC<MiniNavProps> = ({ page }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [preventClose, setPreventClose] = useState(false);
  const [isCenterOut, setIsCenterOut] = useState(true);

  useEffect(() => {
    if (!isHovered) {
      const collapseTimeout = setTimeout(() => {
        setExpanded(false);
      }, 500);

      return () => clearTimeout(collapseTimeout);
    }
  }, [isHovered]);

  const handleExpandedNavbar = () => {
    if (isHovered && !expanded) {
      setExpanded(true);
    }
  };

  const reelsPage = page === "reels";

  useEffect(() => {
    const handleMouseLeave = () => {
      setPreventClose(isHovered);
    };

    const handleScroll = () => {
      setPreventClose(false);
    };

    document.body.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleScroll);

    return () => {
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleScroll);
    };
  }, [isHovered]);

  return (
    <div className="h-14 2xl:h-28 fixed top-0 left-0 w-full z-10 flex justify-center items-start group">
      <header
        className={clsx(
          "transition-all ease-in-out w-[161px] lg:w-[267px] 2xl:w-[361px] hover:w-full overflow-hidden hover:-ml-[1px] group-hover:opacity-100",
          expanded ? "duration-[0.7s] delay-[2000ms]" : "duration-[0.4s]",
          isCenterOut ? "opacity-0" : "opacity-100"
        )}
        onTransitionEnd={handleExpandedNavbar}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav className="lg:h-[10vh] 2xl:h-[100px] flex items-center justify-between px-[30px]">
          <div className="flex items-center">
            <LeftNavItems />
            <AnimatePresence>
              {reelsPage && expanded && (
                <motion.div
                  initial={{ x: -300 }}
                  animate={{ x: 0 }}
                  exit={{ x: -300 }}
                  transition={{ duration: 0.5, delay: isHovered ? 0.7 : 1, ease: "linear" }}
                  className="pl-[5px] lg:pl-[40px] 2xl:pl-[75px] 3xl:pl-[70px]"
                >
                  <img src="/assets/forward_arrow.svg" alt="Forward Arrow" className="w-[27.52px] h-[20px] rotate-180 cursor-pointer z-[2]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 left-1/2 flex items-center justify-center -translate-x-1/2 overflow-hidden w-[85vw] 4xl:w-[88vw]">
            <div className={clsx("duration-700", expanded ? "translate-x-0 delay-0" : "-translate-x-[80vw] delay-[1200ms]")}>
              <CenterNavItems />
            </div>
          </div>
          <div className="flex items-center space-x-5 lg:space-x-8 3xl:space-x-14">
            <RightNavItems variant={"fixed"} expanded={expanded} />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MiniNav;