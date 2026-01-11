import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import { Skeleton } from "antd";
// import CategoryItems from "./CategoryItems";
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

      {/* {itemCards.map((menuItems) => {
        return (
          <div key={menuItems?.card?.info?.id} className="menu-item">
            <div className="menu-left">
              <h3>{menuItems?.card?.info?.name}</h3>
              <p className="price">
                {menuItems?.card?.info?.price
                  ? "₹" + menuItems?.card?.info?.price / 100
                  : "₹" + menuItems?.card?.info?.defaultPrice / 100}
              </p>
              <p className="desc">{menuItems?.card?.info?.description}</p>
            </div>

            <div className="menu-right">
              <div className="img-wrapper">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                    menuItems?.card?.info?.imageId
                  }
                  alt="food"
                />
                <button className="add-btn">ADD</button>
              </div>
              <p className="customisable">Customisable</p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default RestaurantDetails;
