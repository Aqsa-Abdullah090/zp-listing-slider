/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { useState } from "react";

function Heart() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={clsx(
        "absolute bottom-2 3xl:bottom-3 right-3 3xl:right-5 z-[2] transition-all duration-500 hover:scale-125 outline-none"
      )}
    >
      <img
        src={`/assets/icons/${
          liked
            ? "Heart Favourite Red (Model).svg"
            : "Heart Standard (Model).svg"
        }`}
        className="w-[19px] 3xl:w-[25px]"
        alt=""
      />
    </button>
  );
}
export default Heart;
