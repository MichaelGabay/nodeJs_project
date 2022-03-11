const jwt = require("jsonwebtoken");
const { infConect } = require("../config/secret");
exports.auth = (req, res, next) => {
    let token = req.header("auth-token");
    if (!token) {
        return res.json({ msg: "need to send token" }).status(400);
    }
    try {
        let verifyToken = jwt.verify(token, infConect.secretToken);
        req.datatoken = verifyToken;
        next();
    }
    catch (err) {
        return res.json({ msg: "token invalid or expaired" }).status(400);
    }

}