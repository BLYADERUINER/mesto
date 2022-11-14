const popupElement = document.querySelector('.pop-up'); // переменная поп-пуп
const popupCloseButtonElement = popupElement.querySelector('.pop-up__button-close'); // переменная кнопки закрытия поп-пуп
const profileSection = document.querySelector('.profile'); // переменная секции профиля
const popupOpenButtonElement = profileSection.querySelector('.profile__button-edit'); // переменная кнопки профиля редактировать

const openPopup = function() {   // функция открытия ред.профиля
  popupElement.classList.add('pop-up_opened');
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}

const closePopup = function() {   // функция закрытия ред.профиля
  popupElement.classList.remove('pop-up_opened');
}

// const closePopupOnOverlay = function(event) {   // функция закрытия ред.профиля вне модального окна
//   if (event.target === event.currentTarget) {
//     closePopup();
//   }
// }


const popupFormElement = popupElement.querySelector('.pop-up__form'); // переменная поппуп формы
const profileName = profileSection.querySelector('.profile__name'); // переменная имя профиля
const profileStatus = profileSection.querySelector('.profile__status'); // переменная статуса профиля
const nameInput = popupFormElement.querySelector('.pop-up__input_name_edit'); // переменная ввода имени поп-пуп
const statusInput = popupFormElement.querySelector('.pop-up__input_status_edit'); // переменная ввода статуса поп-пуп



function popupFormSubmitHandler (evt) { // функция отправки
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup();
}



popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
// popupElement.addEventListener('click', closePopupOnOverlay);
popupFormElement.addEventListener('submit', popupFormSubmitHandler);
