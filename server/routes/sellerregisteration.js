const router = require("express").Router();
const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const SellerDetails = require("../models/SellerDetails");
const { sellerValidation } = require("../validation/sellerValidation");
const bcrypt = require("bcryptjs");

router.post(
  "/",

  async (req, res) => {
    // try {
    console.log("Request Came");
    //Validation
    const { error } = sellerValidation(req.body);
    if (error) return res.status(400).send({ msg: error.details[0].message });

    //Check if mail already exists
    const emailExist = await SellerDetails.findOne({ email: req.body.Email });
    if (emailExist)
      return res.status(400).send({ msg: "Email Already Registered" });

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    let sampleFile;
    let uploadPath;
    const thumbnail_name = Date.now() + req.files.thumbnail.name;
    const thumbnail1_name = Date.now() + req.files.thumbnail1.name;
    const thumbnail2_name = Date.now() + req.files.thumbnail2.name;
    const id_name = Date.now() + req.files.id.name;
    new SellerDetails({
      ownerName: req.body.Name,
      email: req.body.Email,
      password: hashedPassword,
      area: req.body.Area,
      restaurantName: req.body.Restaurant_Name,
      address: req.body.Address,
      cruisine: req.body.Cruisine,
      minimumOrder: req.body.Minimum_Order,
      tel: req.body.Telephone,
      id: id_name,
      thumbnail: [thumbnail_name, thumbnail1_name, thumbnail2_name],
    }).save();
    const id = req.files.id;
    const thumbnail = req.files.thumbnail;
    const thumbnail1 = req.files.thumbnail1;
    const thumbnail2 = req.files.thumbnail2;
    uploadPath = __dirname + "/uploads/" + id_name;
    id.mv(uploadPath);
    uploadPath = __dirname + "/uploads/" + thumbnail_name;
    thumbnail.mv(uploadPath);
    uploadPath = __dirname + "/uploads/" + thumbnail1_name;
    thumbnail1.mv(uploadPath);
    uploadPath = __dirname + "/uploads/" + thumbnail2_name;
    thumbnail2.mv(uploadPath);
    res.status(200).send({ Success: "Posted" });
  }
);
module.exports = router;
