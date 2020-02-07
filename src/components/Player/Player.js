import React from "react";
import store from "../../store";

let sound = new Audio("./sound/pokemon_opening.mp3");

class Player extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  play = () => {
    let playing = store.getState().playing;

    store.dispatch({ type: "PLAY_PAUSE" });

    if (playing) {
      sound.pause();

      return false;
    } else {
      sound.play();

      return true;
    }
  };

  render() {
    let playing = store.getState().playing;

    return (
      <div className='player'>
        <button className='playButton' onClick={this.play}>
          {playing ? "PAUSE" : "PLAY"}
        </button>
      </div>
    );
  }
}

export default Player;
