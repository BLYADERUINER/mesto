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

// // Elements section
const elementsSection = document.querySelector('.elements'); // секция Карточек
const elementCardTemplate = document.querySelector('#card').content; // шаблон Карт

const cardsArray = [ // массив начальных карт
  {
    name: 'Карачевск',
    link: './images/elements/image1.png'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/elements/image2.png'
  },
  {
    name: 'Домбай',
    link: './images/elements/image3.png'
  },
  {
    name: 'Камчатка',
    link: './images/elements/image4.jpg'
  },
  {
    name: 'Байкал',
    link: './images/elements/image5.jpg'
  },
  {
    name: 'Антарктика',
    link: './images/elements/image6.jpg'
  }
];

const createCard = function (card) { // функция создания карты
  const cardElement = elementCardTemplate.cloneNode(true); // копируем шаблон
  const cardTitle = cardElement.querySelector('.element__title'); // создаем название
  const cardImage = cardElement.querySelector('.element__image'); // а так же ссылку
  cardTitle.textContent = card.name; // обозначаем равенство значению имени массива
  cardImage.src = card.link; // и ссылку на картинку

  return cardElement;
};

const renderCard = function (element, cardsContainer) { // функция рендера карт
  const card = createCard(element); // создаем карту
  cardsContainer.append(card); // передаем карту в конец контейнера
};

cardsArray.forEach(function (item) { // перебираем массив
  renderCard(item, elementsSection); // создаем и добавляем карточки в секцию
});



// const likedCard = function (event) {
//   console.log(event.target);
//   event.target.classList.toggle('element__button_active');
// };

// likeButtonCard.addEventListener('click', likedCard);


const openPopup = function (popup) {   // функция открытия ред.профиля
  popup.classList.add('pop-up_opened');
  if (popupProfileEdit) { // если открывается ред.проф
   nameInputEdit.value = profileName.textContent;
   statusInputEdit.value = profileStatus.textContent;
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

const popupAddCardFormSubmitHandler = function (event) { // функция отправки формы карт
  event.preventDefault();
  const card = { // создаем переменную с объектами
    name: nameCardInput.value,
    link: imageLinkCardInput.value
  }

  renderCard(card, elementsSection); // создаем с помощью функции карточку и добавляем
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

// popupProfileEdit.addEventListener('click', closePopupOnOverlay);

popupEditForm.addEventListener('submit', popupEditFormSubmitHandler); // обработчик отправки формы ред.профиля
popupAddCardForm.addEventListener('submit', popupAddCardFormSubmitHandler); // Обработчик отправки формы добавления карточек
