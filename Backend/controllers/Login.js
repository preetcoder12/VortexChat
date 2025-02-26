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

        // Check if user exists before comparing the password
        if (!user) {
            return res.status(400).json({ success: false, error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, error: "Invalid email or password" });
        }

        // Generate token and save it in a cookie
        createtokenandSavecookie(user._id, res);

        // ✅ Corrected response format
        return res.status(200).json({
            success: true,
            msg: "User logged in",
            data: user,
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = { Login };
