const router = require("express").Router();
const verify = require("./verifytoken");
const SellerDetails = require("../models/SellerDetails");
router.get(
  "/",
  verify,

  async (req, res) => {
    //Finding the user
    console.log("Request for user details");
    const seller = await SellerDetails.findOne({ _id: req.id._id });
    if (!seller) return res.status(400).send({ msg: "User Not Found" });

    // Check if item already exists   //To be implemented
    // const emailExist = await SellerDetails.findOne({ email: req.body.Email });
    // if (emailExist)
    //   return res.status(400).send({ msg: "Email Already Registered" });

    res.status(200).send({ msg: seller });
  }
);
module.exports = router;
