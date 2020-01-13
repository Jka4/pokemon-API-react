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
      <div className='topLine' data-aos='fade-up' data-aos-delay='100'>
        <Player />
        <SearchInput />
      </div>
    );
  }
}

export default HeaderLine;
