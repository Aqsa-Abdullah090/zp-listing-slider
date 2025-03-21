"use client";
import React from "react";
import { links } from "./contants";
import clsx from "clsx";

const CenterNavItems = () => {
  return (
    <ul className="flex lg:space-x-3 xl:space-x-5 2xl:space-x-[48px] 4xl:space-x-[1vw]">
      {links.map((link) => (
        <li
          key={link}
          className={clsx(
            "uppercase text-[6.67px] lg:text-[6.5px] xl:text-[9.23px] 2xl:text-[15px] tracking-[3px] whitespace-nowrap opacity-50 hover:opacity-100 cursor-pointer"
          )}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

export default CenterNavItems;