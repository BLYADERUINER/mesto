import { cardsArray } from './arrays.js';
import { Card } from './Card.js';
import { popupProfileEdit, popupCloseProfileEdit, popupElementsCard, popupCloseElementsCard,
  popupOpenProfileEdit, popupOpenElementsCard, profileName, profileStatus, popupEditForm, nameInputEdit, statusInputEdit, popupAddCardForm,
  nameCardInput, imageLinkCardInput, popupCardImage, popupCloseCardImage, elementsSection } from './variables.js';



const renderCard = (element, cardsContainer) => { // функция рендера карт
  const card = new Card (element, '#card'); // создаем карту
  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement); // передаем карту в начало контейнера
};

cardsArray.forEach(function (item) { // перебираем массив
  renderCard(item, elementsSection); // создаем и добавляем карточки в секцию
});




let openedPopup; // открытый  попап


const closePopupOnOverlay = function (event) { // функция закрытия вне модального окна
  if (event.target === event.currentTarget) { // если клик происходит вне
    closePopup(openedPopup); // закрываем
  }
};


const closePopupOnEsc = function (element) { // функция закрытия на escape
  if (element.key === 'Escape') { // если происходит событие на кнопку
    closePopup(openedPopup); // закрыть открытый попап
  }
};


export const openPopup = function (popup) {   // функция открытия ред.профиля
  popup.classList.add('pop-up_opened');
  openedPopup = popup;  // откртый попап равен попапу
  popup.addEventListener('mousedown', closePopupOnOverlay);
  document.addEventListener('keyup', closePopupOnEsc); // добавим обработчик на откртый попап, который закрываеться по клику на esc
};


const closePopup = function (popup) {   // функция закрытия ред.профиля
  popup.classList.remove('pop-up_opened');
  openedPopup = null; // закрытый попап равен null
  popup.removeEventListener('mousedown', closePopupOnOverlay);
  document.removeEventListener('keyup', closePopupOnEsc); // убираем обработчик
};


const submitFormCard = function () { // функция отправки формы карт
  const card = { // создаем переменную с объектами
    name: nameCardInput.value, // имя массива равно вводу
    link: imageLinkCardInput.value  // ссылка массива равно вводу
  };

  renderCard(card, elementsSection); // создаем с помощью функции карточку и добавляем в

  closePopup(popupElementsCard);
  popupAddCardForm.reset(); // очищаем форму
};


const submitFormProfile = function () { // функция отправки формы редактирования
  profileName.textContent = nameInputEdit.value; // значение переменной равно вводу
  profileStatus.textContent = statusInputEdit.value;

  closePopup(popupProfileEdit); // Закрываем после отправки
  popupEditForm.reset(); // очищаем форму
};


popupOpenProfileEdit.addEventListener('click', function () { // обработчик открытия попупы редактирования профиля
  nameInputEdit.value = profileName.textContent;
  statusInputEdit.value = profileStatus.textContent;
  openPopup(popupProfileEdit);
});

popupCloseProfileEdit.addEventListener('click', function () { // обработчик закрытия попупы ред.проф.
  closePopup(popupProfileEdit);
});

popupOpenElementsCard.addEventListener('click', function () { // обработчик открытия попупы добавления элементов карт
  openPopup(popupElementsCard);
});

popupCloseElementsCard.addEventListener('click', function () { // обработчик закрытия попупы элементов карт
  closePopup(popupElementsCard);
});

popupCloseCardImage.addEventListener('click', function () { // обработчик закрытия поппупы картинки
  closePopup(popupCardImage);
});


popupEditForm.addEventListener('submit', submitFormProfile); // обработчик отправки формы ред.профиля
popupAddCardForm.addEventListener('submit', submitFormCard); // Обработчик отправки формы добавления карточек
