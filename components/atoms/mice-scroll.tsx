import { motion } from "framer-motion";
import { Link } from "react-scroll";
import MiceSvg from "../svgs/mice-svg";
import "./style.scss";

const MiceScroll = ({ targetId }: { targetId: string }) => {
  return (
    <>
      <Link
        to={targetId}
        className="cursor-pointer"
        offset={1} //1px
        //   className={navigate-down}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="scroll__animation"
        >
          <div className="mouse">
            <MiceSvg fill="#fff" />
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default MiceScroll;
