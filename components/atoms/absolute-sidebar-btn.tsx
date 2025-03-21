import { useEffect, useState } from "react";
import SidebarBtn from "./sidebar-btn";

function AbsoluteSidebarBtn() {
  

  return (
    <div className={`-translate-y-1/2 top-1/2 z-10 absolute w-fit}`}>
      <SidebarBtn variant="absolute" page="home" />
    </div>
  );
}

export default AbsoluteSidebarBtn;