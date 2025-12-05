import "./Login.css";
import { useContext, useEffect, useRef } from "react";
import { ProfilesContext } from "../../Context/ProfilesContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { getCurrentUsername, login } = useContext(ProfilesContext);
    const navigate = useNavigate();
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const errorLabelRef = useRef(null);

    useEffect(() => {
        // navigate home if user is currently logged in
        if (getCurrentUsername() != null) {
            navigate("/home");
        } else {
            console.log(`not navigating home`);
        }
    })

    const handleLogin = () => {
        let username = login(usernameInputRef.current.value, passwordInputRef.current.value);

        if (username ?? false) {
            navigate("/home");
            errorLabelRef.current.style.visibility = 'hidden';
        } else {
            errorLabelRef.current.style.visibility = 'visible';
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
            <p id="ErrorLabel" ref={errorLabelRef}>Invalid credentials, please try again.</p>
        </div>
    );
};

export default Login;