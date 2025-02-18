import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <>
      <div className="  w-[27%]  bg-black text-white" >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-800 text-center py-2">
        VortexChat
          </h1>
        <Search />
        <Users/>
      </div>
    </>
  )
}

export default Left;
