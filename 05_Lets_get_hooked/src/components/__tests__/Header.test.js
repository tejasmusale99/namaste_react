import { MemoryRouter, BrowserRouter} from "react-router-dom";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import "@testing-library/jest-dom";

jest.mock("../../utils/constants.js", () => ({
  logoUrl: "test-logo.png",
}));

// Silence React Router warnings
beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(() => {
  console.warn.mockRestore();
});

it("it should load header component with logo", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  // check logo exists
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toBeInTheDocument();
});

it("it should load header component with log in button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );


  const cartText = screen.getByText(/0/);
  expect(cartText).toBeInTheDocument();
});

it("it should load header component and change log in to logout onClick", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );


  const LogInButton = screen.getByRole("button", {name:/Log In/i});

  fireEvent.click(LogInButton)

  const LogOutButton = screen.getByRole("button", {name:/Log out/i});

  expect(LogOutButton).toBeInTheDocument();
});
