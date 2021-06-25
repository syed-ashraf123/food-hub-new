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
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function OrderCards() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("seller-auth-token") != null) {
      const token = localStorage.getItem("seller-auth-token");
      let config = {
        headers: {
          "user-auth-token": token,
        },
      };
      Axios.get("http://localhost:4000/sellerorder", config)
        .then((response) => {
          console.log(response.data.orders);
          setOrders(response.data.orders);

          //   setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.msg);
          //   setStatus(error.response.data.msg);

          window.scrollTo(0, 0);
        });
    }
  }, []);
  return (
    <>
      <div class="row d-flex">
        {orders.map((order) => (
          <div className="ml-5 mt-5">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
