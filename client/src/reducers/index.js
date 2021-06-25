import restaurantReducer from "./restaurant";
import loggedReducer from "./logged";
import itemssuccessReducer from "./itemssuccess";
import itemsReducer from "./items";
import cartReducer from "./cart";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  restaurant: restaurantReducer,
  sign_in: loggedReducer,
  items: itemsReducer,
  items_state: itemssuccessReducer,
  cart: cartReducer,
});
export default allReducers;
