const express = require("express");
const router = express.Router();
const { validateUser, userModel, validatLogIn, genToken } = require("../models/userModel");
const bcrypt = require("bcrypt");
const { auth } = require("../middlewares/authUser");


router.get("/", (req, res) => {
  res.json({ msg: "Users work" });
})

//check token
router.get("/   ", auth, (req, res) => {

  res.json({ status: "ok" });

})

//signup
router.post("/signup", async (req, res) => {
  let validBody = validateUser(req.body);
  if (validBody.error) {
    return res.json(validBody.error.details).status(400);
  }
  try {
    let data = new userModel(req.body);
    data.password = await bcrypt.hash(data.password, 10);
    await data.save();
    data.password = "*******";
    res.json(data).status(201);

  }
  catch (err) {
    if (err.code == 11000) {
      return res.json({ msg: "email is alrady in the systemm", code: err.code }).status(400);
    }
  }
})

//logIn
router.post("/logIn", async (req, res) => {
  let validBody = validatLogIn(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res.json("invalid email or password");
    }
    let validPas = await bcrypt.compare(req.body.password, user.password)
    if (!validPas) {
      return res.json("invalid email or password");
    }
    let token = genToken(user._id, user.role);
    res.json({ token }).status(200);
  }
  catch (err) {
    return res.json(err).status(400);
  }
})


module.exports = router;

