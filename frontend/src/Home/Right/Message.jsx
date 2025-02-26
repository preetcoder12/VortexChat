import UsegetMessage from "../../content/UsegetMessage";
import Messages from "./Messages";
import useConversation from "../../manageSession/useConversation";  
import Loading from "../../components/Loading";

const Message = () => {
    const { messages = [], loading } = UsegetMessage(); // Ensure messages is always an array
    const { selectedConversation } = useConversation(); // Get the selected conversation

    return (
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-2">
            {loading ? (
                <Loading/>
            ) : messages.length > 0 ? (
                <div className="space-y-2">
                    {messages.map((msg) => (
                        <Messages key={msg._id} message={msg} />
                    ))}
                </div>
            ) : selectedConversation ? ( // Show "Start conversation" only if a chat is selected
                <div className="flex justify-center items-center h-full text-gray-400 text-lg">
                    <p>Start conversation...</p>
                </div>
            ) : null} {/* Don't show anything if no conversation is selected */}
        </div>
    );
};

export default Message;
