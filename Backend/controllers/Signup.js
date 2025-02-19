const User = require("../model/User");
const bcrypt = require("bcrypt");
const createtokenandSavecookie = require("../JWT/generatewebtoken"); // Correct Import

const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, error: "Invalid credentials" });
        }

        if (password.length < 4) {
            return res.status(400).json({ success: false, error: "Password must be at least 4 characters long" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, error: "User already exists" });
        }

        let hashpassword;
        try {
            const salt = await bcrypt.genSalt(10);
            hashpassword = await bcrypt.hash(password, salt);
        } catch (hashError) {
            return res.status(500).json({ success: false, error: "Error hashing password" });
        }

        const newUser = await User.create({
            username,
            email,
            password: hashpassword,
        });

        if (newUser._id) {
            createtokenandSavecookie(newUser._id, res);
            return res.status(201).json({ success: true, msg: "User successfully created", user: newUser });
        }

    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = { Signup };
