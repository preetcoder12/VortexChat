require("dotenv").config();
const jwt = require("jsonwebtoken");

const createTokenAndSaveCookie = (userid, res) => {
    const token = jwt.sign({ userid }, process.env.JWT_SECRET, { expiresIn: "2d" });

    res.cookie("jwt", token, {
        httpOnly: true, // Secure from XSS attacks
        sameSite: "strict", // Secure from CSRF attacks
        secure: process.env.NODE_ENV === "production", // Secure in production
    });

    return res;
};

module.exports = createTokenAndSaveCookie;
