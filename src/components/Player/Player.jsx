import React from "react";
import useSound from "use-sound";
import { Button } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

import "./styles/style.scss";

const soundUrl =
  "https://raw.githubusercontent.com/Jka4/pokemon-API-react/master/public/sound/pokemon_opening.mp3";

const Player = () => {
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  const playPause = () => {
    isPlaying ? stop() : play();
  };

  return (
    <div className="player">
      <Button
        onClick={playPause}
        className="playButton"
        variant="contained"
        color="secondary"
      >
        {isPlaying ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
      </Button>
    </div>
  );
};

export default Player;
