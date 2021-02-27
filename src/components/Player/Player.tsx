import React, { useState } from 'react';
import useSound from 'use-sound';
import { Button } from '@material-ui/core';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

const Player: React.FC = () => {
  const [play, { stop, isPlaying }] = useSound(`${process.env.PUBLIC_URL}/sound/pokemon_opening.mp3`);
  const [isPlay, setIsPlay] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      stop();
      setIsPlay(false);
    } else {
      play();
      setIsPlay(true);
    }
  };

  return (
    <Button onClick={playPause} variant="contained" color="secondary">
      {isPlay ? <PauseCircleFilledIcon /> : <PlayCircleFilledIcon />}
    </Button>
  );
};

export default Player;
