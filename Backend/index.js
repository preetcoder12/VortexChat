require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/User")
const port = process.env.PORT || 5000;
const app = express();

try {
    mongoose.connect(process.env.MONGO_URI).then(console.log("Mongo db connected"));
} catch (error) {
    (console.log("Error while connecting Mongodb"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Home");
})

app.use('/user', UserRoutes);

app.listen(port, () => {
    console.log(`Server live at : ${port}`);
})
