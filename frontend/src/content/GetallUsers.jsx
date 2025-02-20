import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import axios from "axios";
const GetallUsers = () => {

    const [allusers, setallusers] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setloading(true);
            try {
                const token = Cookies.get("jwt");
                const response = await axios.post("/api/user/getuserprofile", {}, {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                setallusers(response.data);
                setloading(false);
            } catch (error) {
                console.log("error in getalluser.jsx", error);
                setloading(false);
            }
        }
        getUsers();
    }, []);

    return {allusers, loading}; 
}

export default GetallUsers
