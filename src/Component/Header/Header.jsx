import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const { logout } = useContext(ProfilesContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate("/")
    };

    return (
        <div id="headerDiv">
            <p id="logo">Pages</p>
            <p id='logoutLink' onClick={handleLogout}>Logout</p>
        </div>
    );
};

export default Header;