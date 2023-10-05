import pupilsIcon from "../images/whome__pupils-icon.svg";
import migrants from "../images/whome__migrants-icon.svg";
import business from "../images/whome__business-icon.svg";
import students from "../images/whome__students-icon.svg";

function Whome() {
    return (
        <section className="whome">
            <div className="whome__column">
                <h2 className="whome__title">Кому подойдет <span className="whome__span">SLOGOWell</span></h2>
                <p className="whome__text">Тем кто ценит время и понимает, что в игре ребенок быстрее развивается и достигает результатов.</p>
            </div>

            <div className="whome-item__container">
                <div className="whome-item">
                    <img className="whome-item__icon" src={pupilsIcon} alt="" />
                    <h3 className="whome-item__title">Активным родителям</h3>
                    <p className="whome-item__text">Занятия проходят в то время, которое удобно родителям и детям.</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={migrants} alt="" />
                    <h3 className="whome-item__title">Родителям непосед</h3>
                    <p className="whome-item__text">Авторские игровые методики могут завлечь даже самых активных детей.</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={business} alt="" />
                    <h3 className="whome-item__title">Заботливым родителям</h3>
                    <p className="whome-item__text">Все игры и пособия на занятиях имеют сертификацию или деревянную основу!</p>
                </div>
                <div className="whome-item">
                    <img className="whome-item__icon" src={students} alt="" />
                    <h3 className="whome-item__title">Нетерпеливым родителям</h3>
                    <p className="whome-item__text">Опыт наших логопедов позволяет справиться с проблемой максимально быстро.</p>
                </div>
            </div>
        </section>
    );
}

export default Whome;
