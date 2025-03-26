/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { countries } from "./search-country";
import debounce from "lodash/debounce";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import ForwardArrowSvg from "../svgs/forward_arrow_svg";
import { BiLoaderAlt } from "react-icons/bi";
import axios from "axios";

const SideMenuSearch = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const filterCountries = (searchTerm) => {
    return countries.filter(
      (item) =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearch = debounce(async (searchTerm) => {
    try {
      const [city, region, country] = searchTerm.split(",");
      setSearch(searchTerm);
      setLoading(true);

      const response = await axios.get(
        `/api/search_listings?city=${city?.trim()}&region=${region?.trim() || ""}&country=${country?.trim() || ""}&category_slug=real-estate`
      );

      setSearched(response.data.data.listings);
      setDropdownVisible(true);
    } catch (e) {
      console.error("Search error:", e);
    } finally {
      setLoading(false);
    }
  }, 300);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    if (!searchTerm) {
      setSearch("");
      setSearched([]);
      setDropdownVisible(false);
      return;
    }
    handleSearch(searchTerm);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current !== event.target
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="w-full space-y-[12px] 3xl:space-y-[22px]">
        <div className="space-x-[20px] flex items-center relative">
          <label className="uppercase text-[10px] tracking-[3px] text-white whitespace-nowrap">
            Search Listings
          </label>
          <input
            type="text"
            ref={inputRef}
            onChange={handleInputChange}
            onFocus={() => setDropdownVisible(true)}
            placeholder="City, Region, Country"
            className="uppercase bg-transparent text-[10px] tracking-[3px] outline-none text-white flex-grow placeholder-white placeholder-opacity-25"
          />
          <img
            src={"/assets/icons/Search.svg"}
            className={clsx("h-[15px] w-auto", loading && "opacity-0")}
            alt="search icon"
          />
          <span className="absolute top-1/2 right-0 -translate-y-1/2">
            <BiLoaderAlt
              className={clsx("animate-spin", loading ? "opacity-100" : "opacity-0")}
            />
          </span>
        </div>
        <div className="absolute translate-y-[1px] h-[1px] w-full bg-white" />
        <div className="h-[1px]" />
      </div>

      {/* searched dropdown */}
      <AnimatePresence mode="wait">
        {search && dropdownVisible && (
          <motion.div
            key={searched.length}
            ref={dropdownRef}
            initial={{ height: 0 }}
            animate={{ height: "fit-content", transition: { duration: 0.5, delay: 0.7 } }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute h-fit w-full text-[10px] tracking-[3px] uppercase overflow-y-clip z-20"
          >
            {searched.map((data, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="pr-[20px] py-[11px] flex items-center justify-between text-white hover:text-black duration-300 transition-all">
                  <div
                    style={{ width: "calc(100% + 20px)" }}
                    className={clsx(
                      "absolute inset-0 left-[-20px] h-full transition-all duration-300 -z-10",
                      index === 0 ? "bg-white top-[-52px] group-hover:top-[0px]" : "group-hover:bg-white"
                    )}
                  />
                  <div className="flex items-center space-x-[20px]">
                    <img
                      src={data.flag_url}
                      alt={data.country_name}
                      className="w-[30px] h-[30px] flex-shrink-0"
                    />
                    <div className="flex items-center space-x-[13px]">
                      <p>{data.city}</p>
                      <div className="border-white group-hover:border-black border-r-[2.3px] h-[10px] transition-all duration-300" />
                      <p>{data.country_name}</p>
                    </div>
                  </div>
                  <ForwardArrowSvg
                    fill={"#000"}
                    className="h-[16px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenuSearch;


