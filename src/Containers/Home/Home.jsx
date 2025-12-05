import "./Home.css"
import Header from "../../Component/Header/Header.jsx"
import MenueItem from "../../Component/MenuItem/MenuItem.jsx";

const Home = () => {

    return (
        <div id="mainDiv">
            <Header/>
            <div id="contentDiv">
                <MenueItem title="Messages" navigationPath="/"/>
                <MenueItem title="Edit Profile" navigationPath="/"/>
            </div>
        </div>
    )
};

export default Home;