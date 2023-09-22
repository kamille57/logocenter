import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Whome from "./Whome.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Whome/>
      <Footer />
    </div>
  );
}

export default App;
