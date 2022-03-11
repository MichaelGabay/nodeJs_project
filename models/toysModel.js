const mongoose = require("mongoose");
const joi = require("joi");

let toysSchema = new mongoose.Schema({
    name: String,
    info: String,
    category: String,
    img_url: String,
    price: Number,
    date_created: {
        type: Date, default: Date.now()
    },
    user_id: String
})

exports.toysModel = mongoose.model("toys", toysSchema);

exports.validatToy = _req_body => {
    let Joivalid = joi.object({
        name: joi.string().min(2).max(100).required(),
        info: joi.string().max(350).allow(null, ""),
        category: joi.string().required(),
        img_url: joi.string().allow(null, ""),
        price: joi.number().required().min(1).max(99999)
    })
    return Joivalid.validate(_req_body)
}