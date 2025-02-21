import UsegetMessage from "../../content/UsegetMessage";
import Messages from "./Messages";

const Message = () => {
    const { messages, loading } = UsegetMessage();

    return (
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-2">
            {loading ? (
                <div className="text-center text-gray-500">Loading messages...</div>
            ) : messages.length === 0 ? (
                <div className="flex justify-center items-center h-full text-center text-xl md:text-3xl text-gray-400 fade-in">
                    <p>Start conversation...</p>
                </div>
            ) : (
                <div className="space-y-2">
                    {messages.map((msg) => (
                        <Messages key={msg._id} message={msg} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Message;
