import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

const Logout = () => {
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        try {
            await axios.post("/api/user/logout"); 
            toast.success("✅ Logout successful!", { position: "top-right" });
            localStorage.removeItem("messenger");
            Cookies.remove("jwt");
            setLoading(false);
            // Force reload to login page
            window.location.href = "/login";
        } catch (error) {
            console.error("Logout Error:", error.response?.data?.message || error.message);
            toast.error("❌ Logout failed. Try again!", { position: "top-right" });
            setLoading(false);
        }
    };

    return (
        <>
            <div className="w-[3%] bg-gray-950 text-white flex flex-col justify-end p-2">
                <RiLogoutBoxLine
                    onClick={handleLogout}
                    className={`text-4xl justify-center rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300 p-1 ${loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                    disabled={loading}
                />
            </div>
            <ToastContainer />
        </>
    );
};

export default Logout;
