import React, { useContext } from "react";
import { RestaurantContext } from "./context";
import MediaCard from "./Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function CardList() {
  // const { list, get } = useContext(RestaurantContext);
  // const [restaurant, setRestaurant] = list;
  const restaurant = useSelector((state) => state.restaurant);
  console.log(restaurant);
  return (
    <>
      <div class="row d-flex">
        {restaurant.map((res) => (
          // <Link to={`/restaurant/${res._id}`}>

          <MediaCard res={res} />
          // </Link>
        ))}
      </div>
    </>
  );
}

export default CardList;
