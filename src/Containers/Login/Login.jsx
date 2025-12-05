import "./Login.css"

const Login = () => {

    return (
        <div id="MainDiv">
            <div id="HeaderDiv">
                <p id="HeaderText">Profiles</p>
                <p id="SloganText">A simple & lightweight social media app.</p>
            </div>
            <br/> <br/>
            <div id="LoginDiv">
                <br/>
                <input id="UsernameInput" type="text" placeholder="Username"/> 
                <br/>
                <input id="PasswordInput" type="password" placeholder="Password"/> 
                <br/>
                <button id="LoginButton" type="button">Log In</button>
                <br/>
            </div>
        </div>
    )
};

export default Login;