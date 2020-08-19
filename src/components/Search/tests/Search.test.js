import React from "react";
import { render } from "@testing-library/react";
import Search from "@Search";
import renderer from "react-test-renderer";

describe("SearchInput", () => {
  describe("SearchInput", () => {
    test("renders Search component", () => {
      render(<Search />);
    });
  });

  it("Search renders correctly", async () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
