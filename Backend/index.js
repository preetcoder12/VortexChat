require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRoutes = require("./routes/User")
const messageRoutes = require("./routes/message")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error("Error while connecting to MongoDB:", error));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Home");
})

app.use('/api/user', UserRoutes);
app.use('/api/message', messageRoutes);

app.listen(port, () => {
    console.log(`Server live at : ${port}`);
})
