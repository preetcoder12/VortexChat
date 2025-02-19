
const Logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        return res.status(200).json({ success: true, msg: "Logout Successfully" });


    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};

module.exports = { Logout };
