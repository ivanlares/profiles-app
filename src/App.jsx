import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import './App.css';

function App() {

  let loggedIn = false;

  return (
    <Router>
      <div id="RootDiv">
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
