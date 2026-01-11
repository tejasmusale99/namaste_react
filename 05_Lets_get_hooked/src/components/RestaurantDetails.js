import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import { Skeleton } from "antd";
import Restaurantcategory from "./Restaurantcategory";

const RestaurantDetails = () => {
  const { resId } = useParams();

  const menuDetails = useRestaurantMenu(resId);

  const info = menuDetails?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    menuDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  // console.log(
  //   menuDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards
  // );

  const RestaurantItemCategories =
    menuDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (category) => {
        return (
          category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(RestaurantItemCategories);

  if (menuDetails == null) {
    return <Skeleton avatar paragraph={{ rows: 4 }} />;
  }

  return (
    <div className="restaurant-page">
      <h1 className="restaurant-name">{info.name}</h1>
      <div className="restaurant-info-card">
        <div className="rating-row">
          <span className="rating">
            ⭐ {info?.avgRatingString} {"(" + info?.totalRatingsString + ")"}
          </span>
          <span className="price">{info?.costForTwoMessage}</span>
        </div>
        <p className="category">{" " + info?.cuisines}</p>
        <div className="outlet-time">
          <p>
            <strong>Outlet:</strong> {info?.locality}
          </p>
          <p>
            <strong>{info?.sla?.slaString}</strong>
          </p>
        </div>
      </div>

      {RestaurantItemCategories.map((item) => {
        // console.log(item.card.card.itemCards[0].card.info.name);
        return <Restaurantcategory key={item.card.card.title} item={item} />;
      })}
    </div>
  );
};

export default RestaurantDetails;
