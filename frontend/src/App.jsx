import Left from "./Home/Left/Left"
import Logout from "./Home/Left1/Logout";
import Right from "./Home/Right/Right"
import "./index.css"; // Ensure Tailwind is imported

function App() {

  return (
    <>
      <div className="flex h-screen">
        <Logout />
        <Left />
        <Right />
      </div>
    </>
  )
}

export default App
