const router = require("express").Router();
const verify = require("./verifytoken");
const SellerDetails = require("../models/SellerDetails");
const { additemsValidation } = require("../validation/sellerValidation");
router.post(
  "/",
  verify,

  async (req, res) => {
    //Validation
    const { error } = additemsValidation(req.body);
    if (error) return res.status(400).send({ msg: error.details[0].message });

    //Finding the user
    console.log(req.seller._id);
    const seller = await SellerDetails.findOne({ _id: req.id._id });
    if (!seller) return res.status(400).send({ msg: "Seller Not Found" });

    // Check if item already exists   //To be implemented
    // const emailExist = await SellerDetails.findOne({ email: req.body.Email });
    // if (emailExist)
    //   return res.status(400).send({ msg: "Email Already Registered" });

    let sampleFile;
    let uploadPath;
    const pic_name = Date.now() + req.files.Pic.name;
    const pic = req.files.Pic;
    uploadPath = __dirname + "/uploads/" + pic_name;
    pic.mv(uploadPath);
    push = seller.items.push({
      name: req.body.Name,
      price: req.body.Price,
      pic: pic_name,
      description: req.body.Description,
    });
    seller.save();
    res.status(200).send({ Success: "Updated" });
  }
);
module.exports = router;
