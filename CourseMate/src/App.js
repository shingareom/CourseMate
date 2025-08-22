// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Register from "./component/Auth/Register";
import Login from "./component/Auth/Login";
import Explore from "./component/Explore/Explore";
import Courses from "./component/Courses/Courses"; // Make sure this path matches your folder structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/courses" element={<Courses />} /> {/* Added new route */}
      </Routes>
    </Router>
  );
}

export default App;
