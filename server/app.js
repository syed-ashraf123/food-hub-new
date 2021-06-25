const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const app = express();
const http = require("http");
const server = http.createServer(app);
const verify = require("./routes/verifytoken");

const SellerDetails = require("./models/SellerDetails.js");
const UserDetails = require("./models/UserDetails.js");
// const fs = require("fs");
// const path = require("path");
// const multer = require("multer");
const cors = require("cors");
const fileUpload = require("express-fileupload");

app.use(fileUpload());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//socket
// const io = socketio(server);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("We have a new connection");
//   socket.on("join", ({ name }, callback) => {
//     console.log(socket.handshake.headers.referer);
//     console.log(name);
//     // callback();
//   });
//   socket.on("disconnect", () => {
//     console.log("Disconnection");
//   });
// });

//Routers

const sellerregisterationRoute = require("./routes/sellerregisteration");
const sellerloginRoute = require("./routes/sellerlogin");
const sellerdashboardRoute = require("./routes/sellerdashboard");
const additemsRoute = require("./routes/additems");
const itemsRoute = require("./routes/items");
const usersignupRoute = require("./routes/usersignup");
const userloginRoute = require("./routes/userlogin");
const userdetailsRoute = require("./routes/userdetails");
const sellerdetailsRoute = require("./routes/sellerdetails");
const updateuserdetailsRoute = require("./routes/updateuserdetails");
const updatesellerdetailsRoute = require("./routes/updatesellerdetails");

// parse application/json
app.use(bodyParser.json());
// app.use(express.static(__dirname + "/uploads"));
app.use("/images", express.static(__dirname + "/routes/uploads/"));
// app.use("/images", express.static(__dirname + "/routes/uploads/"));
const CONNECTION_URL =
  "mongodb+srv://syed:7275456455@cluster0.hlj0c.mongodb.net/FoodDatabase?retryWrites=true&w=majority";

mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

app.use("/restaurantregisteration", sellerregisterationRoute);
app.use("/sellerlogin", sellerloginRoute);
app.use("/sellerdetails", sellerdetailsRoute);
app.use("/sellerdashboard", sellerdashboardRoute);
app.use("/additems", additemsRoute);
app.use("/items", itemsRoute);
app.use("/usersignup", usersignupRoute);
app.use("/userlogin", userloginRoute);
app.use("/userdetails", userdetailsRoute);
app.use("/updateuserdetails", updateuserdetailsRoute);
app.use("/updatesellerdetails", updatesellerdetailsRoute);

app.post("/order", verify, async (req, res) => {
  console.log(req.id);
  var seller = await SellerDetails.findOne({ _id: req.body[1]._id });
  await seller.orders.push(...req.body[0]);
  await seller.save();

  var user = await UserDetails.findOne({ _id: req.id._id });
  await user.orders.push(...req.body[0]);
  await user.save();
});

app.get("/", async (req, res) => {
  var query = { area: req.query.area };
  const data = await SellerDetails.find(query);
  res.json(data);
});

app.get("/userorder", verify, async (req, res) => {
  console.log(req.id);
  var user = await UserDetails.findOne({ _id: req.id._id });
  res.json(user);
});

app.get("/sellerorder", verify, async (req, res) => {
  console.log(req.id);
  var seller = await SellerDetails.findOne({ _id: req.id._id });
  res.json(seller);
});

server.listen(4000);
