import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MockData from "../__mocks__/fetchResMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../utils/customHooks/useOnlineOffline", () => {
  return jest.fn(() => true);
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MockData),
  })
);

it("should render the body component", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  const searchBtn = await screen.findByRole("button", {
    name: /search/i,
  });

  expect(searchBtn).toBeInTheDocument();
});
