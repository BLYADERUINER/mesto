// pop-up PROFILE-EDIT;
const popupProfileEdit = document.querySelector('.pop-up__profile-edit'); // переменная поп-пуп редактирования профиля
const popupCloseProfileEdit = popupProfileEdit.querySelector('.pop-up__button-close'); // переменная закрытия поп-пуп профиля

// pop-up ELEMENTS-CARD;
const popupElementsCard = document.querySelector('.pop-up__elements'); // переменная поп-пуп карточек
const popupCloseElementsCard = popupElementsCard.querySelector('.pop-up__button-close'); // переменная закрытия поп-пуп карточек

// Profile section
const profileSection = document.querySelector('.profile'); // переменная секции профиля
const popupOpenProfileEdit = profileSection.querySelector('.profile__button-edit'); // переменная кнопки (open) редактирования профиля
const popupOpenElementsCard = profileSection.querySelector('.profile__button-add'); // переменная кнопки (open) добавления карточек
const profileName = profileSection.querySelector('.profile__name'); // переменная имя профиля
const profileStatus = profileSection.querySelector('.profile__status'); // переменная статуса профиля

// pop-up Form
const popupFormElement = popupProfileEdit.querySelector('.pop-up__form'); // переменная поппуп формы
const nameInput = popupFormElement.querySelector('.pop-up__input_name_edit'); // переменная ввода имени поп-пуп
const statusInput = popupFormElement.querySelector('.pop-up__input_status_edit'); // переменная ввода статуса поп-пуп

// // Elements section
// const elementCard = document.querySelector('.element');
// const likeButtonCard = elementCard.querySelector('.element__button');


// const likedCard = function (event) {
//   console.log(event.target);
//   event.target.classList.toggle('element__button_active');
// };

// likeButtonCard.addEventListener('click', likedCard);

const openPopup = function (popup) {   // функция открытия ред.профиля
  popup.classList.add('pop-up_opened');
  if (popupProfileEdit) { // если открывается ред.проф
   nameInput.value = profileName.textContent;
   statusInput.value = profileStatus.textContent;
  }
}

const closePopup = function (popup) {   // функция закрытия ред.профиля
  popup.classList.remove('pop-up_opened');
}

// const closePopupOnOverlay = function(event) {   // функция закрытия ред.профиля вне модального окна
//   if (event.target === event.currentTarget) {
//     closePopup();
//   }
// }


// const likeButtons = document.querySelectorAll('.element__button'); //ебаные лайки

// for (let likeButton of likeButtons) {
//   likeButton.addEventListener('click', function() {
//     alert('Нахуй ты жмал ?');
//     likeButton.classList.toggle('element__button_active');
//   })
// }




function popupFormSubmitHandler (evt) { // функция отправки
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup();
}


popupOpenProfileEdit.addEventListener('click', function () { // обработчик открытия попупы редактирования профиля
  openPopup(popupProfileEdit);
});

popupCloseProfileEdit.addEventListener('click', function () { // обработчик закрытия попупы ред.проф.
  closePopup(popupProfileEdit);
});

popupOpenElementsCard.addEventListener('click', function () { // обработчик открытия попупы добавления элементов карт
  openPopup(popupElementsCard);
})

popupCloseElementsCard.addEventListener('click', function () { // обработчик закрытия попупы элементов карт
  closePopup(popupElementsCard);
});

// popupProfileEdit.addEventListener('click', closePopupOnOverlay);

popupFormElement.addEventListener('submit', popupFormSubmitHandler); // обработчик отправки формы ред.профиля
