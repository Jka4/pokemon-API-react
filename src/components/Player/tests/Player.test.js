import React from "react";
import { render } from "@testing-library/react";
import Player from "@Player";
import renderer from "react-test-renderer";

describe("Player", () => {
  test("renders learn react link", () => {
    const { getByText } = render(<Player />);
    const linkElement = getByText(/Play/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Player renders correctly", async () => {
    const tree = renderer.create(<Player />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
