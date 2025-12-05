import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

    return (
        <div id="headerDiv">
            <p id="logo">Pages</p>
            <p id='logoutLink'>Logout</p>
        </div>
    );
};

export default Header;