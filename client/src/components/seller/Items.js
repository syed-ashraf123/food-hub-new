import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { itemsfetchedsuccess, itemsfetch } from "../../action/action";
const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 170,
  },
});
export default function Items() {
  const dispatch = useDispatch();
  // const [itemss, setItems] = useState([]);
  const classes = useStyles();
  const items_state = useSelector((state) => state.items_state);
  const item = useSelector((state) => state.items);
  // setItems(item);
  console.log("Inside fetch state", item);
  useEffect(() => {
    if (!items_state) {
      try {
        if (localStorage.getItem("seller-auth-token") != null) {
          const token = localStorage.getItem("seller-auth-token");
          dispatch(itemsfetch(token));
          dispatch(itemsfetchedsuccess());
        }

        //   setStatus(error.response.data.msg);
      } catch (error) {
        console.log(error);
        window.scrollTo(0, 0);
        // setStatus(error.response.data.msg);
      }
    }
  }, []);

  return (
    <div className="row">
      {item.map((items) => (
        <div className="col-lg-4 d-flex  justify-content-around mt-5">
          <div className="mt-5">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={"http://localhost:4000/images/" + items.pic}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {items.description}{" "}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {items.price}
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
