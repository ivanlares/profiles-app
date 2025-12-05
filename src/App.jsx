import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import { ProfilesContextProvider } from "./Context/ProfilesContext";
import './App.css';

function App() {

  let loggedIn = false;

  return (
    <ProfilesContextProvider>
      <Router>
        <div id="RootDiv">
          <Routes>
            <Route path="/" element={loggedIn ? <Home /> : <Login />} />
          </Routes>
        </div>
      </Router>
    </ProfilesContextProvider>
  );
}

export default App;