import "./UserProfile.css";
import Header from "../../Component/Header/Header.jsx";
import { useContext, useEffect, useRef, useState } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext.jsx";
import linkedInURL from "../../Assets/UserImages/linkedin.png";
import instagramURL from "../../Assets/UserImages/instagram.svg"
import userAvatar from "../../Assets/UserImages/user-avatar.svg";
import { BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

const UserProfile = () => {

    const {  getProfileData } = useContext(ProfilesContext);
    const [profileData, setProfileData] = useState(null);
    const spotifyDivRef = useRef(null);
    const linkedInDivRef = useRef(null);
    const instagramDivRef = useRef(null);
    const bodyRef = useRef(null);
    const { username } = useParams();

    useEffect(() => {
        let profileData = getProfileData(username);
        setProfileData(profileData)

        if (profileData.spotifyEmbed != null) {
            spotifyDivRef.current.innerHTML = profileData.spotifyEmbed;
        }

        instagramDivRef.current.style.display = profileData.instagramURL == null ? "none" : "block"
        linkedInDivRef.current.style.display = profileData.linkedInURL == null ? "none" : "block";
        bodyRef.current.style.display = (profileData.aboutMe == null) ? "none" : "block";
    }, []);

    return (
        <div id="mainDiv">
            <Header />
            <div id="profileContentDiv">

                <div id="profileIconDiv" >
                    <img id="userProfileImage" className="profile-icon-medium" src={profileData?.photoURL ?? userAvatar}></img>
                    <p id="profileUsername">{username}</p>
                </div>

                <button id="followButton">Follow</button>

                <br />

                <button id="messageButton">Message</button>

                <br />

                <p id="profileAboutMe" ref={bodyRef}>{profileData?.aboutMe ?? ''}</p>


                <div id="spotifyEmbedDiv" ref={spotifyDivRef} ></div>

                <div id="profileLinksDiv">

                    <div id="linkedInContainer" className="profileLinkContainer" ref={linkedInDivRef}>
                        <img id="linkedInImage" className="linkImage" src={linkedInURL}></img>
                        <Link id="linkedInURL" target="_blank" to={profileData?.linkedInURL ?? ''} >{profileData?.linkedInURL ?? ''}</Link>
                    </div>


                    <div id="instagramContainer" className="profileLinkContainer" ref={instagramDivRef}>
                        <img id="instagramImage" className="linkImage" src={instagramURL}></img>
                        <Link id="instagramURL" target="_blank" to={profileData?.instagramURL ?? ''}>{profileData?.instagramURL ?? ''}</Link>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default UserProfile;