import "./Login.css";
import { useContext, useEffect, useRef } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { currentUser, login } = useContext(ProfilesContext);
    const navigate = useNavigate();
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const handleLogin = () => {
        let username = login(usernameInputRef.current.value, passwordInputRef.current.value);

        if (username ?? false) {
            navigate("/home");
        } else {
            console.log(`invalid credentials`);
            // TODO: Show error message 
        }
    };

    return (
        <div id="MainDiv">
            <div id="HeaderDiv">
                <p id="HeaderText">Profiles</p>
                <p id="SloganText">A simple & lightweight social media app.</p>
            </div>
            <br /> <br />
            <div id="LoginDiv">
                <br />
                <input id="UsernameInput" type="text" placeholder="Username" ref={usernameInputRef}/>
                <br />
                <input id="PasswordInput" type="password" placeholder="Password" ref={passwordInputRef}/>
                <br />
                <button id="LoginButton" type="button" onClick={handleLogin}>Log In</button>
                <br />
            </div>
        </div>
    );
};

export default Login;