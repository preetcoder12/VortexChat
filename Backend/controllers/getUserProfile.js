const User = require("../model/User");

const GetUserProfile = async (req, res) => {
    try {
        // Get the logged-in user's ID from request (assuming middleware sets req.user)
        const loggedInUser = req.user._id;

        // Fetch all users except the logged-in user, excluding passwords
        const filterUser = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        res.status(200).json({ users: filterUser });
    } catch (error) {
        console.error("Error fetching user profiles:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { GetUserProfile };
