import React from "react";
import App from "@App";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("App renders correctly", async () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
