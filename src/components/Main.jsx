import React from "react";
import centralLogo from "../images/logo.svg"

function Main() {
  return (
    <main id="main" className="content">
        <section className="central">
        <img className="central__logo" src={centralLogo} alt="логотип центра" />
        <p className="central__description">С нами ваши дети будут говорить Горько, а не Койко!</p>
        </section>

    </main>
  );
}

export default Main;
