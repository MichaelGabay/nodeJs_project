const mongoose = require("mongoose");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const { infConect } = require("../config/secret");

exports.genToken = (_user_id, _userRole) => {
    let token = jwt.sign({ _id: _user_id, _role: _userRole }, infConect.secretToken, { expiresIn: "600mins" })
    return token;
}

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String, default: "user"
    },
    date_created: {
        type: Date, default: Date.now()
    }
})

exports.userModel = mongoose.model("users", userSchema);

exports.validateUser = _req_body => {
    let Joivalid = joi.object({
        name: joi.string().min(2).max(20).required(),
        email: joi.string().min(2).required().email(),
        password: joi.string().min(2).required()
    })
    return Joivalid.validate(_req_body)
}

exports.validatLogIn = _req_body => {
    let Joivalid = joi.object({
        email: joi.string().min(2).email().required(),
        password: joi.string().min(2).required()
    })
    return Joivalid.validate(_req_body)
}
