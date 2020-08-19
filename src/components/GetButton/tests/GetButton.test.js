import React from "react";
import GetButton from "@GetButton";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

describe("GetButton", () => {
  it("GetButton renders correctly", async () => {
    const tree = renderer
      .create(
        <Router>
          <GetButton />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
