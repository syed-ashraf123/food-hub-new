import React, { createContext, useState } from "react";
export const RestaurantContext = createContext();
export const RestaurantProvider = (props) => {
  const [restaurant, setRestaurant] = useState([]);
  const reqUrl = "http://localhost:4000";
  const getRestaurant = async (area) => {
    const response = await fetch(reqUrl + `?area=${area}`);
    console.log(reqUrl + `?area=${area}`);
    const res = await response.json();
    console.log(res);
    setRestaurant(res);
  };
  return (
    <RestaurantContext.Provider
      value={{ list: [restaurant, setRestaurant], get: getRestaurant }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};
