const mongoose = require("mongoose");
const Conversation = require("../model/conversation_model");
const Message = require("../model/message_model");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ success: false, error: "Please provide a message" });
        }

        const { id: receiverId } = req.params;
        const senderId = req.user.id; // Assuming `req.user` contains logged-in user data

        // Convert to ObjectId
        const senderObjectId = new mongoose.Types.ObjectId(senderId);
        const receiverObjectId = new mongoose.Types.ObjectId(receiverId);

        // Find existing conversation
        let conversation = await Conversation.findOne({
            participants: { $all: [receiverObjectId, senderObjectId] },
        });

        if (!conversation) {
            conversation = new Conversation({
                participants: [receiverObjectId, senderObjectId],
                messages: [], // Ensure an empty array is set
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId: senderObjectId,
            receiverId: receiverObjectId,
            message,
        });

        await newMessage.save();

        // Add message to conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });

    } catch (error) {
        console.error("Error sending message:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
};


const getMessage = async (req, res) => {

    try {
        const { id: chatuser } = req.params;
        const senderId = req.user._id
        const ObjectsenderIdId = new mongoose.Types.ObjectId(senderId);
        const ObjectchatUserId = new mongoose.Types.ObjectId(chatuser);
        
        const conversation = await Conversation.findOne({
            participants: { $all: [ObjectchatUserId, ObjectsenderIdId] },
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ success: false, error: "Conversation not found" });
        }
        return res.status(200).json({ success: true, data: conversation.messages });
    } catch (error) {
        console.error("Error getting message:", error);
        return res.status(500).json({ success: false, error: "Internal server error" });
    }
}


module.exports = { sendMessage, getMessage };
