
import Marquee from "react-fast-marquee";

const FooterMarquee = () => {

  

  return (
    <Marquee
      gradientColor="black"
      className="agent-marquee-container"
      autoFill
      pauseOnHover
    >

          <img
            src="https://zimopro.com/assets/temp/agents_logos/Barnes_IR.svg"
            alt="agent-logo"
            className="w-auto h-[30px] mx-8 "
          />
    </Marquee>
  );
};

export default FooterMarquee;
