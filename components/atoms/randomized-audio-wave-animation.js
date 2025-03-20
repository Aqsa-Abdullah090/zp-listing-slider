import clsx from "clsx";
import { useState } from "react";
// import "./style.scss";

const RandomizedAudioWaveAnimation = () => {
  const [isMuted, setIsMuted] = useState(true); // ✅ Removed <boolean>

  return (
    <div
      className={clsx(
        "audio__wave__animation__wrapper z-50",
        isMuted ? "opacity-25" : "opacity-100"
      )}
      onClick={() => setIsMuted((prev) => !prev)}
    >
      <ul className="bars">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RandomizedAudioWaveAnimation;

