/* eslint-disable @next/next/no-img-element */
import SearchIcon from "@/components/svgs/search-icon";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export interface Country {
  id: number;
  city: string;
  country: string;
  flag: string;
}

const SearchCountry = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState<Country[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filterCountries = (searchTerm: string) => {
    return countries.filter(
      (item) =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleSearch = ((searchTerm) => {
    const filteredCountries = filterCountries(searchTerm);
    setSearched(filteredCountries);
    setDropdownVisible(true);
  }, 300); // Adjust the delay as needed

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    // Immediately update the searched state with current input
    const filteredCountries = filterCountries(searchTerm);
    setSearched(filteredCountries);

    handleSearch(searchTerm);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
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
    <div className="flex justify-between flex-col lg:flex-row items-start">
      {/* view all  */}
      <div className="uppercase flex text-black tracking_2 font__size__18__3xl w-fit space-x-5 font-medium items-center">
        <p>TOP COUNTRIES</p>
        <div className="border-black separator__width h-[10.77px] 3xl:h-[14px]" />
        <p className="opacity_hover_animation">View All</p>
      </div>

      {/* search bar */}
      <div className="relative lg:w-[500px] xl:w-[653.85px] 3xl:w-[850px]">
        <div className="space-y-[10.37px]">
          <div className="space-x-[20px] 3xl:space-x-[100px] flex items-center">
            <label className="uppercase font__size__18__3xl tracking_2 text-black whitespace-nowrap font-medium">
              Search Listings
            </label>
            <input
              type="text"
              ref={inputRef}
              onChange={handleInputChange}
              onFocus={() => setDropdownVisible(true)}
              placeholder="City, Region, Country"
              className="uppercase bg-transparent font__size__18__3xl tracking_2 outline-none text-black flex-grow"
            />
            <SearchIcon fill="#000" className="h-[20px] w-auto" />
          </div>
          <div className="h-[2px] w-full bg-black" />
        </div>
        {/* searched drop down  */}
        <AnimatePresence mode="wait">
          {search && dropdownVisible && (
            <motion.div
              key={searched.length} // different key everytime to reanimate the div
              ref={dropdownRef}
              initial={{ height: 0 }}
              animate={{ height: "fit-content" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bg-black w-full font__size__18__3xl tracking_2 text-white uppercase overflow-hidden"
            >
              {searched?.map((data, index) => (
                <div
                  key={index}
                  className={clsx(
                    index === searched.length - 1
                      ? "border-b-0"
                      : "border-b-[1px]", // line separator
                    "relative group cursor-pointer" // Add relative and group class for hover effects
                  )}
                  style={{
                    borderStyle: "solid",
                    borderImage:
                      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%) 1",
                  }}
                >
                  <div className="h-[40px] mx-[30px] my-[15px] flex items-center justify-between opacity-50 group-hover:opacity-100 duration-300 transition-opacity">
                    <div className="flex items-center space-x-[30px] ">
                      <img
                        src={data.flag}
                        alt={data.country}
                        className="w-[40px] h-[40px] flex-shrink-0"
                      />
                      {/* city and country */}
                      <div className="flex items-center space-x-[20px]">
                        <p>{data.city}</p>
                        <div className="border-white separator__width h-[10.77px] 3xl:h-[14px]" />
                        <p>{data.country}</p>
                      </div>
                    </div>
                    {/* Arrow Icon */}
                    <img
                      src="/assets/forward_arrow.svg"
                      alt=""
                      className="h-[20px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}

              {/* Not Found */}
              {searched.length === 0 && (
                <div className="h-[40px] px-[30px] py-[28px] flex items-center ">
                  NOT FOUND
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchCountry;

export const countries = [
  {
    id: 1,
    city: "London",
    country: "United Kingdom",
    flag: "/assets/temp/uk-flag.png",
  },
  {
    id: 2,
    city: "London",
    country: "Canada",
    flag: "https://zitransfer.com/assets/CANADA.png",
  },
  {
    id: 3,
    city: "New York",
    country: "United States",
    flag: "https://zitransfer.com/assets/UNITEDSTATES.png",
  },
  {
    id: 4,
    city: "Tokyo",
    country: "Japan",
    flag: "https://zitransfer.com/assets/JAPAN.png",
  },
];
