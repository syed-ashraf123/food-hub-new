import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [name, setName] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  const [address, setAddress] = useState("Loading...");
  const res = JSON.parse(localStorage.getItem("restaurant"));
  console.log(res);

  useEffect(() => {
    // if (!sign_in) {
    //   <Redirect to="/sellerdashboard" />;
    // }

    console.log(localStorage.getItem("user-auth-token"));
    if (
      localStorage.getItem("user-auth-token") != null ||
      localStorage.getItem("restaurant") != null
    ) {
      const token = localStorage.getItem("user-auth-token");
      let config = {
        headers: {
          "user-auth-token": token,
        },
      };
      Axios.get("http://localhost:4000/userdetails", config)
        .then((response) => {
          console.log(response);
          console.log(response.data.msg);
          setName(response.data.msg.name);
          setEmail(response.data.msg.email);
          setAddress(response.data.msg.address);

          //   setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          //console.log(error.response.data.msg);
          //   setStatus(error.response.data.msg);

          window.scrollTo(0, 0);
        });
    }
  }, []);

  const totalprice = cart
    .map((element) => parseInt(element.price))
    .reduce((a, b) => a + b, 0);

  const sendorder = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("user-auth-token");
    let config = {
      headers: {
        "user-auth-token": token,
      },
    };
    Axios.post("http://localhost:4000/order", [cart, res], config);
  };

  console.log(totalprice);
  return (
    <div className="ml-5 mr-5">
      {localStorage.getItem("user-auth-token") ? null : (
        <Redirect to="/login" />
      )}
      {localStorage.getItem("restaurant") ? null : <Redirect to="/login" />}

      <div className="py-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={"http://localhost:4000/images/" + res.thumbnail[0]}
          alt=""
          width={250}
          height={200}
        />
        <h2>{res.restaurantName}</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap's form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">
              {cart.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {cart.map((obj) => (
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{obj.name}</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">{obj.price}</span>
              </li>
            ))}

            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>{totalprice}</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            {/* <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder
                  defaultValue
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder
                  defaultValue
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div> */}
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={name}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                required
              />
            </div>

            <hr className="mb-4" />
            <Button
              variant="primary"
              onClick={(e) => {
                sendorder(e);
              }}
            >
              Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
