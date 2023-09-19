import React from "react";
import centralLogo from "../images/logo.svg"

function Main() {
  return (
    <main id="main" className="content">
        <section className="central-section">
        <img className="central-section__logo" src={centralLogo} alt="логотип центра" />
        <p className="central-section__description">С нами ваши дети будут говорить Горько, а не Койко!</p>
        </section>

    </main>
  );
}

export default Main;
