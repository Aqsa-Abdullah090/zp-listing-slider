// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useRef, useState } from "react";
// import { countries, Country } from "../featured-listings/search-country";
// import { debounce } from "lodash";
// import {
//   AnimatePresence,
//   motion,
//   useAnimate,
//   useAnimation,
// } from "framer-motion";
// import clsx from "clsx";
// import ForwardArrowSvg from "../svgs/forward_arrow_svg";
// import { useDispatch, useSelector } from "react-redux";
// import { LinksVisibleReducer } from "@/store/featues/side-menu.slice";
// import { zpBackend } from "@/lib/service";
// import { RootState } from "@/store";
// import { SearchListing } from "@/lib/types";
// import { BiLoaderAlt } from "react-icons/bi";

// const SideMenuSearch = () => {
//   //search input text
//   const [search, setSearch] = useState("");
//   // searched data array after
//   const [searched, setSearched] = useState<SearchListing[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const { data: vdata } = useSelector((state: RootState) => state.visitor);
//   const dispatch = useDispatch();

//   interface SearchRes {
//     data: {
//       listings: SearchListing[];
//       success: boolean;
//     };
//   }

//   const filterCountries = (searchTerm: string) => {
//     return countries.filter(
//       (item) =>
//         item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.city.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   const handleSearch = debounce(async (searchTerm: string) => {
//     try {
//       const [city, region, country] = searchTerm.split(",");
//       setSearch(searchTerm);
//       setLoading(true);
//       const { data }: SearchRes = await zpBackend.get(
//         `/api/search_listings?city=${city?.trim()}&region=${
//           region?.trim() || ""
//         }&country=${country?.trim() || ""}&ip_address=${
//           vdata?.ip_address
//         }&category_slug=real-estate`
//       );
//       setSearched(data.listings);

//       dispatch(
//         LinksVisibleReducer(
//           searchTerm && data.listings.length > 0 ? false : true
//         )
//       );
//       setDropdownVisible(true);
//     } catch (e) {
//       // pass
//     } finally {
//       setLoading(false);
//     }
//   }, 300); // Adjust the delay as needed

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const searchTerm = e.target.value;
//     if (!searchTerm) {
//       setSearch("");
//       setSearched([]);
//       dispatch(LinksVisibleReducer(true));
//       return;
//     }
//     handleSearch(searchTerm);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         inputRef.current !== event.target
//       ) {
//         setDropdownVisible(false);
//         // when clicked outside then show links
//         dispatch(LinksVisibleReducer(true));
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       <div className="w-full space-y-[12px] 3xl:space-y-[22px]">
//         <div className="space-x-[20px] flex items-center relative">
//           <label className="uppercase sidemenu_font_size tracking_2 text-white whitespace-nowrap">
//             Search Listings
//           </label>
//           <input
//             type="text"
//             ref={inputRef}
//             onChange={handleInputChange}
//             onFocus={() => {
//               setDropdownVisible(true);
//               // focused and there is text in field and data matches then links will disappear
//               dispatch(
//                 LinksVisibleReducer(
//                   search && searched.length > 0 ? false : true
//                 )
//               );
//             }}
//             placeholder="City, Region, Country"
//             className="uppercase bg-transparent sidemenu_font_size tracking_2 outline-none text-white flex-grow placeholder-white placeholder-opacity-25"
//           />
//           <img
//             src={"/assets/icons/Search.svg"}
//             className={clsx("h-[15px] w-auto", loading && "opacity-0")}
//             alt="search icon"
//           />
//           <span className="absolute top-1/2 right-0 -translate-y-1/2">
//             <BiLoaderAlt
//               className={clsx(
//                 "animate-spin",
//                 loading ? "opacity-100" : "opacity-0"
//               )}
//             />
//           </span>
//         </div>
//         <div className="absolute translate-y-[1px] h-[1px] w-full bg-white" />
//         {/* just a placeholder for correct layout  */}
//         <div className="h-[1px]" />
//       </div>
//       {/* searched drop down  */}
//       <AnimatePresence mode="wait">
//         {search && dropdownVisible && (
//           <motion.div
//             key={searched.length} // different key everytime to reanimate the div
//             ref={dropdownRef}
//             initial={{ height: 0 }}
//             animate={{
//               height: "fit-content",
//               transition: { duration: 0.5, delay: 0.7 },
//             }} // links will disapear in X seconds
//             exit={{ height: 0 }}
//             transition={{ duration: 0.5 }}
//             className="absolute h-fit w-full sidemenu_font_size tracking_2 uppercase overflow-y-clip z-20"
//           >
//             {searched?.map((data, index) => (
//               <div key={index}>
//                 <div
//                   key={index}
//                   className={clsx(
//                     "relative group cursor-pointer" // Add relative and group class for hover effects
//                   )}
//                 >
//                   <div
//                     className={clsx(
//                       " pr-[20px] py-[11px] flex items-center justify-between  text-white hover:text-black duration-300 transition-all"
//                     )}
//                   >
//                     <div
//                       style={{ width: "calc(100% + 20px)" }}
//                       className={clsx(
//                         "absolute inset-0 left-[-20px] h-full  transition-all duration-300 -z-10",
//                         index === 0
//                           ? "bg-white top-[-52px] group-hover:top-[0px]"
//                           : "group-hover:bg-white"
//                       )}
//                     />
//                     <div className="flex items-center space-x-[20px]">
//                       <img
//                         src={data.flag_url}
//                         alt={data.country_name}
//                         className="w-[30px] h-[30px] flex-shrink-0"
//                       />
//                       {/* city and country */}
//                       <div className="flex items-center space-x-[13px]">
//                         <p>{data.city}</p>
//                         <div className="border-white group-hover:border-black separator__width h-[10px] transition-all duration-300" />
//                         <p>{data.country_name}</p>
//                       </div>
//                     </div>
//                     {/* Arrow Icon */}
//                     <ForwardArrowSvg
//                       fill={"#000"}
//                       className="h-[16px] w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SideMenuSearch;


import React from 'react'

function SideMenuSearch() {
  return (
    <div>
      sad
    </div>
  )
}

export default SideMenuSearch
