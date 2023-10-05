import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Courses from "./Courses.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <Courses />
    </div>
  );
}

export default App;
