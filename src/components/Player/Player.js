import React, { useState } from 'react';
let sound = new Audio("./sound/pokemon_opening.mp3");

const Player = (props) => {
  const [playing, setPlaying] = useState(false);

  const play = () => {
    // setPlaying(!playing);
    // playing ? sound.pause() : sound.play();
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