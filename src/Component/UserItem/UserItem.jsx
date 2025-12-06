import "./UserItem.css";
import { useNavigate } from "react-router-dom";

const UserItem = ({ username, photoURL }) => {

    const navigate = useNavigate();

    const navigateToUserProfile = () => {
        console.log(username);
        navigate(`/profile/${username}`);
    };

    return (
        <div id="userItemRootDiv" onClick={navigateToUserProfile}>
            <div id="userItemInnerDiv">
                <img className="profile-icon-small" src={photoURL}></img>
                <p id="title">{username}</p>
            </div>

            <p id="rightChevron">&#8250;</p>
        </div>
    );
};

export default UserItem;