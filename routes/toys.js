const express = require("express");
const { auth } = require("../middlewares/authUser");
const { toysModel, validatToy } = require("../models/toysModel");
const router = express.Router();
//get all the toys
router.get("/", async (req, res) => {
    try {
        let page = req.query.page || 1;
        let data = await toysModel.find({}).skip((page - 1) * 10);
        res.json(data);
    }

    catch (err) {
        res.json({ msg: "err in server" }).status(500)
    }
})


// search in name or info
router.get("/search", async (req, res) => {
    try {
        let page = req.query.page || 1;
        let search = req.query.s;
        let sReg = new RegExp(search, "i");

        let data = await toysModel.find({ $or: [{ name: sReg }, { info: sReg }] }).limit(10).skip((page - 1) * 10);
        res.json(data);
    }

    catch (err) {
        res.json({ msg: "err in server" }).status(500)
    }
})

//search in category by params
router.get("/cat/:catname", async (req, res) => {
    try {

        let page = req.query.page || 1;
        let search = req.params.catname;
        let sReg = new RegExp(search, "i");
        let data = await toysModel.find({ category: sReg }).limit(10).skip((page - 1) * 10);;
        res.json(data);
    }

    catch (err) {
        res.json({ msg: "err in server" }).status(500)
    }
})

// search between max and min   
router.get("/prices", async (req, res) => {
    try {
        let min = req.query.min;
        let max = req.query.max;
        let data = await toysModel.find({ price: { $lte: max, $gte: min } });
        res.json(data);
    }
    catch (err) {
        console.log(err);
    }
})


//add toy
router.post("/", auth, async (req, res) => {
    let validBody = validatToy(req.body);
    if (validBody.error) {
        return res.json(validBody.error.details);
    }
    try {
        let data = new toysModel(req.body);
        data.User_id = req.datatoken._id;
        await data.save();
        res.json(data).status(201);

    }

    catch (err) {
        console.log(err);
    }
})
//appdate toy
router.put("/:editid", auth, async (req, res) => {
    let validBody = validatToy(req.body);
    if (validBody.error) {
        return res.json(validBody.error.details);
    }
    try {
        let editId = req.params.editId;
        let data = await toysModel.updateOne({ _id: editId, User_id: req.datatoken._id }, req.body);
        res.json(data).status(200);
    }

    catch (err) {
        console.log(err);
    }
})

//delete toy
router.delete("/:delid", auth, async (req, res) => {
    try {
        let delid = req.params.delid;
        let data = await toysModel.deleteOne({ _id: delid, User_id: req.datatoken._id });
        res.json(data).status(200);
    }

    catch (err) {
        console.log(err);
    }
})



module.exports = router;