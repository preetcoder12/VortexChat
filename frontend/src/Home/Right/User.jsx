const User = ({ user }) => {
    return (
        <div className="bg-slate-950 text-white flex items-center hover:bg-slate-800 pl-5 rounded-md w-full h-[5rem] space-x-3 p-3 transition-all cursor-pointer duration-300">
            {/* User Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-green-500">
                <img
                    src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* User Info */}
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold">User</h2>
                <span className="text-sm ">Online
                </span>
            </div>
        </div>
    );
};

export default User;
