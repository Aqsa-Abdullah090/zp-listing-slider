import SidebarBtn from "../sidebar/sidebar-btn";

function AbsoluteSidebarBtn({ toggleSidebar }) {
  return (
    <div className="-translate-y-1/2 top-1/2 z-10 absolute w-fit">
      <SidebarBtn variant="absolute" page="home" toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default AbsoluteSidebarBtn;
