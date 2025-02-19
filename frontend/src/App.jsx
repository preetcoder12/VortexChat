import { useAuth } from "../context/AuthProvider";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Left from "./Home/Left/Left"
import Logout from "./Home/Left1/Logout";
import Right from "./Home/Right/Right"
import "./index.css"; // Ensure Tailwind is imported

function App() {

  return (
    // const [Authuser, setAuthUser ] = useAuth();
  <>
    {/* <div className="flex h-screen">
        <Logout />
        <Left />
        <Right />
      </div> */}
    <Signup />
    {/* <Login/> */}
  </>
  )
}

export default App
