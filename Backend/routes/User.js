const { Login } = require("../controllers/Login");
const { Logout } = require("../controllers/Logout");
const {Signup} = require("../controllers/Signup")

const { Router } = require("express");
const routes = Router();

routes.post('/signup',Signup);
routes.post('/login',Login);
routes.post('/logout',Logout);

module.exports = routes;