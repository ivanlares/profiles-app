import { Link } from "react-router-dom";
import "./FollowingMenuItem.css"
import { useContext } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext.jsx";
import { useNavigate } from "react-router-dom";

const FollowingMenuItem = ({ title, navigationPath }) => {

    const { logout } = useContext(ProfilesContext);
    const navigate = useNavigate();

    const handleSelection = () => {
        // navigate(navigationPath)
    };

    return (
        <div id="followingMenuItemRootDiv" onClick={handleSelection}>
            <div id="followersRootDiv">
                <p id="followingMenuItemTitle">{title}</p>

                <div id="followersDiv">😀 😀 😀</div>
            </div>

            <p id="rightChevron">&#8250;</p>
        </div>
    );
};

export default FollowingMenuItem;