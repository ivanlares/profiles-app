import "./Following.css"
import Header from "../../Component/Header/Header.jsx"
import { useContext, useEffect, useRef, useState } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext";
import UserItem from "../../Component/UserItem/UserItem.jsx";
import userAvatar from "../../Assets/UserImages/user-avatar.svg";

const Following = () => {

    const { followingProfileData } = useContext(ProfilesContext);
    const [profileData, setProfileData] = useState([]);

    useEffect( () => {
        setProfileData(followingProfileData());
    }, []);

    return (
        <div id="mainDiv">
            <Header />
            <div id="followingContentDiv" className="contentDiv">
                {
                    profileData.map((profile, index) => <UserItem key={index} username={profile.username} photoURL={profile.photoURL ?? userAvatar} />)
                }
            </div>
        </div>
    )
};

export default Following;