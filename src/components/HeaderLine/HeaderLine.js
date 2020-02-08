import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import Player from "../Player/Player";

class HeaderLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsPage: ""
    };
  }

  render() {
    return (
      <div className='topLine'>
        <Player />
        <SearchInput />
      </div>
    );
  }
}

export default HeaderLine;
