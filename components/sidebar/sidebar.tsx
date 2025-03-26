import OpenedSideMenuContent from "@/components/sidebar/opened-side-menu-content";
import VerticalMarquee from "@/components/sidebar/vertical-marquee";
import clsx from "clsx";

const Sidebar = ({ open, setSidebarOpen }: { open: boolean, setSidebarOpen: (open: boolean) => void }) => {
  return (
    <>
      <div
        className={clsx(
          "backdrop-blur-xl bg-black/50 w-[50vw] h-[80vh] flex justify-between transition-all duration-500 ",
          open
            ? "translate-x-0"
            : "-translate-x-[150vw] lg:-translate-x-[50vw]",
          open
            ? "fixed h-[100dvh] z-20"
            : "absolute h-[90dvh] z-20"
        )}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside sidebar from closing it
      >
        <OpenedSideMenuContent linksVisible={true} />
        <div className="w-[44.17%] pr-2 lg:pr-4 2xl:pr-6">
          <p className="absolute text-[10px] tracking-[3px] uppercase origin-left w-fit rotate-90 h-fit text-white whitespace-nowrap lg:-translate-x-[15px] 3xl:-translate-x-[27px] lg:translate-y-[10px] 3xl:translate-y-[20px]">
            Just for you
          </p>
          <VerticalMarquee />
        </div>
      </div>

      {/* Overlay (clicking here will close the sidebar) */}
      {open && (
        <div
          aria-label="overlay"
          className="w-[100vw] h-[100dvh] z-10 fixed"
          onClick={() => setSidebarOpen(false)} // Close sidebar on click
        />
      )}
    </>
  );
};


export default Sidebar;


