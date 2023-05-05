/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Songs from "./pages/Songs";
import UpdateUser from "./components/songComponent/AddSong";

function App() {
  return (
    <Router>
      holla
      <Routes>
        <Route path="/songs" element={<Songs />} />
        <Route path="/" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
