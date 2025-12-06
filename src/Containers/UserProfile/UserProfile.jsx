import "./UserProfile.css";
import Header from "../../Component/Header/Header.jsx";
import { useContext, useEffect, useRef } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext.jsx";
import linkedInURL from "../../Assets/UserImages/linkedin.png";
import instagramURL from "../../Assets/UserImages/instagram.svg"
import userAvatar from "../../Assets/UserImages/user-avatar.svg";

const UserProfile = () => {

    const { getCurrentUsername } = useContext(ProfilesContext);

    useEffect(() => {
        console.log("User Profile visited");
    }, []);

    return (
        <div id="mainDiv">
            <Header />
            <div id="profileContentDiv">

                <div id="profileIconDiv">
                    <img id="userProfileImage" className="profile-icon-medium" src={userAvatar}></img>
                    <p id="profileUsername">{getCurrentUsername()}</p>
                </div>

                <button id="followButton">Follow</button>

                <br />

                <button id="messageButton">Message</button>

                <br />

                <p id="profileAboutMe"></p>

                <div id="linkedInContainer" className="profileLinkContainer">
                    <img id="linkedInImage" src={linkedInURL} ></img>
                    <p id="linkedInURL"></p>
                </div>


                <div id="instagramContainer" className="profileLinkContainer">
                    <img id="instagramImage" src={instagramURL}></img>
                    <p id="instagramURL"></p>
                </div>

                <div id="spotifyEmbedDiv"></div>
            </div>
        </div>
    )
};

export default UserProfile;