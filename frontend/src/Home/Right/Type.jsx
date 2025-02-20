import { IoSend } from "react-icons/io5";
const Type = () => {
    return (
        <div>

            <div className="absolute bottom-0 left-0 w-[68%] ml-[29rem] mb-[1px] bg-slate-900 gap-4 flex items-center p-3  shadow-lg border-t border-gray-800 transition-all duration-300 focus-within:shadow-xl z-10">

                {/* Message Input */}
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow px-4 py-2 text-md text-white bg-slate-950 outline-none border rounded-full focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                />

                {/* Send Button */}
                <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 active:scale-95">
                    <IoSend size={15} />
                </button>
            </div>
        </div>
    );
};

export default Type;
