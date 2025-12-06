import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const { logout, getCurrentUsername } = useContext(ProfilesContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate("/")
    };

    const handleLogoClick = () => {
        if (getCurrentUsername() != null) {
            navigate("/home")
        } else {
            navigate("/")
        }
    };

    return (
        <div id="headerDiv">
            <p id="logo" onClick={handleLogoClick}>Pages</p>
            <p id='logoutLink' onClick={handleLogout}>Logout</p>
        </div>
    );
};

export default Header;