import UserSvg from "@/components/svgs/user-svg";
import ZigProSell from "@/components/svgs/zig-pro-sell-svg";
import clsx from "clsx";
import React from "react";
import { useTheme } from "@/context/theme-context"; // Import theme context

const RightNavItems = ({
  variant,
  expanded = false,
}: {
  variant: string;
  expanded?: boolean;
}) => {
  const { theme } = useTheme(); // Get theme from context

  return (
    <>
      <div
        className={clsx(
          variant === "fixed" && "duration-300 ease-linear",
          variant === "fixed" && !expanded 
            ? "absolute z-0 translate-x-[150px]"
            : expanded 
            ? "translate-x-0"
            : "" 
        )}
      >
       <div className="flex-none  block 2xl:hidden">
  <ZigProSell className="fill-inherit" />
</div>

      </div>
      {/* Apply theme-based fill color */}
      <UserSvg
        className={clsx(
          "w-auto h-[16.67px] lg:h-[23.08px] 2xl:h-[30px] flex-shrink-0 z-10",
          theme === "light" ? "fill-black" : "fill-white" // Change fill color based on theme
        )}
      />
      <div className="z-10">
        <img
          src="/assets/temp/uk-flag.png"
          alt="uk flag"
          className="w-[22.22px] lg:w-[30.77px] 2xl:w-[40px] h-auto flex-shrink-0"
        />
      </div>
    </>
  );
};

export default RightNavItems;