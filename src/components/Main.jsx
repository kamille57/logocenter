import React from "react";
import centralLogo from "../images/logo.svg";
import centralOverlay from "../images/background.jpg";

function Main() {
  return (
    <main id="main" className="content">
      <section className="central">
        <div className="central__container">
          <img className="central__overlay" src={centralOverlay}/>
          <img
            className="central__logo"
            src={centralLogo}
            alt="логотип центра"
          />
          <p className="central__description" >
            С нами ваши дети будут говорить Горько, а не Койко!
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;
