import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import { Skeleton } from 'antd';

const RestaurantDetails = () => {
  const { resId } = useParams();

  const menuDetails = useRestaurantMenu(resId);

  const info = menuDetails?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    menuDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  // console.log(itemCards);

  if (menuDetails == null) {
    return <Skeleton avatar paragraph={{ rows: 4 }} />
  }

  return (
    <div className="restaurant-page">
      {/* Restaurant Header */}
      <h1 className="restaurant-name">{info?.name}</h1>

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

      <h2 className="section-title">
        Recommended {"(" + itemCards?.length + ")"}
      </h2>

      {itemCards.map((menuItems) => {
        return (
          <div key={menuItems?.card?.info?.id} className="menu-item">
            <div className="menu-left">
              <h3>{menuItems?.card?.info?.name}</h3>
              <p className="price">
                {"₹" + menuItems?.card?.info?.price / 100}
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
      })}
    </div>
  );
};

export default RestaurantDetails;
