import useConversation from "../../manageSession/useConversation";

const User = ({ user }) => {
    const { selectedConversation, setSelectedConversation } = useConversation(); // ✅ Fix function name

    const isSelected = selectedConversation?._id === user._id;

    return (
        <div
            className={`p-4 transition-all duration-300 rounded-md 
                        ${isSelected ? "bg-slate-600" : ""} 
                        hover:bg-slate-600 cursor-pointer`}
            onClick={() => setSelectedConversation(user)} // ✅ Fix function call
        >
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-green-500">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white">{user.username}</h2>
                    <p className="text-sm text-gray-400">Active now</p>
                </div>
            </div>
        </div>
    );
};

export default User;
