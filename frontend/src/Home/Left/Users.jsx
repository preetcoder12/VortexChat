import GetallUsers from "../../content/GetallUsers";
import User from "./User";

const Users = () => {
    const { allusers, loading } = GetallUsers();

    if (loading) return <p className="text-white">Loading users...</p>;
    if (!allusers || !Array.isArray(allusers.users)) return <p className="text-white">No users found.</p>;

    return (
        <div
            className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-2"
            style={{ maxHeight: "84vh" }}
        >
            {allusers.users.length > 0 ? (
                allusers.users.map((user) => (
                    <User key={user._id} user={user} />
                ))
            ) : (
                <p className="text-white text-center">No users available.</p>
            )}
        </div>
    );
};

export default Users;
