
const User = ({user}) => {
    

    return (
        <div>
            <div className="flex flex-col ">

                <div className="cursor-pointer flex items-center space-x-4 p-4 bg-gray-950 shadow-md rounded-lg hover:shadow-lg transition-all duration-300 hover:bg-gray-900">
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
        </div>
    )
}

export default User
