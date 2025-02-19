const User = require("../model/User");
const bcrypt = require("bcrypt");
const createtokenandSavecookie = require("../JWT/generatewebtoken"); // Correct Import

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, error: "Invalid credentials" });
        }

        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (!user || !isMatch) {
            return res.status(400).json({ success: false, error: "Invalid email or password" });
        }

        createtokenandSavecookie(user._id, res);
        res.json({ msg: "Used logged in" })


    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = { Login };
