import { popupCardImage, popupImage, popupFigcaption} from './variables.js';
import { openPopup } from './index.js';



export class Card {
  constructor(data, templateSelector){
    this._title = data.name; // имя карточки массива
    this._imageLink = data.link; // ссылка карточки массива
    this._templateSelector = templateSelector; // template карточки
  };


  _getTemplate() { // метод создания шаблона
    const cardElement = document
      .querySelector(this._templateSelector) // ищем
      .content
      .querySelector('.element') // выбираем нужный
      .cloneNode(true); // клонируем

    return cardElement; // возвращаем
  };


  _handleToggleLikes() { // метод переключения карточки
    this._element.querySelector('.element__button').classList.toggle('element__button_active'); // находим у элемента и добавляем переключатель класса
  };


  _handleDeleteCard() { // метод удаления карточки
    this._element.closest('.element').remove(); // находим у элемента и удаляем карточку
  };


  _handleOpensImageOnClick() { // метод окрытия попуп картинки по клику
    popupImage.src = this._imageLink; // пусть поппуп картинка равна картинке карточке
    popupImage.alt = this._title; // альтернативный текст равен тексту карточке
    popupFigcaption.textContent = this._title; // подпись равна тексту карточке
    openPopup(popupCardImage); // открываем попап картинки
  };

  _setEventListeners() { // метод обработчиков
    // this._element.querySelector('.element__button').addEventListener('click', toggleCard); // альтернатива через функцию
    this._element.querySelector('.element__button').addEventListener('click', () => { // лайк
      this._handleToggleLikes();
    });


    // this._element.querySelector('.element__button-bin').addEventListener('click', deleteCard); // альтернатива через функцию
    this._element.querySelector('.element__button-bin').addEventListener('click', () => { // удаление
      this._handleDeleteCard();
    });


    this._element.querySelector('.element__image').addEventListener('click', () => { // открытие попапа
      this._handleOpensImageOnClick();
    });
  };

  generateCard() { // Открытый метод создания карты
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').src = this._imageLink;
    this._element.querySelector('.element__image').alt = this._title;

    return this._element;
  };
};
