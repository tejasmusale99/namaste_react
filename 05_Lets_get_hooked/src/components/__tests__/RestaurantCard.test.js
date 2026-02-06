import { render, screen } from "@testing-library/react";
import RestaurantCard, { OfferRestaurantCard } from '../RestaurantCard'
import "@testing-library/jest-dom";
import resMockData from "../__mocks__/resMock.json"

it("should load restaurent card component with restro name", ()=>{
    render(<RestaurantCard res={{ info: resMockData }} />) 

    const ResCardName = screen.getByText('Pizza Hut')

    expect(ResCardName).toBeInTheDocument();
})

it("should load restaurent component with promoted label", ()=>{
      // created enhanced component using HOC
  const OfferCard = OfferRestaurantCard(RestaurantCard);

  render(<OfferCard res={{ info: resMockData }} />);

  // offer label assertion
  const offerText = screen.getByText(resMockData.aggregatedDiscountInfoV3.header);
  expect(offerText).toBeInTheDocument();
})