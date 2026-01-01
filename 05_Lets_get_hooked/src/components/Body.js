import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filtredRestro, setFiltredRestro] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);


const fetchData = async () => {
  const res = await fetch(
    "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&page_type=DESKTOP_WEB_LISTING"
  );

  const json = await res.json();

  const restaurantCard = json?.data?.cards?.find(
    (card) =>
      card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  const restaurants =
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  setListOfRestro(restaurants);
  setFiltredRestro(restaurants);
};


  // const fetchData = async () => {
  //   const fetchData = await fetch(
  //     "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const jsonData = await fetchData.json();
  //   setListOfRestro(
  //     jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        // ?.restaurants
  //   );
  //   setFiltredRestro(
  //     jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // };

      if (listOfRestro?.length === 0) {
    return (
      <div className="shimmer-wrapper">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="body-container">
      <div className="search-filter-row">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log(searchText);
              const filtredList = listOfRestro.filter((restro) => {
                return restro.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFiltredRestro(filtredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="top-rated-filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filtredLisdt = listOfRestro?.filter((res) => {
                // console.log(res.info.avgRating);
                return res.info.avgRating > 4;
              });
              setListOfRestro(filtredLisdt);
            }}
          >
            Top Rated ⭐
          </button>
        </div>
      </div>

      <div className="restaurants-container">
        {/* <RestaurantCard resName="The Spice Hub" cuisine="Indian, Chinese" rating="4.4" delTime="20-30" cost="500"/> */}
        {filtredRestro?.map((res) => {
          return (<Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard res={res} /></Link>)
        })}
      </div>
    </div>
  );
};

export default Body;
