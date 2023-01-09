import { popupCardImage, popupImage, popupFigcaption} from './variables.js';
import { openPopup } from './index.js';



export class Card {
  constructor(data, templateSelector){
    this._title = data.name;
    this._imageLink = data.link;
    this._templateSelector = templateSelector;
  };


  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };


  _handleToggleLikes() {
    this._element.querySelector('.element__button').classList.toggle('element__button_active');
  };


  _handleDeleteCard() {
    this._element.closest('.element').remove();
  };


  _handleOpensImageOnClick() {
    popupImage.src = this._imageLink; // пусть поппуп картинка равна картинке карточке
    popupImage.alt = this._title; // альтернативный текст равен тексту карточке
    popupFigcaption.textContent = this._title; // подпись равна тексту карточке
    openPopup(popupCardImage); // открываем попап картинки
  };

  _setEventListeners() {
    // this._element.querySelector('.element__button').addEventListener('click', toggleCard);
    this._element.querySelector('.element__button').addEventListener('click', () => {
      this._handleToggleLikes();
    });


    // this._element.querySelector('.element__button-bin').addEventListener('click', deleteCard);
    this._element.querySelector('.element__button-bin').addEventListener('click', () => {
      this._handleDeleteCard();
    });


    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpensImageOnClick();
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').src = this._imageLink;
    this._element.querySelector('.element__image').alt = this._title;

    return this._element;
  };
};
