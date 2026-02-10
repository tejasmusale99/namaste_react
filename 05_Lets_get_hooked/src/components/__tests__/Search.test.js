import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
// import MockData from "../__mocks__/fetchResMock.json";
import MockData from "../__mocks__/mockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../utils/customHooks/useOnlineOffline", () => {
  return jest.fn(() => true);
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MockData),
  }),
);

it("should render the body component and test search component with restro cards", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );


 const searchInput = await screen.findByTestId("inputSearch");
const searchBtn = screen.getByRole("button", { name: /search/i });


  fireEvent.change(searchInput, {
    target: { value: "pizza" },
  });

  fireEvent.click(searchBtn);

  const cards = await screen.findAllByTestId("restroCard");
  expect(cards.length).toBe(3);
});
