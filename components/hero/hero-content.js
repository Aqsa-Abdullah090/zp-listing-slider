/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const HeroContent = ({ agent }) => {
  return (
    <motion.div
      key={agent?.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-[2.08dvh] 2xl:space-y-[2.96dvh] w-[347.22px] lg:w-[480.77px] 3xl:w-[625px] duration-10 transition-all"
    >
      <img
        src={agent?.agent_logo}
        alt={agent?.name}
        className="h-[20px] lg:h-[27.78px] 2xl:h-[38.46px]"
      />
      <p className="text-white text-[10.00px] lg:text-[12px] 2xl:text-[18px] tracking-[2px] 2xl:tracking-[3.5px] uppercase whitespace-nowrap">
        <span dir="ltr">$</span>
        {agent.amount} {agent.currency}
      </p>
      <div className="overflow-hidden sm:overflow-visible uppercase flex space-x-[16.67px] lg:space-x-[23.08px] 2xl:space-x-[38px] whitespace-nowrap text-[6.67px] lg:text-[6.5px] xl:text-[9.23px] 2xl:text-[12px] text-white tracking-[2px] 2xl:tracking-[3px]">
        <p>{agent.address_line_1}</p>
        {agent.address_line_2 && <p>{agent.address_line_2}</p>}
        <p>{agent.city}</p>
        <p>{agent.postal_code}</p>
        <p>{agent.country_name}</p>
      </div>
      <button className="h-[20px] lg:h-[27.69px] 2xl:h-[36px] px-4  flex justify-between space-x-4 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 border-2 border-white items-center text-[7.78px] lg:text-[10.77px] 2xl:text-[14px] tracking-[1.5px] 2xl:tracking-[3px] whitespace-nowrap cursor-pointer">
        <p>$25.00</p>
        <p className="tracking-[2px]">BUY ENTRY NOW</p>
      </button>
    </motion.div>
  );
};

export default HeroContent;

// const agents = [
//   {
//     id: 1,
//     agent_logo: "https://zimopro.com/assets/temp/agents_logos/Barnes_IR.svg",
//     name: "Agent One",
//     amount: "1,000,000 GBP",
//     address_line_1: "123 Street",
//     city: "New York",
//     postal_code: "10001",
//     country_name: "USA",
//   },
//   {
//     id: 2,
//     agent_logo: "https://zimopro.com/assets/temp/agents_logos/E&V.svg",
//     name: "Agent Two",
//     amount: "2,500,000 GBP",
//     address_line_1: "456 Avenue",
//     city: "Los Angeles",
//     postal_code: "90001",
//     country_name: "USA",
//   },
//   {
//     id: 3,
//     agent_logo: "https://zimopro.com/assets/temp/agents_logos/F&C.svg",
//     name: "Agent Three",
//     amount: "3,750,000 GBP",
//     address_line_1: "789 Blvd",
//     city: "Chicago",
//     postal_code: "60601",
//     country_name: "USA",
//   },
//   {
//     id: 4,
//     agent_logo: "https://zimopro.com/assets/temp/agents_logos/CB.svg",
//     name: "Agent Four",
//     amount: "4,200,000 GBP",
//     address_line_1: "101 Main St",
//     city: "Houston",
//     postal_code: "77001",
//     country_name: "USA",
//   },
//   {
//     id: 5,
//     agent_logo:
//       "https://zimopro.com/assets/temp/agents_logos/Christies_IRE.svg",
//     name: "Agent Five",
//     amount: "5,600,000 GBP",
//     address_line_1: "12 Elm St",
//     city: "Miami",
//     postal_code: "33101",
//     country_name: "USA",
//   },
//   {
//     id: 6,
//     agent_logo:
//       "https://zimopro.com/assets/temp/agents_logos/John_Taylor.svg",
//     name: "Agent Six",
//     amount: "6,800,000 GBP",
//     address_line_1: "45 Pine St",
//     city: "San Francisco",
//     postal_code: "94101",
//     country_name: "USA",
//   },
//   {
//     id: 7,
//     agent_logo: "https://zimopro.com/assets/temp/agents_logos/Sotherbys.svg",
//     name: "Agent Seven",
//     amount: "7,200,000 GBP",
//     address_line_1: "78 Maple St",
//     city: "Seattle",
//     postal_code: "98101",
//     country_name: "USA",
//   },
//   {
//     id: 8,
//     agent_logo: "https://zimopro.com/assets/temp/agents_logos/Savills.svg",
//     name: "Agent Eight",
//     amount: "7,800,000 GBP",
//     address_line_1: "90 Oak St",
//     city: "Boston",
//     postal_code: "02101",
//     country_name: "USA",
//   },
// ];
