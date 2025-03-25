import OpenedSideMenuContent from "@/components/sidebar/opened-side-menu-content";
import VerticalMarquee from "@/components/sidebar/vertical-marquee";
import clsx from "clsx";

const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <>
      <div
        className={clsx(
          "backdrop-blur-xl bg-black/50 w-[50vw] flex justify-between transition-all duration-500 ",
          open
            ? "translate-x-0"
            : "-translate-x-[150vw] lg:-translate-x-[50vw]",
          open
            ? "fixed h-[100dvh] z-20" // Use 'open' instead of undefined variable
            : "absolute h-[90dvh] z-20"
        )}
      >
        <OpenedSideMenuContent linksVisible={true} />


        {/* Vertical marquee */}
        <div className="w-[44.17%] pr-2 lg:pr-4 2xl:pr-6">
          <p className="absolute sidemenu_font_size tracking_2 uppercase origin-left w-fit rotate-90 h-fit text-white whitespace-nowrap lg:-translate-x-[15px] 3xl:-translate-x-[27px] lg:translate-y-[10px] 3xl:translate-y-[20px]">
            Just for you
          </p>
          <VerticalMarquee />
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div aria-label="overlay" className="w-[100vw] h-[100dvh] z-10 fixed" />
      )}
    </>
  );
};

export default Sidebar;

