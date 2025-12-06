import "./EditProfile.css"
import Header from "../../Component/Header/Header.jsx"
import userAvatar from "../../Assets/UserImages/user-avatar.svg"
import { ProfilesContext } from "../../Context/ProfilesContext.jsx"
import { useContext, useEffect, useRef, useState } from "react";

const EditProfile = () => {

    const { getCurrentUsername, getProfileData } = useContext(ProfilesContext);
    const [photoURL, setPhotoURL] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [linkedInURL, setLinkedInURL] = useState('');
    const [instagramURL, setInstagramURL] = useState('');
    const [spotifyEmbed, setSpotifyEmbed] = useState('');

    useEffect( () => {
        let profileData = getProfileData(getCurrentUsername())
        if (profileData != null) {
            setPhotoURL(profileData.photoURL ?? '');
            setAboutMe(profileData.aboutMe ?? '');
            setLinkedInURL(profileData.linkedInURL ?? '');
            setInstagramURL(profileData.instagramURL ?? '');
            setSpotifyEmbed(profileData.spotifyEmbed ?? '');
        }
    }, [])

    return (
        <div id="editProfileRootDiv">
            <Header />
            <div className="contentDiv">
                <div className="editProfileItem">
                    <img className="profile-icon-medium" src={userAvatar}></img>
                    <input className="edit-profile-input" type="url" placeholder="Photo URL" defaultValue={photoURL}></input>
                </div>

                <div className="editProfileItem">
                    <textarea id="edit-profile-about-input" type="text" placeholder="About me" defaultValue={aboutMe}></textarea>
                </div>

                <div className="editProfileItem">
                    <input className="edit-profile-input" type="url" placeholder="LinkedIn" defaultValue={linkedInURL}></input>
                </div>

                <div className="editProfileItem">
                    <input className="edit-profile-input" type="url" placeholder="Instagram" defaultValue={instagramURL}></input>
                </div>

                <div className="editProfileItem">
                    <textarea className="edit-profile-embed" type="url" placeholder="Spotify Embed" defaultValue={spotifyEmbed}></textarea>
                </div>
            </div>
        </div>
    )
};

export default EditProfile;