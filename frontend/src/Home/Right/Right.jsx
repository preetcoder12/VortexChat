import Message from "./Message";
import Type from "./Type";
import User from "./User";
import { motion } from "framer-motion";
import { IoMdMore } from "react-icons/io";

const Right = () => {
    return (
        <div className="w-[70%] bg-slate-950 text-white flex flex-col h-screen border-l border-gray-800 shadow-lg ">
            
            {/* User Info Bar */}
            <div className="flex items-center justify-between p-4 bg-slate-900 shadow-md border-b border-gray-800">
                <User />
                <button className="p-2 text-gray-400 hover:text-white transition-all">
                    <IoMdMore size={24} />
                </button>
            </div>

            {/* Chat Messages */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="flex-grow overflow-y-auto p-4 min-h-0 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
            >
                <Message />
            </motion.div>

            {/* Typing Bar */}
            <Type />
        </div>
    );
};

export default Right;
