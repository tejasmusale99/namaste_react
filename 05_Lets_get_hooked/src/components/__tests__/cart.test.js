import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantDetails from "../RestaurantDetails";
import fetchResDetails from "../__mocks__/fetchResDetails.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from '../../utils/store/appStore.js'
import Header  from "../Header.js";
import Cart from '../Cart.js'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fetchResDetails),
  }),
);

it("should load veg pizza items when accordion is clicked", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantDetails />
        <Cart />
      </Provider>
    </BrowserRouter>,
  );

  const accordionHeader = await screen.findByText("Veg Pizza");

  fireEvent.click(accordionHeader);

  const foodItems = await screen.findAllByTestId("foodItems");

  expect(foodItems.length).toBe(13);

  const addBtns = screen.getAllByRole("button", {name:/ADD +/i})

 fireEvent.click(addBtns[0])

 const oneCartItemAdded = screen.getByText("🛒 1")
 
 expect(oneCartItemAdded).toBeInTheDocument()

 fireEvent.click(addBtns[1])

 const twoCartItemAdded = screen.getByText("🛒 2")
 
 expect(twoCartItemAdded).toBeInTheDocument()

 const cartItems = screen.getAllByTestId("cartItem");
 expect(cartItems.length).toBe(2);

});
