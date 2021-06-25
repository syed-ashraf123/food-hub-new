import React, { useContext } from "react";
import food from "./food.jpg";
import "./body.css";
import Typography from "@material-ui/core/Typography";
import { RestaurantContext } from "./context";
import DropDown from "./DropDown";
import BodyMedia from "./BodyMedia";

function Body() {
  const { list, get } = useContext(RestaurantContext);
  const getRestaurant = get;
  window.scroll(0, 0);

  return (
    <div>
      <div className="row">
        <div className="col d-flex justify-content-around align-items-center">
          <div className="">
            <Typography variant="h5">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </Typography>
            <br />
            <Typography variant="h2">Food Hub</Typography>
          </div>

          <img
            src={food}
            className="img-fluid size d-none d-lg-block"
            alt="foood"
          />
        </div>
      </div>
      <div class="row d-flex">
        {[
          {
            link:
              "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
            name: "Order Food Online Now",
          },
          {
            link:
              "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
            name: "Go Out for a meal day",
          },
          {
            link:
              "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
            name: "Night - @life and Clubs",
          },

          {
            link:
              "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
            name: "Food Hub Membership",
          },
          {
            link:
              "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3NlYXJjaF9ob21lL0Zhc3RGb29kLmpwZw==",
            name: "Food Anytime Anywhere",
          },
          {
            link:
              "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3NrdS8wYmM5Y2ExOWEwMmUzYmQwM2YyMzk1YzhjZjhhM2UwYw==",
            name: "Breaskfast and Brunch",
          },
          {
            link:
              "https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3NrdS9hODRkYzY5Y2VlMzA3ZmJhNGY1NTliMWU4MjVkOGU5ZQ==",
            name: "American Outdoors Hub",
          },

          {
            link:
              "https://b.zmtcdn.com/data/pictures/6/19513136/9125769a74a2cc6ed895e2e6846d1e62_o2_featured_v2.jpg?output-format=webp",
            name: "Chinese - China Town",
          },
        ].map((res) => (
          // <Link to={`/restaurant/${res._id}`}>
          <BodyMedia link={res.link} name={res.name} />
          // </Link>
        ))}
      </div>
      <center>
        <div className="row d-flex justify-content-center mt-5 mb-5">
          <div>
            <DropDown />

            <h2 className="mt-5 mb-5">Select your area to start ordering</h2>
            {/* <button onClick={getRestaurant}>Search</button> */}
          </div>
        </div>
      </center>
    </div>
  );
}

export default Body;
