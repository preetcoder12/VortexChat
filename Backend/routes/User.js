const { Login } = require("../controllers/Login");
const { Logout } = require("../controllers/Logout");
const { Signup } = require("../controllers/Signup")
const { GetUserProfile } = require("../controllers/getUserProfile");

const { Router } = require("express");
const secureRoute = require("../middleware/secureRoute");
const routes = Router();

routes.post('/signup', Signup);
routes.post('/login', Login);
routes.post('/logout', Logout);
routes.post('/getuserprofile', secureRoute, GetUserProfile);

module.exports = routes;