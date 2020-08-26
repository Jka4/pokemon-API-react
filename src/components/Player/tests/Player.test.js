import React from "react";
import Player from "@Player";
import renderer from "react-test-renderer";

describe("Player", () => {
  it("Player renders correctly", async () => {
    const tree = renderer.create(<Player />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
