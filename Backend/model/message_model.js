const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Corrected to match the User model name
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Corrected reference
            required: true,
        },
        message: {
            type: String,
            required: true,
            maxlength: 1000,
            trim: true,
            validate: {
                validator: (value) => value.length > 0,
                message: "Message cannot be empty", // Fixed error message
            },
        },
    },
    { timestamps: true } // No need for `createdAt` manually
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
