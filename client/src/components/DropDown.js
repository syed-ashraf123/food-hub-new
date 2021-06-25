import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RestaurantContext } from "./context";
import { useSelector, useDispatch } from "react-redux";
import { get_restaurant } from "../action/action";
function DropDown() {
  // const get_restaurant = useSelector((state) => state.get_restaurant);
  const dispatch = useDispatch();
  // const { list, get } = useContext(RestaurantContext);
  // const getRestaurant = get;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.target.value);
  };
  const place = (area) => {
    dispatch(get_restaurant(area));
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            place("GomtiNagar");
          }}
        >
          GomtiNagar
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            place("HazratGanj");
          }}
        >
          HazratGanj
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            place("Adil Nagar");
          }}
        >
          Adil Nagar
        </MenuItem>
      </Menu>
    </div>
  );
}
export default DropDown;
