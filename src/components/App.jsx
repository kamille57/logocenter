import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={(element = { Main })} />
      </Routes>

      {<Footer />}
    </div>
  );
}

export default App;
