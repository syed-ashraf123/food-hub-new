import React, { useState, useEffect } from "react";
import "./RestaurantHome.css";
import Typography from "@material-ui/core/Typography";
import ItemsCard from "./ItemsCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, removefromcart } from "../action/action";
import { Button } from "@material-ui/core";

function RestaurantHome(props) {
  const dispatch = useDispatch();
  var res = localStorage.getItem("restauranthome");
  if (res === null) {
    return <Redirect to="/" />;
  }

  res = JSON.parse(res);

  const items = res.items;
  // const reqUrl = "http://localhost:4000/items";
  // const [resItem, setResItem] = useState([]);
  // useEffect(() => {
  //   response();
  // }, []);
  // const response = async () => {
  //   const response = await fetch(reqUrl);
  //   const res = await response.json();
  //   console.log(res);
  //   setResItem(res);
  // };
  // const getRestaurant = async (area) => {
  //   const response = await fetch(reqUrl + `?area=${area}`);
  //   console.log(reqUrl + `?area=${area}`);
  //   const res = await response.json();
  //   console.log(res);
  //   setRestaurant(res);
  // };
  const slideImages = [
    "http://localhost:4000/images/" + res.thumbnail[0],
    "http://localhost:4000/images/" + res.thumbnail[1],
    "http://localhost:4000/images/" + res.thumbnail[2],
  ];
  console.log(res.items);

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 d-flex">
          <div id="sideborder" className="my-auto">
            <div className="pt-5">
              <Typography variant="h2" className="ml-3">
                {res.restaurantName}
              </Typography>
              <strong className="ml-4">{res.cruisine}</strong>
              <br />
              <strong className="ml-4">
                Minimum Order Rs. {res.minimumOrder}
              </strong>
              <br />
              <strong className="ml-4">Accepts UPI and Cash Payments</strong>
              <br />
              <br />
              <Typography variant="subtitle1" className="ml-4">
                {res.address}
              </Typography>
              <Typography variant="subtitle1" className="ml-4">
                Telephone {res.tel}
              </Typography>
              <Typography variant="subtitle1" className="ml-4">
                9:00 AM to 10:00 PM
              </Typography>
            </div>
          </div>
        </div>

        <>{}</>
        <div id="head" className="col-lg-6 col-sm-12 mt-5">
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div id="head" className="carousel-inner">
              <div className="carousel-item active">
                <img id="head" src={slideImages[0]} alt="Los Angeles" />
              </div>
              <div className="carousel-item">
                <img id="head" src={slideImages[1]} alt="Chicago" />
              </div>
              <div className="carousel-item">
                <img id="head" src={slideImages[2]} alt="New York" />
              </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        {console.log("Printing Res ", res.items)}
        {items.map((item) => (
          <ItemsCard item={item} res={res} />
        ))}
      </div>
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
}

export default RestaurantHome;
