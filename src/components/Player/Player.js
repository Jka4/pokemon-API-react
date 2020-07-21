import React, { useState, useEffect } from 'react';

const Player = () => {
  const [playing, setPlaying] = useState(false);
  let sound = new Audio("./sound/pokemon_opening.mp3");

  // TODO some trouble with player
  useEffect(() => {
    // sound.play()
  }, []);

  const play = () => {
    setPlaying(!playing);
    playing ? sound.pause() : sound.play();
  };

  return (
    <div className='player'>
      <button className='playButton' onClick={play}>
        {playing ? "PAUSE" : "PLAY"}
      </button>
    </div>
  );
}

export default Player;