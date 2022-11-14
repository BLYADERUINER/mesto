const popupElement = document.querySelector('.pop-up');
const popupCloseButtonElement = popupElement.querySelector('.pop-up__button-close');
const profileSection = document.querySelector('.profile');
const popupOpenButtonElement = profileSection.querySelector('.profile__button-edit');

const openPopup = function() {   // функция открытия ред.профиля
  popupElement.classList.add('pop-up_opened');
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}

const closePopup = function() {   // функция закрытия ред.профиля
  popupElement.classList.remove('pop-up_opened');
}

const closePopupOnOverlay = function(event) {   // функция закрытия ред.профиля вне модального окна
  if (event.target === event.currentTarget) {
    closePopup();
  }
}


const popupFormElement = popupElement.querySelector('.pop-up__form');
const profileName = profileSection.querySelector('.profile__name');
const profileStatus = profileSection.querySelector('.profile__status');
const nameInput = popupFormElement.querySelector('.pop-up__input-name');
const statusInput = popupFormElement.querySelector('.pop-up__input-status');


function popupFormSubmitHandler (evt) { // функция отправки
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupOnOverlay);
popupFormElement.addEventListener('submit', popupFormSubmitHandler);
