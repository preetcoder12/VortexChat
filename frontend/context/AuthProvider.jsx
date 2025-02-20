import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // ✅ Import PropTypes
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const InitialUserState = Cookies.get("jwt")
        ? JSON.parse(Cookies.get("jwt"))
        : localStorage.getItem("messenger")
        ? JSON.parse(localStorage.getItem("messenger"))
        : undefined;

    const [AuthUser, setAuthUser] = useState(InitialUserState);

    return (
        <AuthContext.Provider value={{ AuthUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// ✅ Add PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
