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
                
                if (res.data.success) {
                    setMessages(res.data.data); // Correctly setting messages array
                } else {
                    setMessages([]); // Ensure messages is empty if response is unsuccessful
                }
            } catch (error) {
                console.error("Error fetching messages:", error);
                setMessages([]); // Handle errors by ensuring messages reset
            } finally {
                setLoading(false);
            }
        };

        getMessages();
    }, [selectedConversation, setMessages]);

    return { messages, loading };
};


export default UsegetMessage;
