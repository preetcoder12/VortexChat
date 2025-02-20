const { Router } = require("express");
const routes = Router();
const { sendMessage, getMessage } = require("../controllers/message");
const secureRoute = require("../middleware/secureRoute");

routes.post('/send/:id', secureRoute, sendMessage);
routes.get('/get/:id', secureRoute, getMessage);


module.exports = routes; 