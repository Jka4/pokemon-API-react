import React from "react";
import useSound from "use-sound";
import { Button } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Tooltip from "@material-ui/core/Tooltip";

import "./styles/style.scss";

const Player: React.FC = () => {
  const [play, { stop, isPlaying }] = useSound(
    `${process.env.PUBLIC_URL}/sound/pokemon_opening.mp3`
  );

  const playPause = () => {
    isPlaying ? stop() : play();
  };

  return (
    <div className="player">
      <Tooltip
        title="Pokemon opening song (rus)"
        aria-label="Pokemon opening song (rus)"
        enterDelay={500}
        leaveDelay={200}
        arrow
      >
        <Button
          onClick={playPause}
          className="playButton"
          variant="contained"
          color="secondary"
        >
          {isPlaying ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
        </Button>
      </Tooltip>
    </div>
  );
};

export default Player;
