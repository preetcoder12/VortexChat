const Messages = () => {
    return (
        <div className="w-80%] space-y-4 p-4">
            
            {/* Left-side Message */}
            <div className="flex items-start space-x-3">
                <div className="w-10    h-10 rounded-full overflow-hidden">
                    <img
                        alt="User Avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-gray-700 text-white p-3 rounded-3xl shadow-md max-w-xs">
                    Hey! How's it going?
                </div>
            </div>

            {/* Right-side Message */}
            <div className="flex items-start space-x-3 justify-end">
                <div className="bg-blue-500 text-white p-3 rounded-3xl shadow-md max-w-xs">
                    I'm good! What about you?
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                        alt="User Avatar"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>
    );
};

export default Messages;
