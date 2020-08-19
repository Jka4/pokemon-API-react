import React from "react";
import MainContainer from "@MainContainer";
import renderer, { act, cleanup } from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

describe("MainContainer", () => {
  it("MainContainer renders correctly", async () => {
    const tree = renderer
      .create(
        <Router>
          <MainContainer />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
