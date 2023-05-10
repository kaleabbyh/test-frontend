/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Songs from "./pages/Songs";
import Header from "./components/Header";
import AddSong from "./pages/AddSong";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Songs />} />
      </Routes>
    </Router>
  );
}

export default App;
