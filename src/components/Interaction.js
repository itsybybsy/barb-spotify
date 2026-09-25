import { useState } from "react";
import playHover from "../images/icons/player/play-hover.png";

function Interaction() {
  const [hoverImg, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {" "}
        {hoverImg && <img src={playHover} class="hover-play" alt="hover-btn" />}
      </div>
    </>
  );
}

export default Interaction;
