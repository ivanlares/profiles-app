import "./Following.css"
import Header from "../../Component/Header/Header.jsx"
import { useContext, useEffect, useRef, useState } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext";
import UserItem from "../../Component/UserItem/UserItem.jsx";
import userAvatar from "../../Assets/UserImages/user-avatar.svg";
import { useNavigate } from "react-router-dom";

const Following = () => {

    const { followingProfileData } = useContext(ProfilesContext);
    const [profileData, setProfileData] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        setProfileData(followingProfileData());
    }, []);

    const handleUserItemClick = (username) => {
        console.log('didClick')
        navigate(`/profile/${username}`);
    };

    const a = () => {
        console.log('didClick')
        // navigate(`/profile/${username}`);
    };

    return (
        <div id="mainDiv">
            <Header />
            <div id="followingContentDiv" className="contentDiv">
                {
                    profileData.map((profile, index) => <UserItem key={index} username={profile.username} photoURL={profile.photoURL ?? userAvatar} onClick={a}/>)
                }
            </div>
        </div>
    )
};

export default Following;