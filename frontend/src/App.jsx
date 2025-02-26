// import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Left from "./Home/Left/Left"
import Logout from "./Home/Left1/Logout";
import Right from "./Home/Right/Right"
import "./index.css"; // Ensure Tailwind is imported
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { AuthUser, setAuthUser } = useAuth();
  console.log("AuthUser state:", AuthUser);

  return (
    <>
    
      <Routes>
        <Route path="/" element={AuthUser ? <div className={`  fade-in flex h-screen `} >
          <Logout />
          <Left />
          <Right />
        </div> : <Navigate to={'/login'} />} />
        <Route path="/signup" element={AuthUser ? <Navigate to={'/'} /> : <Signup />} />
        <Route path="/login" element={AuthUser ? <Navigate to={'/'} /> : <Login />} />
      </Routes>


    </>
  )
}

export default App
