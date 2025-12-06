import "./Following.css"
import Header from "../../Component/Header/Header.jsx"
import { useContext, useEffect, useRef } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext";

const Following = () => {

    const { followingProfileData } = useContext(ProfilesContext);

    useEffect( () => {
        console.log(followingProfileData);
    }, []);

    return (
        <div id="mainDiv">
            <Header />
            <div className="contentDiv">
                <p>Hello World</p>
                <p>What is up!</p>
                <p>Zup</p>
            </div>
        </div>
    )
};

export default Following;