import React from "react";
import ErrorPage from "@ErrorPage";
import renderer from "react-test-renderer";

describe("ErrorPage", () => {
  it("ErrorPage renders correctly", async () => {
    const tree = renderer.create(<ErrorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
