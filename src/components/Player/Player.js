import React from 'react';
import './styles/style.scss';
import useSound from 'use-sound';

const soundUrl = "/sound/pokemon_opening.mp3";

const Player = () => {
  const [play, { stop, isPlaying }] = useSound(soundUrl);

  const playPause = () => {
    isPlaying ? stop() : play();
  }

  return (
    <div className='player'>
      <button className='playButton' onClick={playPause}>
        {isPlaying ? "PAUSE" : "PLAY"}
      </button>
    </div >
  );
}

export default Player;


