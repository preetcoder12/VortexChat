import { useState } from "react";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const Signup = () => {
    // ✅ Correct way to use `useAuth`
    const { AuthUser, setAuthUser } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            username: data.username,
            email: data.email,
            password: data.password,
        };

        try {
            const response = await axios.post("/api/user/signup", userInfo);
            console.log(response.data);
            toast.success("✅ Account created successfully!", { position: "top-right" });
            localStorage.setItem("messenger", JSON.stringify(response.data));
            setAuthUser(response.data);
        } catch (error) {
            console.error("Signup Error:", error.response?.data?.message || error.message);
            toast.error("❌ Signup failed. Try again!", { position: "top-right" });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="w-full max-w-md bg-slate-900 text-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.05]">
                <h1 className="text-2xl font-semibold text-center mb-6">Create an Account</h1>

                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Username Field */}
                    <label className="text-sm font-medium">Username</label>
                    <input
                        {...register("username", { required: "Username is required" })}
                        type="text"
                        className="w-full p-3 bg-slate-800 text-white rounded-lg outline-none border border-transparent focus:border-blue-500 transition duration-300"
                        placeholder="Enter your username"
                    />
                    {errors.username && <span className="text-red-400 text-sm font-semibold">{errors.username.message}</span>}

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
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                        </button>
                    </div>
                    {errors.password && <span className="text-red-400 text-sm font-semibold">{errors.password.message}</span>}

                    {/* Signup Button */}
                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 active:scale-95">
                        Sign Up
                    </button>
                </form>

                {/* Already have an account? */}
                <Link to={"/login"}>

                    <p className="text-sm text-gray-400 text-center mt-4">
                        Already have an account? <span className="text-blue-400 hover:underline cursor-pointer">Log in</span>
                    </p>
                </Link>
            </div>

            {/* Add ToastContainer to render toasts */}
            <ToastContainer />
        </div>
    );
};

export default Signup;
