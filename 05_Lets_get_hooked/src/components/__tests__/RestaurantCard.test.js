import { render, screen } from "@testing-library/react";
import RestaurantCard from '../RestaurantCard'
import "@testing-library/jest-dom";
import resMockData from "../__mocks__/resMock.json"

it("should load restaurent card component with restro name", ()=>{
    render(<RestaurantCard res={{ info: resMockData }} />) 

    const ResCardName = screen.getByText('Pizza Hut')

    expect(ResCardName).toBeInTheDocument();
})