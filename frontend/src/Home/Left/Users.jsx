import User from "./User";

const Users = () => {
    return (
        <div
            className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-2"
            style={{ maxHeight: "84vh" }}
        >
            {Array(20).fill(<User />)}
        </div>
    );
};

export default Users;
