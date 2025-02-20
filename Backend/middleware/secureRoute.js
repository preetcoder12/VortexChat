require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../model/User');

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized!! No token provided." });
        }

        const VerifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token Data:", VerifiedUser);

        if (!VerifiedUser) {
            return res.status(403).json({ error: "Invalid token!!" });
        }

        // Fetch user from database
        const user = await User.findById(VerifiedUser.userid).select('-password');
        console.log("User Retrieved from DB:", user); //this user is logged in and removed frin==om left part where people to cha t with shown

        if (!user) {
            return res.status(401).json({ error: "User not found!!" });
        }

        // Attach user to request
        req.user = user;
        next();
    } catch (error) {
        console.error("Secure Route Error:", error.message);
        res.status(500).json({ error: "Internal server error!!" });
    }
};

module.exports = secureRoute;
