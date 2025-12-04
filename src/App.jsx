import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import './App.css';

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
