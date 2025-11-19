import RestaurantCard from "./RestaurantCard";
// import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9728896&lng=73.8229516&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await fetchData.json();
    // console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestro(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


if(listOfRestro.length==0){
  return(
    <div className="loader"></div>
  )
}
  return (
    <div className="body-container">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants" />
        <button>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
            const filtredLisdt = listOfRestro.filter((res) => {
              // console.log(res.info.avgRating);
              return res.info.avgRating > 4;
            });
            setListOfRestro(filtredLisdt);
          }}
        >
          Top Rated ⭐
        </button>
      </div>
      <div className="restaurants-container">
        {/* <RestaurantCard resName="The Spice Hub" cuisine="Indian, Chinese" rating="4.4" delTime="20-30" cost="500"/> */}
        {listOfRestro.map((res, id) => {
          return <RestaurantCard res={res} key={id} />;
        })}
      </div>
    </div>
  )
};

export default Body;
