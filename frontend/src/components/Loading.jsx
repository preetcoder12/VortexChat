import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                className="w-full max-w-md bg-slate-900 p-8 rounded-2xl shadow-lg"
            >
                {/* Skeleton Header */}
                <div className="w-32 h-6 bg-gray-700 rounded-full mb-6 animate-pulse"></div>
                
                {/* Skeleton Inputs */}
                <div className="w-full h-10 bg-gray-800 rounded-lg mb-4 animate-pulse"></div>
                <div className="w-full h-10 bg-gray-800 rounded-lg mb-4 animate-pulse"></div>
                
                {/* Skeleton Button */}
                <div className="w-full h-12 bg-gray-700 rounded-lg animate-pulse"></div>

                {/* Skeleton Link */}
                <div className="w-40 h-4 bg-gray-600 rounded-full mt-4 mx-auto animate-pulse"></div>
            </motion.div>
        </div>
    );
};

export default Loading;
