import Message from "./Message";
import Type from "./Type";
import User from "./User";

const Right = () => {
    return (
        <div className="w-[70%] bg-slate-950 text-white flex flex-col h-screen">
            
            {/* User Info */}
            <User />

            {/* Chat Messages (Fixed to Fill Space & Scroll) */}
            <div className="flex-grow overflow-y-auto p-4 min-h-0">
                <Message />
            </div>

            {/* Typing Bar (Always Stays at Bottom) */}
            <Type />

        </div>
    );
};

export default Right;
