import { IoMdSend } from "react-icons/io";

const Type = () => {
    return (
        <div className="fixed bottom-4 left-[59rem] transform -translate-x-1/2 w-[90%] max-w-2xl bg-white flex items-center p-3 rounded-full shadow-lg border border-gray-300 transition-all duration-300 focus-within:shadow-xl">
            
            {/* Message Input */}
            <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none border-none text-sm"
            />

            {/* Send Button */}
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 active:scale-95">
                <IoMdSend size={20} />
            </button>
        </div>
    );
};

export default Type;
