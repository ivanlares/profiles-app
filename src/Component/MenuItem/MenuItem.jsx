import { Link } from "react-router-dom";
import "./MenuItem.css"
import { useContext } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext.jsx";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, navigationPath }) => {

    const { logout } = useContext(ProfilesContext);
    const navigate = useNavigate();

    const handleSelection = () => {
        navigate(navigationPath)
    };

    return (
        <div id="menuItemRootDiv" onClick={handleSelection}>
            <p id="title">{title}</p>
            <p id="rightChevron">&#8250;</p>
        </div>
    );
};

export default MenuItem;