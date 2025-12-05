import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import { ProfilesContextProvider } from "./Context/ProfilesContext";
import './App.css';

function App() {

  return (
    <ProfilesContextProvider>
      <Router>
        <div id="RootDiv">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />}/>
          </Routes>
        </div>
      </Router>
    </ProfilesContextProvider>
  );
}

export default App;