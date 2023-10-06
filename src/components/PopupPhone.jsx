import { useState } from 'react';
import popupMainImage from '../images/popup-phone__main-image.svg';
import popupWaLogo from '../images/popup-phone__wa-logo.svg';
import popupCloseButton from '../images/popup-phone__close-button.svg';

function PopupPhone () {
  const [isOpen, setIsOpen] = useState(false);

  const openPopupPhone = () => {
    setIsOpen(true);
  };

  const closePopupPhone = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="popup-phone">
          <div className="popup-phone__content">
            <img className="popup-phone__close-button" src={popupCloseButton} onClick={closePopupPhone} />
            <h2 className='popup-phone__title'>Запишитесь на диагностику</h2>
            <a className='popup-phone__link' href="https://wa.me/+79624406412"><img className='popup-phone__wa-logo' src={popupWaLogo} alt="Лого Вотсап" /></a> {/* поменять номер */}
            <img className='popup-phone__main-image' src={popupMainImage}/>
          </div>
        </div>
      )}
      <button onClick={openPopupPhone} className='popup-phone__open-button'>Бесплатная диагностика</button>
    </div>
  );
}

export default PopupPhone;
