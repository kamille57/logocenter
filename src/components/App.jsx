import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main.jsx";
import Whome from "./Whome.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="page">
      <Main />
      <Whome/>
      <Footer />
    </div>
  );
}

export default App;
