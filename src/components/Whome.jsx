import pupilsIcon from "../images/whome__pupils-icon.svg";
import migrants from "../images/whome__migrants-icon.svg";
import business from "../images/whome__business-icon.svg";
import students from "../images/whome__students-icon.svg";
import message from "../images/whome__message-icon.svg";
import travelers from "../images/whome__travelers-icon.svg";

function Whome() {
    return (
        <section className="whome">
            <div className="whome__column">
                <h2 className="whome__title">Кому подойдет <span className="whome__span">L2GO</span></h2>
                <p className="whome__text">Language to go подойдет всем, кто хочет за короткий срок качественно изменить свою жизнь, освоив иностранный язык.</p>
                <button className="whome__submit-btn">Попробовать бесплатно</button>
            </div>

            <div className="whome-item__container">
                <div className="whome-item">
                    <img className="whome-item__icon" src={pupilsIcon} alt="" />
                    <h3 className="whome-item__title">Школьникам</h3>
                    <p className="whome-item__text">Сдать выпускные экзамены или поступить в ВУЗ.</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={migrants} alt="" />
                    <h3 className="whome-item__title">Эмигрантам</h3>
                    <p className="whome-item__text">Адаптироваться в новой стране, создать конкурентное преимущество и трудоустроиться</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={business} alt="" />
                    <h3 className="whome-item__title">Бизнесменам</h3>
                    <p className="whome-item__text">Завести полезные знакомства среди иностранцев и масштабировать бизнес</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={students} alt="" />
                    <h3 className="whome-item__title">Студентам</h3>
                    <p className="whome-item__text">Переехать на обучение в другую страну или найти высокооплачеваемую работу</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={message} alt="" />
                    <h3 className="whome-item__title">Общительным</h3>
                    <p className="whome-item__text">Создать счастливую семью с иностранцем и интегрироваться в новое общество</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={travelers} alt="" />
                    <h3 className="whome-item__title">Путешественникам</h3>
                    <p className="whome-item__text">Свободно общаться и находить новых друзей, решать бытовые вопросы и спорные ситуации</p>
                </div>
            </div>
        </section>
    );
}

export default Whome;
