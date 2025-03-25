/* eslint-disable @next/next/no-img-element */
import { RootState } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import UserSvg from "../svgs/user-svg";
import ZigProSell from "../svgs/zig-pro-sell-svg";
import ZigPro from "../svgs/zig-pro-svg";

const OpenedSideMenuContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [qrcode, setQrcode] = useState("");
  const { linksVisible } = (state: RootState) => state.sideMenu;

  const handleSocialHoverStart = (qr_code: string) => {
    setIsHovered(true);
    setQrcode(qr_code);
  };

  const handleSocialHoverEnd = () => {
    setIsHovered(false);
    setQrcode("");
  };

  const images = Array.from({ length: 24 }, (_, index) => index);

  return (
    <div className="flex-grow px-2 lg:px-4 2xl:px-6 3xl:px-10 pt-2 lg:pt-4 2xl:pt-6  3xl:pt-10 pb-1 2xl:pb-3  3xl:space-y-8 flex flex-col justify-between">
      <div className="space-y-[24.44px] lg:space-y-[3.8dvh] 3xl:space-y-[4dvh] text-white">
        <ZigPro />
        {/* top left side links and countries  */}
        <div className="flex space-x-[105px] 4xl:justify-between 4xl: mr-10">

          {/* links  */}
          <div className="uppercase text-white text-[10px] tracking-[3px] space-y-[11.56px] lg:space-y-[1.9dvh] 3xl:space-y-[20.8px]  whitespace-nowrap">
            {proListing.map((item) => (
              <p key={item.id} className="opacity-50 hover:opacity-100 duration-300 transition-all cursor-pointer w-fit">
                {item.name}
              </p>
            ))}
          </div>

          {/* Top Countries  */}
          <div className="relative w-fit">
            <p className="absolute -right-1 -top-[25px] 3xl:-top-[30px] uppercase text-white sidemenu_font_size tracking_2">
              Top Countries
            </p>
            <div className="grid grid-cols-4 w-[140px] 3xl:w-[190px] h-full place-content-start justify-items-end gap-4">
              {/* {topCountriesQuery.data?.map((country: any) => (
                <img
                  key={country.id}
                  className="w-[13.89px] lg:w-[19.23px] 3xl:w-[25px] h-auto cursor-pointer"
                  src={country.app_icon}
                  alt={country.name}
                />
              ))} */}
            </div>
          </div>
        </div>

        {/* bottom left side links with icons and qr code  */}
        <div className="flex justify-between items-end">
          {/* links and icons  */}
          <AnimatePresence initial={false}>
            {linksVisible && (
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{
                  clipPath: "inset(0 0 0 0)",
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                exit={{ clipPath: "inset(100% 0 0 0)" }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="sidemenu_line_spacing -translate-x-[10px] overflow-hidden"
              >
                {userLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    className="flex w-fit items-center lg:space-x-[18.46px] 3xl:space-x-[24px] opacity_hover_animation"
                  >
              
                    <div className="w-[15.56px] lg:w-[21.54px] flex justify-center">
                  
                      {link.iconType === "svg" ? (
                        <img
                          src={link.icon}
                          alt={link.name}
                          className="w-auto h-[10.26px]"
                        />
                      ) : (
                        <>{link.icon}</>
                      )}
                    </div>

                  
                    <motion.div>
                      {link.separator ? (
                        <div className="text-white uppercase sidemenu_font_size tracking_2 flex items-center space-x-[13px]">
                          <p>{link.name}</p>
                          <div className="separator__width h-[7.89px] 3xl:h-[10.26px] 4xl:h-[12px] bg-white" />
                          <p>{link.altName}</p>
                        </div>
                      ) : (
                        <p className="text-white uppercase sidemenu_font_size tracking_2">
                          {link.name}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {/* qr code  */}
          {linksVisible && (
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <img
                    src={qrcode}
                    className="h-[100px] w-auto"
                    alt="qr code"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
      {/* footer  */}
      <footer className="flex justify-between items-center">
        {/* terms and privacy  */}
        <div className="text-white uppercase flex sidemenu_font_size tracking_2 space-x-[18.6px] items-center">
          <p className="opacity_hover_animation">terms</p>
          <div className="separator__width h-[7.89px] 3xl:h-[10.26px] 4xl:h-[12px] bg-white opacity-50" />
          <p className="opacity_hover_animation">privacy</p>
        </div>
        {/* social icons  */}
        <div className="flex space-x-2 3xl:space-x-3">
          {socialIcons.map((social) => (
            <div
              onMouseEnter={() =>
                social.qr_code ? handleSocialHoverStart(social.qr_code) : null
              }
              onMouseLeave={social.qr_code ? handleSocialHoverEnd : () => null}
              key={social.id}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="h-[13.64px] w-auto opacity_hover_animation"
              />
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default OpenedSideMenuContent;

// Data Arrays

interface SocialIcons {
  id: number;
  name: string;
  icon: string;
  qr_code: string;
}

const proListing = [
  { id: 1, name: "premium" },
  { id: 2, name: "featured" },
  { id: 3, name: "trending" },
  { id: 4, name: "popular" },
  { id: 5, name: "just for you" },
  { id: 6, name: "newly listed" },
  { id: 7, name: "ending soon" },
];

const userLinks = [
  {
    id: 1,
    name: "user id",
    altName: "account",
    icon: <UserSvg fill="#fff" className="w-auto h-[10.26px]" />,
    iconType: "react",
    separator: true,
  },
  {
    id: 2,
    name: "shopping bag",
    icon: <ZigProSell fill="#fff" className="w-auto h-[10.26px]" />,
    iconType: "react",
    separator: false,
  },
  {
    id: 3,
    name: "wish list",
    icon: "/assets/icons/Heart Favourite Red (Model).svg",
    iconType: "svg",
    separator: false,
  },
  {
    id: 4,
    name: "gift card",
    icon: "/assets/icons/gift-card.svg",
    iconType: "svg",
    separator: false,
  },
  {
    id: 5,
    name: "sell",
    icon: "/assets/icons/Zig SELL W.svg",
    iconType: "svg",
    separator: false,
  },
  {
    id: 6,
    name: "help & faq",
    icon: "/assets/icons/Help FAQ.svg",
    iconType: "svg",
    separator: false,
  },
  {
    id: 7,
    name: "newsroom",
    altName: "press",
    icon: "/assets/icons/Pressroom News.svg",
    iconType: "svg",
    separator: true,
  },
  {
    id: 8,
    name: "company",
    icon: "/assets/icons/Company.svg",
    iconType: "svg",
    separator: false,
  },
  {
    id: 9,
    name: "contact",
    icon: "/assets/icons/Contact.svg",
    iconType: "svg",
    separator: false,
  },
];

const socialIcons = [
  {
    id: 1,
    name: "telegram",
    icon: "/assets/icons/social/Telegram.svg",
    qr_code: "/assets/icons/qr_code/telegram_qr_code.svg",
  },
  {
    id: 2,
    name: "whatsapp",
    icon: "/assets/icons/social/Whatsapp.svg",
    qr_code: "/assets/icons/qr_code/whatsapp_qr_code.svg",
  },
  {
    id: 3,
    name: "youtube",
    icon: "/assets/icons/social/YouTube.svg",
    qr_code: "",
  },
  {
    id: 4,
    name: "vimeo",
    icon: "/assets/icons/social/Vimeo.svg",
    qr_code: "",
  },
  {
    id: 5,
    name: "x",
    icon: "/assets/icons/social/X.svg",
    qr_code: "",
  },
  {
    id: 6,
    name: "facebook",
    icon: "/assets/icons/social/Facebook.svg",
    qr_code: "",
  },
  {
    id: 7,
    name: "instagram",
    icon: "/assets/icons/social/Instagram.svg",
    qr_code: "",
  },
  {
    id: 8,
    name: "tiktok",
    icon: "/assets/icons/social/TikTok.svg",
    qr_code: "",
  },
  {
    id: 9,
    name: "pinterest",
    icon: "/assets/icons/social/Pinterest.svg",
    qr_code: "",
  },
];
