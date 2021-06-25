const router = require("express").Router();
const verify = require("./verifytoken");
const SellerDetails = require("../models/SellerDetails");
router.post(
  "/",
  verify,

  async (req, res) => {
    //Finding the user
    console.log("Request for user details");
    const filter = { _id: req.id._id };
    const update = {
      ownerName: req.body.ownerName,
      address: req.body.address,
      email: req.body.email,
      restaurantName: req.body.restaurantName,
      area: req.body.area,
      Cruisine: req.body.cruisine,
      minimumOrder: req.body.minimumOrder,
    };
    let doc = await SellerDetails.findOneAndUpdate(filter, update);

    // if (!user) return res.status(400).send({ msg: "User Not Found" });

    // Check if item already exists   //To be implemented
    // const emailExist = await SellerDetails.findOne({ email: req.body.Email });
    // if (emailExist)
    //   return res.status(400).send({ msg: "Email Already Registered" });

    res.status(200).send({ msg: "success" });
  }
);
module.exports = router;
