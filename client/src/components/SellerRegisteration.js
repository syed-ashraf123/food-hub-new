import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { Redirect } from "react-router";
import validator from "validator";
import FormData from "form-data";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://FoodHub.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root1: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SellerRegisteration() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [cruisine, setCruisine] = useState("");
  const [minimumOrder, setMinimumOrder] = useState("");
  const [tel, setTel] = useState("");
  const [status, registerStatus] = useState();
  const [success, setSuccess] = useState(false);
  const [hookthumbnail, sethookthunmbnail] = useState([]);
  const [hookid, sethookid] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      if (hookthumbnail.length == 3 && typeof hookid == "object") {
        register(e);
      } else {
        registerStatus("Please select pictures as mentioned!");
        window.scrollTo(0, 0);
      }
    } else {
      registerStatus("Enter valid Email!");
      window.scrollTo(0, 0);
    }
  };

  const register = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Password", password);
    formData.append("Restaurant_Name", restaurantName);
    formData.append("Address", restaurantAddress);
    formData.append("Cruisine", cruisine);
    formData.append("Minimum_Order", minimumOrder);
    formData.append("Telephone", tel);
    formData.append("Area", area);
    formData.append("thumbnail", hookthumbnail[0]);
    formData.append("thumbnail1", hookthumbnail[1]);
    formData.append("thumbnail2", hookthumbnail[2]);
    formData.append("id", hookid);
    console.log("yyyy");
    console.log(hookthumbnail[0]);
    console.log(hookid);
    try {
      Axios.post(
        "http://localhost:4000/restaurantregisteration",

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
        .then((response) => {
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          window.scrollTo(0, 0);

          registerStatus(error.response.data.msg);
        });
    } catch (error) {
      console.log(error.reponse);
      window.scrollTo(0, 0);
      registerStatus(error.response.data.msg);
    }
  };

  return (
    <>
      {/* {success ? <Redirect to="/restaurant" /> : null} */}

      <div className={classes.root1}>
        {status ? <Alert severity="error">{status}</Alert> : null}
      </div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registeration
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Your Name"
                  name="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Your Email"
                  name="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="area"
                  label="Area"
                  name="Arae"
                  onChange={(e) => {
                    setArea(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="area"
                  label="Restaurant Name"
                  name="Restaurant_Name"
                  onChange={(e) => {
                    setRestaurantName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Restaurant Address"
                  name="Restaurant_Address"
                  onChange={(e) => {
                    setRestaurantAddress(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="cruisine"
                  label="Cruisine Type"
                  name="Cruisine"
                  onChange={(e) => {
                    setCruisine(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="minimumOrder"
                  label="Minimum Order in Rs."
                  name="Minimum_Order"
                  onChange={(e) => {
                    setMinimumOrder(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="tel"
                  label="Telephone"
                  name="Telephone"
                  onChange={(e) => {
                    setTel(e.target.value);
                  }}
                />
              </Grid>
              {/* // </Link> */}

              <Box ml={1} mt={1}>
                <Button variant="contained" component="label">
                  Upload File
                  <input
                    id="resthumbnail"
                    type="file"
                    name="resthumbnail"
                    multiple="multiple"
                    onChange={(e) => {
                      sethookthunmbnail(e.target.files);
                    }}
                    hidden
                  />
                </Button>
                &nbsp; Select atleast 3 HD photos of restaurant
              </Box>
              <Box ml={1} mt={1}>
                <Button variant="contained" name="id" component="label">
                  Upload File
                  <input
                    type="file"
                    id="ownerid"
                    onChange={(e) => {
                      sethookid(e.target.files[0]);
                    }}
                    hidden
                  />
                </Button>
                &nbsp; Select your ID
              </Box>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={validateEmail}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
