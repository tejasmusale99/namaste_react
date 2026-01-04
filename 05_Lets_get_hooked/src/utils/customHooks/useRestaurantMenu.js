import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuDetails, setMenuDetails] = useState(null);

  const menuUrl =
    "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.0051498&lng=73.7676967&restaurantId=";
    
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(menuUrl + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setMenuDetails(jsonData);
  };
  return menuDetails;
};

export default useRestaurantMenu;
