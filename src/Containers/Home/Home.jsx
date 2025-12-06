import "./Home.css"
import Header from "../../Component/Header/Header.jsx"
import MenuItem from "../../Component/MenuItem/MenuItem.jsx";
import { useContext, useEffect, useRef } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext";

const Home = () => {

    const { getCurrentUsername } = useContext(ProfilesContext);

    return (
        <div id="mainDiv">
            <Header />
            <div className="contentDiv">
                <MenuItem title="Messages" navigationPath="/" />
                <MenuItem title="Following" navigationPath="/home/following" />
                <MenuItem title="Edit Profile" navigationPath="/home/edit-profile" />
                <MenuItem title="View Profile" navigationPath={`/profile/${getCurrentUsername()}`} />
            </div>
        </div>
    )
};

export default Home;