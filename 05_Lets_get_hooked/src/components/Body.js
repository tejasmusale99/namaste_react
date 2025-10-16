import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";


const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
        />
        <button>Search</button>
      </div>

      <div className="restaurants-container">
        {/* <RestaurantCard resName="The Spice Hub" cuisine="Indian, Chinese" rating="4.4" delTime="20-30" cost="500"/> */}
        {
          resList.map((res,id)=>{
            return <RestaurantCard res={res} key={id}/>
          })
        }
      </div>
    </div>
  );
};


export default Body;