import useConversation from "../../manageSession/useConversation";

const Messages = ({ message }) => {
    const { selectedConversation } = useConversation();
    const AuthUser = JSON.parse(localStorage.getItem("messenger")) || {}; // Prevent null error

    const itsMe = message.senderId === AuthUser._id; // Compare with logged-in user ID
    // console.log(message.senderId);
    
    console.log(message.senderId);

    return (
        <div className="w-full p-2">
            <div className={`flex items-start space-x-3 ${itsMe ? "justify-end" : ""}`}>
                {!itsMe && (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                            alt="Receiver Avatar"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
                <div className={`p-3 rounded-3xl shadow-md max-w-xs ${itsMe ? "bg-blue-500 text-white" : "bg-gray-700 text-white"}`}>
                    {message.message}
                </div>
                {itsMe && (
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                            alt="Sender Avatar"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messages;
