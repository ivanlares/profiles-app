import "./EditProfile.css"
import Header from "../../Component/Header/Header.jsx"
import userAvatar from "../../Assets/UserImages/user-avatar.svg"

const EditProfile = () => {

    return (
        <div id="editProfileRootDiv">
            <Header />
            <div className="contentDiv">
                <div className="editProfileItem">
                    <img className="profile-icon-medium" src={userAvatar}></img>
                    <input className="edit-profile-input" type="url" placeholder="Profile URL"></input>
                </div>

                <div className="editProfileItem">
                    <textarea id="edit-profile-about-input" type="text" placeholder="About me"></textarea>
                </div>

                <div className="editProfileItem">
                    <input className="edit-profile-input" type="url" placeholder="LinkedIn"></input>
                </div>

                <div className="editProfileItem">
                    <input className="edit-profile-input" type="url" placeholder="Instagram"></input>
                </div>

                <div className="editProfileItem">
                    <textarea className="edit-profile-embed" type="url" placeholder="Spotify Embed"></textarea>
                </div>
            </div>
        </div>
    )
};

export default EditProfile;