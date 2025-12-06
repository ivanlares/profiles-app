import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import EditProfile from "./Containers/EditProfile/EditProfile";
import Following from "./Containers/Following/Following";
import { ProfilesContextProvider } from "./Context/ProfilesContext";
import UserProfile from "./Containers/UserProfile/UserProfile";
import './App.css';

function App() {

  return (
    <ProfilesContextProvider>
      <Router>
        <div id="RootDiv">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/home/edit-profile" element={<EditProfile />} />
            <Route path="/profile/:username" element={<UserProfile />} />
            <Route path="/home/following" element={<Following />} />
          </Routes>
        </div>
      </Router>
    </ProfilesContextProvider>
  );
}

export default App;