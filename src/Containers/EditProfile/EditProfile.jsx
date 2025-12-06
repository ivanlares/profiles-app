import "./EditProfile.css"
import Header from "../../Component/Header/Header.jsx"
import userAvatar from "../../Assets/UserImages/user-avatar.svg"
import { ProfilesContext } from "../../Context/ProfilesContext.jsx"
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    const { getCurrentUsername, getProfileData, updateProfileData } = useContext(ProfilesContext);
    const [photoURL, setPhotoURL] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [linkedInURL, setLinkedInURL] = useState('');
    const [instagramURL, setInstagramURL] = useState('');
    const [spotifyEmbed, setSpotifyEmbed] = useState('');

    const photoURLRef = useRef(null);
    const aboutMeRef = useRef(null);
    const linkedInRef = useRef(null);
    const instagramRef = useRef(null);
    const spotifyRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        let profileData = getProfileData(getCurrentUsername())
        if (profileData != null) {
            setPhotoURL(profileData.photoURL ?? '');
            setAboutMe(profileData.aboutMe ?? '');
            setLinkedInURL(profileData.linkedInURL ?? '');
            setInstagramURL(profileData.instagramURL ?? '');
            setSpotifyEmbed(profileData.spotifyEmbed ?? '');
        }
        console.log(`currentUsername: ${getCurrentUsername()} profileData: ${profileData}`)
    }, [])

    const handleUpdate = () => {
        let photoURLValue = (photoURLRef.current.value == '') ? null : photoURLRef.current.value
        let aboutMeValue = (aboutMeRef.current.value == '') ? null : aboutMeRef.current.value
        let linkedInValue = (linkedInRef.current.value == '') ? null : linkedInRef.current.value
        let instagramValue = (instagramRef.current.value == '') ? null : instagramRef.current.value
        let spotifyValue = (spotifyRef.current.value == '') ? null : spotifyRef.current.value

        updateProfileData(
            {
                "photoURL": photoURLValue,
                "aboutMe": aboutMeValue,
                "linkedInURL": linkedInValue,
                "instagramURL": instagramValue,
                "spotifyEmbed": spotifyValue
            }
        )

        navigate("/home")
    };

    return (
        <div id="editProfileRootDiv">
            <Header />
            <div className="contentDiv">
                <div className="editProfileItem">
                    <img className="profile-icon-medium" src={(photoURL != '') ? photoURL : userAvatar}></img>
                    <input className="edit-profile-input" type="url" placeholder="Photo URL" defaultValue={photoURL} ref={photoURLRef}></input>
                </div>

                <div className="editProfileItem">
                    <textarea id="edit-profile-about-input" type="text" placeholder="About me" defaultValue={aboutMe} ref={aboutMeRef}></textarea>
                </div>

                <div className="editProfileItem">
                    <input className="edit-profile-input" type="url" placeholder="LinkedIn" defaultValue={linkedInURL} ref={linkedInRef}></input>
                </div>

                <div className="editProfileItem">
                    <input className="edit-profile-input" type="url" placeholder="Instagram" defaultValue={instagramURL} ref={instagramRef}></input>
                </div>

                <div className="editProfileItem">
                    <textarea className="edit-profile-embed" type="url" placeholder="Spotify Embed" defaultValue={spotifyEmbed} ref={spotifyRef}></textarea>
                </div>

                <div className="editProfileItem">
                    <button id="updateButton" onClick={handleUpdate}>Update</button>
                </div>

            </div>
        </div>
    )
};

export default EditProfile;