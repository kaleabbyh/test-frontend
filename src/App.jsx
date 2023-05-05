/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Songs from "./pages/Songs";

function App() {
  return (
    <Router>
      holla
      <Routes>
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </Router>
  );
}

export default App;
