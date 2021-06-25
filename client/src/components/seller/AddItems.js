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

export default function AddItems() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pic, setPic] = useState();
  const [status, setStatus] = useState();
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState("");

  const additemss = async (e) => {
    e.preventDefault();
    if (typeof pic != "object") {
      setStatus("Please select pictures as mentioned!");
      window.scrollTo(0, 0);
    } else {
      let formData = new FormData();
      formData.append("Name", name);
      formData.append("Price", price);
      formData.append("Pic", pic);
      formData.append("Description", description);
      try {
        if (localStorage.getItem("seller-auth-token") != null) {
          const token = localStorage.getItem("seller-auth-token");

          Axios.post("http://localhost:4000/additems", formData, {
            headers: {
              "seller-auth-token": token,
              "Content-Type": "multipart/form-data",
            },
          })
            .then((response) => {
              console.log(response);
              setSuccess(true);
            })
            .catch((error) => {
              console.log(error);
              window.scrollTo(0, 0);

              setStatus(error.response.data.msg);
            });
        }
      } catch (error) {
        console.log(error.reponse);
        window.scrollTo(0, 0);
        setStatus(error.response.data.msg);
      }
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
                  label="Item Name"
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
                  label="Price"
                  name="price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Short Description"
                  name="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Grid>

              <Box ml={1} mt={1}>
                <Button variant="contained" name="pic" component="label">
                  Upload File
                  <input
                    type="file"
                    id="pic"
                    onChange={(e) => {
                      setPic(e.target.files[0]);
                    }}
                    hidden
                  />
                </Button>
                &nbsp; Select your Pic
              </Box>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={additemss}
            >
              Add
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  {/* Already have an account? Sign in */}
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
