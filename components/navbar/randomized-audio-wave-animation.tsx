import clsx from "clsx";
import { useState } from "react";

const RandomizedAudioWaveAnimation = (
  {
    //   toggleMute,
    //   isMuted,
    // }: {
    //   toggleMute?: boolean;
    //   isMuted?: boolean; // temporaryily defined types here with optional
  }
) => {
  const [isMuted, setIsMuted] = useState<boolean>(true); // temporary state
  return (
    <div
      className={clsx(
        "audio__wave__animation__wrapper  z-50",
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
