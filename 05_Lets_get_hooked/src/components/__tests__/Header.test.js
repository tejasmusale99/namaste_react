import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import "@testing-library/jest-dom";

jest.mock("../../utils/constants.js", () => ({
  LOGO_URL: "test-logo.png",
}));

import Header from "../Header";

it("should load header component with logo", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});

it("should load header component with cart count", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/0/)).toBeInTheDocument();
});

it("should change login to logout on click", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  fireEvent.click(screen.getByRole("button", { name: /log in/i }));
  expect(screen.getByRole("button", { name: /log out/i })).toBeInTheDocument();
});
