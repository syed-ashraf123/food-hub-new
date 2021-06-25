import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, removefromcart, clearcart } from "../action/action";
import createTypography from "@material-ui/core/styles/createTypography";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 140,
  },
});

export default function ItemsCard({ item, res }) {
  const cart = useSelector((state) => state.cart);
  console.log("INcar  ", cart);
  const classes = useStyles();

  const dispatch = useDispatch();
  function addtocartcheck(item, res) {
    if (JSON.parse(localStorage.getItem("restaurant")) === null) {
      localStorage.setItem("restaurant", JSON.stringify(res));
      dispatch(clearcart());
      dispatch(addtocart(item));
    }
    if (JSON.parse(localStorage.getItem("restaurant"))._id != res._id) {
      localStorage.setItem("restaurant", JSON.stringify(res));
      dispatch(clearcart());
      dispatch(addtocart(item));
    } else {
      dispatch(addtocart(item));
    }
  }

  function removetocartcheck(item, res) {
    dispatch(removefromcart(item.name));
  }
  return (
    <div className="col-lg-4 d-flex  justify-content-around mt-5">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"http://localhost:4000/images/" + item.pic}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => addtocartcheck(item, res)}
            size="small"
            color="primary"
          >
            Add to Cart
          </Button>
          {cart.includes(item) ? (
            <Button
              onClick={() => removetocartcheck(item, res)}
              size="small"
              color="primary"
            >
              Remove from Cart
            </Button>
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
}
