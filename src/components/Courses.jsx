import cardItemImg from '../images/courses__card-item__img.svg';
import cardItemImgArrow from '../images/card-item__img-arrow.svg';

function Courses () {
    return (
        <section className="courses">
            <div className="courses__container">
                <div className="courses__title-group">
                    <h1 className="courses__title">Направления речевой терапии</h1>
                    <button className="courses__button">Все курсы??</button>
                </div>
                <div className="courses__grid">
                    <article className="courses__card-item">
                        <div className="card-item__container">
                            <img className="card-item__img" src={cardItemImg} alt='Лого курса' />
                            <h2 className="card-item__title">Запуск речи</h2>
                            <p className="card-item__subtitle">Длительность:<span className="card-item__span">45 минут</span></p>
                            <p className="card-item__subtitle">Этапов:<span className="card-item__span">3 занятия</span></p>
                            <div className='card-item__price-group'>
                                <a className="card-item__link" href='#'>Узнать подробнее<img className="card-item__img-arrow" src={cardItemImgArrow} /></a>
                                <p className="card-item__price">От 1875р.</p>
                            </div>
                        </div>
                    </article>
                    <article className="courses__card-item">
                        <div className="card-item__container">
                            <img className="card-item__img" src={cardItemImg} alt='Лого курса' />
                            <h2 className="card-item__title">Постановка звуков</h2>
                            <p className="card-item__subtitle">Длительность:<span className="card-item__span">45 минут</span></p>
                            <p className="card-item__subtitle">Этапов:<span className="card-item__span">2 занятия</span></p>
                            <div className='card-item__price-group'>
                                <a className="card-item__link" href='#'>Узнать подробнее<img className="card-item__img-arrow" src={cardItemImgArrow} /></a>
                                <p className="card-item__price">От 1875р.</p>
                            </div>
                        </div>
                    </article>
                    <article className="courses__card-item">
                        <div className="card-item__container">
                            <img className="card-item__img" src={cardItemImg} alt='Лого курса' />
                            <h2 className="card-item__title">Заикание</h2>
                            <p className="card-item__subtitle">Длительность:<span className="card-item__span">90 минут</span></p>
                            <p className="card-item__subtitle">Этапов:<span className="card-item__span">3 занятия</span></p>
                            <div className='card-item__price-group'>
                                <a className="card-item__link" href='#'>Узнать подробнее<img className="card-item__img-arrow" src={cardItemImgArrow} /></a>
                                <p className="card-item__price">От 4000р.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Courses;