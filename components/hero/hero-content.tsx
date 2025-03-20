/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

interface Props {
  agent: any;
}

const HeroContent = ({ agent }: Props) => {
  return (
    <motion.div
      key={agent?.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-[2.08dvh] 2xl:space-y-[2.96dvh] w-[347.22px] lg:w-[480.77px] 3xl:w-[625px] duration-1000 transition-all"
    >
      <img
        src={agent?.agent_logo}
        alt={agent?.name}
        className="h-[20px] lg:h-[27.78px] 3xl:h-[38.46px]"
      />
      <p className="text-white text-[10.00px] lg:text-[15px] 3xl:text-[18px] tracking-[2px] uppercase whitespace-nowrap">
        <span dir="ltr">$</span>
        {agent.amount} {agent.currency}
      </p>
      <div className="overflow-hidden sm:overflow-visible uppercase flex space-x-[16.67px] lg:space-x-[23.08px] 3xl:space-x-[32px] whitespace-nowrap text-[6.67px] lg:text-[6.5px] xl:text-[9.23px] 3xl:text-[12px] text-white tracking-[2px]">
        <p>{agent.address_line_1}</p>
        {agent.address_line_2 && <p>{agent.address_line_2}</p>}
        <p>{agent.city}</p>
        <p>{agent.postal_code}</p>
        <p>{agent.country_name}</p>
      </div>
      <button className="h-[20px] lg:h-[27.69px] 3xl:h-[36px] px-4 3xl:px-6  flex justify-between space-x-4 text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 border-2 border-white items-center text-[7.78px] lg:text-[10.77px] 3xl:text-[14px] tracking-[1.5px] whitespace-nowrap cursor-pointer">
        <p>
          <span dir="ltr">
          $ 
          </span>
          25.00
        </p>
        <p className="tracking-[2px]">BUY ENTRY NOW</p>
      </button>
    </motion.div>
  );
};

export default HeroContent;
