import React, { useContext } from "react";
import Navbar1 from "./components/Navbar";
import Body from "./components/Body";
import CardList from "./components/CardList";
import "./App.css";
import Footer from "./components/Footer";
import Signup from "./components/Singup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantProvider, RestaurantContext } from "./components/context";
import RestaurantHome from "./components/RestaurantHome";
import Login from "./components/Login";
import LoggenInTry from "./components/LoggenInTry";
import SellerRegisteration from "./components/SellerRegisteration";
import SellerLogin from "./components/SellerLogin";
import SellerDashboard from "./components/seller/SellerDashboard";
import SellerProfile from "./components/seller/SellerProfile";
import EditSellerProfile from "./components/seller/EditSellerProfile";

import Checkout from "./components/Checkout";
import Join from "./components/Join";
import SignUp from "./components/Singup";
import SellerNavbar from "./components/seller/SellerNavbar";
import { Navbar } from "react-bootstrap";
import Items from "./components/seller/Items";
import AddItems from "./components/seller/AddItems";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import OrderCards from "./components/OrderCards";
import OrderCardsSeller from "./components/seller/OrderCardsSeller";
function App() {
  return (
    <Router>
      <RestaurantProvider>
        <div className="App">
          <div className="container-fluid">
            <div id="top">
              <Switch>
                <Route
                  path="/restaurant"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <RestaurantHome />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/signup"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <SignUp />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/login"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <Login />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/logout"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <Logout />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/sellerlogin"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <SellerLogin />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/sellerorders"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <OrderCardsSeller />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/sellerdashboard"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <SellerDashboard />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/items"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <Items />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/additems"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <AddItems />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/sellerprofile"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <SellerProfile />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/editsellerprofile"
                  exact
                  render={() => (
                    <React.Fragment>
                      <SellerNavbar />
                      <EditSellerProfile />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/checkout"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <Checkout />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/sellerregisteration"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <SellerRegisteration />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/"
                  exact
                  render={() => (
                    <React.Fragment>
                      <Navbar1 />
                      <Body />
                      <CardList />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/restaurant"
                  render={(props) => (
                    <React.Fragment>
                      <Navbar1 />
                      <RestaurantHome />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/profile"
                  exact
                  render={(props) => (
                    <React.Fragment>
                      <Navbar1 />
                      <Profile />
                    </React.Fragment>
                  )}
                />
                <Route
                  path="/editprofile"
                  exact
                  render={(props) => (
                    <React.Fragment>
                      <Navbar1 />
                      <EditProfile />
                    </React.Fragment>
                  )}
                />

                <Route
                  path="/orders"
                  exact
                  render={(props) => (
                    <React.Fragment>
                      <Navbar1 />
                      <OrderCards />
                    </React.Fragment>
                  )}
                />
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </RestaurantProvider>
    </Router>
  );
}

export default App;
