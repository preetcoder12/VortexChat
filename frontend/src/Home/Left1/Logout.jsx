import { RiLogoutBoxLine } from "react-icons/ri";
const Logout = () => {
    return (
        <>
            <div className="w-[3%]  bg-gray-950 text-white flex flex-col justify-end p-2" >

                <RiLogoutBoxLine className=" text-4xl  justify-center rounded-full cursor-pointer hover:bg-red-600 transition-all duration-300 p-1     " />
            </div>
        </>
    )
}

export default Logout
