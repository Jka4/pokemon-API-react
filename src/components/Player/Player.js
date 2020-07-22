import React, { useState, useEffect } from 'react';

const sound = new Audio("./sound/pokemon_opening.mp3");

const Player = () => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    !playing ? sound.pause() : sound.play();
  });

  return (
    <div className='player'>
      <button className='playButton' onClick={() => setPlaying(!playing)}>
        {playing ? "PAUSE" : "PLAY"}
      </button>
    </div >
  );
}

export default Player;