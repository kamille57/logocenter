import whyMethods from "../images/whyEffectiveMethods.jpg";
import whyTime from "../images/whyFlexibleTime.jpg";
import whyPlay from "../images/whyPlayFormat.jpg";
import whyContact from "../images/whyParentContact.jpg";
import numberOne from "../images/bage.svg";
import numberTwo from "../images/bage2.svg";
import numberThree from "../images/bage3.svg";
import numberFour from "../images/bage4.svg";

function Why() {
    return (
        <section className="why">
            <h2 className="why__heading">Почему быстро приходит результат?</h2>
            <article className="why__article">
                <div className="why__description">
                    <img className="why__number" src={numberOne} alt="Цифра один." />
                    <h3 className="why__title">Интересные игровые занятия</h3>
                    <p className="why__text">Наши занятия проходят в больших светлых кабинетах с использованием авторских игровых методик. Ребенок свободно перемещается, а не сидит 45 минут за столом.</p>
                </div>
                <img className="why__img" src={whyMethods} alt="дети изучают урок в игровой форме." />
            </article>
            <article className="why__article">
                <img className="why__img" src={whyContact} alt="Логопед взаимодействует с родителями." />
                <div className="why__description">
                    <img className="why__number" src={numberTwo} alt="Цифра два." />
                    <h3 className="why__title">Взаимодействие с родителями</h3>
                    <p className="why__text">Наибольший результат от терапии достигается при синергии логопеда и родителей. Логопед выступает проводником родителей в речь детей.</p>
                </div>
            </article>
            <article className="why__article">
                <div className="why__description">
                    <img className="why__number" src={numberThree} alt="Цифра три." />
                    <h3 className="why__title">Удобное время для занятий</h3>
                    <p className="why__text">В нашей команде только лучшие логопеды! Любое выбранное время для занятий будет удачным.</p>
                </div>
                <img className="why__img" src={whyTime} alt="Картинка календаря." />
            </article>
            <article className="why__article">
                <img className="why__img" src={whyPlay} alt="Логопед показывает интересную методику детям." />
                <div className="why__description">
                    <img className="why__number" src={numberFour} alt="Цифра четыре." />
                    <h3 className="why__title">Эффективная методика речевой терапии</h3>
                    <p className="why__text">Наша методика основывается на правилах мотивационной игры, где цель ребенка не выполнить упражнение, а достигнуть игрового результата. Ребенок сам не замечает, как учится в игре.</p>
                </div>
            </article>
        </section>
    );
}

export default Why;
