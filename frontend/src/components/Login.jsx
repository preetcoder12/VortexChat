import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5"; // Import eye icons
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { AuthUser, setAuthUser } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post("/api/user/login", userInfo);
            console.log("Response Data:", response.data);

            localStorage.setItem("messenger", JSON.stringify(response.data));
            console.log("Stored Data:", localStorage.getItem("messenger"));

            toast.success("✅ Login successfully!", { position: "top-right" });
            setAuthUser(response.data); // ✅ Update AuthUser correctly

        } catch (error) {
            console.error("Login Error:", error.response?.data?.message || error.message);
            toast.error("❌ Login failed. Try again!", { position: "top-right" });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="w-full max-w-md bg-slate-900 text-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.05]">
                <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>

                    {/* Email Field */}
                    <label className="text-sm font-medium">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                        })}
                        type="email"
                        className="w-full p-3 bg-slate-800 text-white rounded-lg outline-none border border-transparent focus:border-blue-500 transition duration-300"
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="text-red-400 text-sm font-semibold">{errors.email.message}</span>}

                    {/* Password Field with Toggle */}
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative">
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" },
                            })}
                            type={showPassword ? "text" : "password"}
                            className="w-full p-3 bg-slate-800 text-white rounded-lg outline-none border border-transparent focus:border-blue-500 transition duration-300 pr-10"
                            placeholder="******"
                        />
                        {errors.password && <span className="text-red-400 text-sm font-semibold">{errors.password.message}</span>}

                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                        </button>
                    </div>

                    {/* Login Button */}
                    <button className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 active:scale-95">
                        Login
                    </button>
                </form>

                {/* Signup Link */}
                <p className="text-sm text-gray-400 text-center mt-4">
                    <Link to={"/signup"}>
                        Create an Account? <span className="text-blue-400 hover:underline cursor-pointer " >Sign up</span>
                    </Link>

                </p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
