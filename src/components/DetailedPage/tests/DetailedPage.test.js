import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { setDelailedPageData } from "@APIutils";
import DetailedPage from "@DetailedPage";
import renderer from "react-test-renderer";

it("DetailedPage renders correctly", async () => {
  await setDelailedPageData(1);

  const tree = renderer
    .create(
      <Router>
        <DetailedPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Fetch detailed page", async () => {
  await setDelailedPageData(1);
  render(
    <Router>
      <DetailedPage />
    </Router>
  );

  const detailedPage = await screen.findByTestId("detailedPageTest");

  expect(detailedPage).toHaveTextContent("bulbasaur");
  expect(detailedPage).toHaveTextContent("Abilities");
  expect(detailedPage).toHaveTextContent("Stats");
  expect(detailedPage).toHaveTextContent("front_default");
  expect(detailedPage).toHaveTextContent("back_default");
});
