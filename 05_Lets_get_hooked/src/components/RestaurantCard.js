import {cdnUrl} from '../utils/constants.js'

const RestaurantCard = (props) => {
  console.log(props.res.info)
  const {name,avgRating,cuisines,costForTwo,sla,cloudinaryImageId,aggregatedDiscountInfoV3} = props.res.info

  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img
          src={cdnUrl + cloudinaryImageId}
          alt="The Spice Hub"
        />
        {aggregatedDiscountInfoV3?.header&& <span className="discount">{aggregatedDiscountInfoV3?.header} </span> } 
        </div>
      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>
        <p className="cuisine">{cuisines}</p>
        <div className="card-footer">
          <span className="rating">⭐ {avgRating}</span>
          <span className="delivery-time">{sla.deliveryTime} mins</span>
          <span className="cost">{costForTwo} </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;