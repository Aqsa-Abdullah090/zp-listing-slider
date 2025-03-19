"use client";
import React, { useState } from "react";
import { links } from "./contants";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const CenterNavItems = () => {
  const searchParams = useSearchParams();
 

  return (
    <>
      <ul className="flex lg:space-x-3 xl:space-x-5 2xl:space-x-[48px] 4xl:space-x-[1vw]">
        {links.map((link) => (
          <li
            key={link}
            className={clsx(
              "uppercase text-[6.67px] lg:text-[6.5px] xl:text-[9.23px] 2xl:text-[12px] tracking-[3px] whitespace-nowrap opacity-50",
              searchParams.get("type")?.toString() === link.replaceAll(" ", "-")
                ? "opacity-100 cursor-pointer"
                : "opacity_hover_animation"
            )}
          >
            {link}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CenterNavItems;
