import { useEffect, useState } from "react";
import useConversation from "../manageSession/useConversation";
import axios from "axios";

const UsegetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation(); 

    useEffect(() => {
        const getMessages = async () => {
            if (!selectedConversation?._id) return; // Skip if no conversation is selected

            setLoading(true);
            try {
                const res = await axios.get(`/api/message/get/${selectedConversation._id}`);
                console.log("Messages response:", res.data);
                setMessages(() => res.data); // Functional update
            } catch (error) {
                console.error("Error fetching messages:", error);
            } finally {
                setLoading(false);
            }
        };

        getMessages();
    }, [selectedConversation, setMessages]);

    return { messages, loading };
};

export default UsegetMessage;
