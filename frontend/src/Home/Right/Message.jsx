import Messages from "./Messages";

const Message = () => {
    return (
        <>
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 p-2"
            >
                {Array(20).fill(<Messages />)}
            </div >
        </>
    );
};

export default Message;
