import Marquee from "react-fast-marquee";

const FooterMarquee = () => {
  const logos = [
    "https://zimopro.com/assets/temp/agents_logos/Barnes_IR.svg",
    "https://zimopro.com/assets/temp/agents_logos/E&V.svg",
    "https://zimopro.com/assets/temp/agents_logos/F&C.svg",
    "https://zimopro.com/assets/temp/agents_logos/CB.svg",
    "https://zimopro.com/assets/temp/agents_logos/Christies_IRE.svg",
    "https://zimopro.com/assets/temp/agents_logos/John_Taylor.svg",
  ];

  return (
    <Marquee
      gradientColor="black"
      className="agent-marquee-container"
      autoFill
      pauseOnHover
    >
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Agent ${index + 1}`}
          className="w-auto h-[30px] mx-8"
        />
      ))}
    </Marquee>
  );
};

export default FooterMarquee;

