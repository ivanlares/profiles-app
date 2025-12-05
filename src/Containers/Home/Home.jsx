import "./Home.css"
import Header from "../../Component/Header/Header.jsx"
import MenuItem from "../../Component/MenuItem/MenuItem.jsx";
import FollowingMenuItem from "../../Component/FollowingMenuItem/FollowingMenuItem.jsx";

const Home = () => {

    return (
        <div id="mainDiv">
            <Header/>
            <div id="contentDiv">
                <MenuItem title="Messages" navigationPath="/"/>
                <FollowingMenuItem title="Following" navigationPath="/home/following"/>
                <MenuItem title="Edit Profile" navigationPath="/home/edit-profile"/>
            </div>
        </div>
    )
};

export default Home;