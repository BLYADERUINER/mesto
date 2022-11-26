// pop-up PROFILE-EDIT;
const popupProfileEdit = document.querySelector('.pop-up__profile-edit'); // поп-пуп редактирования профиля
const popupCloseProfileEdit = popupProfileEdit.querySelector('.pop-up__button-close'); // закрытиe поп-пуп профиля

// pop-up ELEMENTS-CARD;
const popupElementsCard = document.querySelector('.pop-up__elements'); // поп-пуп карточки
const popupCloseElementsCard = popupElementsCard.querySelector('.pop-up__button-close'); // закрытие поп-пуп карточек

// Profile section
const profileSection = document.querySelector('.profile'); // секция профиль
const popupOpenProfileEdit = profileSection.querySelector('.profile__button-edit'); // кнопка (open) редактирования профиля
const popupOpenElementsCard = profileSection.querySelector('.profile__button-add'); // кнопка (open) добавления карточек
const profileName = profileSection.querySelector('.profile__name'); // имя профиля
const profileStatus = profileSection.querySelector('.profile__status'); // статуса профиля

// pop-up Form-Edit
const popupEditForm = popupProfileEdit.querySelector('#form-edit-profile'); // форма поппуп (edit profile)
const nameInputEdit = popupEditForm.querySelector('.pop-up__input_name_edit'); // ввод имени поп-пуп (edit profile)
const statusInputEdit = popupEditForm.querySelector('.pop-up__input_status_edit'); // ввод статуса поп-пуп (edit profile)

// pop-up Add-Card
const popupAddCardForm = popupElementsCard.querySelector('#form-add-card'); // форма поппуп (add card)
const nameCardInput = popupAddCardForm.querySelector('.pop-up__input_name_card'); // ввод названия карты
const imageLinkCardInput = popupAddCardForm.querySelector('.pop-up__input_link_image'); // ввод ссылки на картинку

// pop-up Image Card
const popupCardImage = document.querySelector('.pop-up__card-image'); // поппуп Картинки карточки
const popupCloseCardImage = popupCardImage.querySelector('.pop-up__button-close'); // кнопка close поппуп карточки картинок
const popupImage = popupCardImage.querySelector('.pop-up__image'); // картинка попуп
const popupFigcaption = popupCardImage.querySelector('.pop-up__figcaption'); // подпись к картинке

// // Elements section
const elementsSection = document.querySelector('.elements'); // секция Карточек
const elementCardTemplate = document.querySelector('#card').content; // шаблон Карт



const cardsArray = [ // массив начальных карт
  {
    name: 'Карачевск',
    link: '../images/elements/image1.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: '../images/elements/image2.jpg'
  },
  {
    name: 'Домбай',
    link: '../images/elements/image3.jpg'
  },
  {
    name: 'Камчатка',
    link: '../images/elements/image4.jpg'
  },
  {
    name: 'Байкал',
    link: '../images/elements/image5.jpg'
  },
  {
    name: 'Антарктика',
    link: '../images/elements/image6.jpg'
  }
];

const likedCard = function (event) { // функция лайка
  event.target.classList.toggle('element__button_active'); // переключаем класс лайка
};

const binCard = function (event) { // функция удаления карточки
  event.target.closest('.element').remove(); // находим родитель карточки и удаляем
};

const createCard = function (card) { // функция создания карты
  const cardElement = elementCardTemplate.cloneNode(true); // копируем шаблон
  const cardTitle = cardElement.querySelector('.element__title'); // создаем название
  const cardImage = cardElement.querySelector('.element__image'); // а так же ссылку
  const buttonLikeCard = cardElement.querySelector('.element__button'); // кнопку лайка
  const buttonBinCard = cardElement.querySelector('.element__button-bin'); // кнопку удаления карточки

  buttonLikeCard.addEventListener('click', likedCard); // обработаем лайк по клику
  buttonBinCard.addEventListener('click', binCard); // а так же удаление карточки

  cardTitle.textContent = card.name; // обозначаем равенство значению имени массива
  cardImage.src = card.link; // и ссылку на картинку

  cardImage.addEventListener('click', function () { // обработчик клика по картинке
    popupImage.src = cardImage.src; // пусть поппуп картинка равна картинке карточке
    popupFigcaption.textContent = cardTitle.textContent; // подпись равна тексту карточке
    openPopup(popupCardImage); // открываем попап картинки
  });

  return cardElement;
};

const renderCard = function (element, cardsContainer) { // функция рендера карт
  const card = createCard(element); // создаем карту
  cardsContainer.prepend(card); // передаем карту в начало контейнера
};

cardsArray.forEach(function (item) { // перебираем массив
  renderCard(item, elementsSection); // создаем и добавляем карточки в секцию
});


const openPopup = function (popup) {   // функция открытия ред.профиля
  popup.classList.add('pop-up_opened');
  if (popupProfileEdit) { // если открывается ред.проф
   nameInputEdit.value = profileName.textContent;
   statusInputEdit.value = profileStatus.textContent;
  }
};

const closePopup = function (popup) {   // функция закрытия ред.профиля
  popup.classList.remove('pop-up_opened');
};

// const closePopupOnOverlay = function(event) {   // функция закрытия ред.профиля вне модального окна
//   if (event.target === event.currentTarget) {
//     closePopup();
//   }
// }

const popupAddCardFormSubmitHandler = function (event) { // функция отправки формы карт
  event.preventDefault();
  const card = { // создаем переменную с объектами
    name: nameCardInput.value, // имя массива равно вводу
    link: imageLinkCardInput.value  // ссылка массива равно вводу
  }

  renderCard(card, elementsSection); // создаем с помощью функции карточку и добавляем в
  closePopup(popupElementsCard);
};

const popupEditFormSubmitHandler = function (event) { // функция отправки формы редактирования
  event.preventDefault();
  profileName.textContent = nameInputEdit.value; // значение переменной равно вводу
  profileStatus.textContent = statusInputEdit.value;

  closePopup(popupProfileEdit); // Закрываем после отправки
};


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

popupCloseCardImage.addEventListener('click', function () { // обработчик закрытия поппупы картинки
  closePopup(popupCardImage);
});

// popupProfileEdit.addEventListener('click', closePopupOnOverlay); // обработчки закрытия вне окна

popupEditForm.addEventListener('submit', popupEditFormSubmitHandler); // обработчик отправки формы ред.профиля
popupAddCardForm.addEventListener('submit', popupAddCardFormSubmitHandler); // Обработчик отправки формы добавления карточек
