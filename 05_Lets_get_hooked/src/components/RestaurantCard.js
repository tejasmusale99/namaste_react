import { cdnUrl } from "../utils/constants.js";
// import "../../style.css"
const RestaurantCard = (props) => {
  // console.log(props.res.info)
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = props.res.info;

  return (
    <div className="restaurant-card">
      <div className="card-image">
        <img src={cdnUrl + cloudinaryImageId} alt="The Spice Hub" />
        {/* {aggregatedDiscountInfoV3?.header && <span className="discount">{aggregatedDiscountInfoV3?.header} </span> }  */}
        {/* {aggregatedDiscountInfoV3?.header === "ITEMS"?" ":<span className="discount">{aggregatedDiscountInfoV3?.header} </span>} */}
      </div>
      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>
        <p className="cuisine">{" " + cuisines}</p>
        <div className="card-footer">
          <span className="rating">⭐ {avgRating}</span>
          <span className="delivery-time">{sla.deliveryTime} mins</span>
          <span className="cost">{costForTwo} </span>
        </div>
      </div>
    </div>
  );
};

export const OfferRestaurantCard = (RestaurantCard) => {
  return (props) => {
    // console.log(props);
    const { aggregatedDiscountInfoV3 } = props?.res?.info;
    return (
  <div className="offer-card-wrapper">
        <div className="offer-badge">
          {aggregatedDiscountInfoV3?.header}
          {aggregatedDiscountInfoV3?.subHeader && (
            <span className="offer-sub">
              {aggregatedDiscountInfoV3.subHeader}
            </span>
          )}
        </div>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
