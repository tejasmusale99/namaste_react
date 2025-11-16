import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(resList);

  return (
    <div className="body-container">
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants" />
        <button>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
           const filtredLisdt = listOfRestro.filter((res)=>{
              console.log(res.info.avgRating)
              return res.info.avgRating > 4
            });
            setListOfRestro(filtredLisdt)
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
  );
};

export default Body;
