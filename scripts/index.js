// pop-up PROFILE-EDIT;
const popupProfileEdit = document.querySelector('.pop-up_profile-edit'); // поп-пуп редактирования профиля
const popupCloseProfileEdit = popupProfileEdit.querySelector('.pop-up__button-close'); // закрытиe поп-пуп профиля

// pop-up ELEMENTS-CARD;
const popupElementsCard = document.querySelector('.pop-up_elements'); // поп-пуп карточки
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
const popupCardImage = document.querySelector('.pop-up_card-image'); // поппуп Картинки карточки
const popupCloseCardImage = popupCardImage.querySelector('.pop-up__button-close'); // кнопка close поппуп карточки картинок
const popupImage = popupCardImage.querySelector('.pop-up__image'); // картинка попуп
const popupFigcaption = popupCardImage.querySelector('.pop-up__figcaption'); // подпись к картинке

// Elements section
const elementsSection = document.querySelector('.elements'); // секция Карточек
const elementCardTemplate = document.querySelector('#card').content.querySelector('.element'); // шаблон Карт

// popups Array
const popups = document.querySelectorAll('.pop-up');


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
  cardImage.alt = card.name; // и альтернативный текст из названия

  cardImage.addEventListener('click', function () { // обработчик клика по картинке
    popupImage.src = cardImage.src; // пусть поппуп картинка равна картинке карточке
    popupImage.alt = cardTitle.textContent; // альтернативный текст равен тексту карточке
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


let openedPopup; // открытый  попап

const openPopup = function (popup) {   // функция открытия ред.профиля
  popup.classList.add('pop-up_opened');
  openedPopup = popup;  // откртый попап равен попапу
  closePopupOnOverlay();
  document.addEventListener('keyup', closePopupOnEsc); // добавим обработчик на откртый попап, который закрываеться по клику на esc
};


const closePopup = function (popup) {   // функция закрытия ред.профиля
  popup.classList.remove('pop-up_opened');
  openedPopup = null; // открытый попап null
  document.removeEventListener('keyup', closePopupOnEsc); // убираем обработчик
};


const closePopupOnOverlay = function () { // функция закрытия вне модального окна
  popups.forEach(function(item) { // проходимся по массиву
    item.addEventListener('click', (event) => { // добавляем на каждый попап обработчик
          if (event.target === event.currentTarget) { // если клик происходит вне
            closePopup(item); // закрываем
          }
      });
   });
};


const closePopupOnEsc = function (element) { // функция закрытия на escape
  if (element.key === 'Escape') { // если происходит событие на кнопку
    closePopup(openedPopup); // закрыть открытый попап
  }
};


const submitFormCard = function (event) { // функция отправки формы карт
  event.preventDefault();
  const card = { // создаем переменную с объектами
    name: nameCardInput.value, // имя массива равно вводу
    link: imageLinkCardInput.value  // ссылка массива равно вводу
  }

  renderCard(card, elementsSection); // создаем с помощью функции карточку и добавляем в

  closePopup(popupElementsCard);
  popupAddCardForm.reset();
};


const submitFormProfile = function (event) { // функция отправки формы редактирования
  event.preventDefault();
  profileName.textContent = nameInputEdit.value; // значение переменной равно вводу
  profileStatus.textContent = statusInputEdit.value;

  closePopup(popupProfileEdit); // Закрываем после отправки
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

// popupElementsCard.addEventListener('click', closePopupOnOverlay); // обработчки закрытия вне окна

popupEditForm.addEventListener('submit', submitFormProfile); // обработчик отправки формы ред.профиля
popupAddCardForm.addEventListener('submit', submitFormCard); // Обработчик отправки формы добавления карточек
