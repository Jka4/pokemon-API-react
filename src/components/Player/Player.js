import React from "react";
import useSound from "use-sound";

import "./styles/style.scss";

const soundUrl =
  "https://raw.githubusercontent.com/Jka4/pokemon-API-react/master/public/sound/pokemon_opening.mp3";

const Player = (props) => {
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  const playPause = () => {
    isPlaying ? stop() : play();
  };

  return (
    <div className="player">
      <button className="playButton" onClick={playPause}>
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
};

export default Player;
