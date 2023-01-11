export class FromValidator  {
  constructor (objectValidation, form){
    this._objectValidation = objectValidation;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._objectValidation.inputSelector));
    this._submitButton = this._form.querySelector(this._objectValidation.submitButtonSelector);
  };


  _showError(input) {
    const error = this._form.querySelector(`#${input.id}-error`); // находим с помощью шаблонных строк ошибку
    error.classList.add(this._objectValidation.errorClass); // добавить класс показывающий ошибку
    error.textContent = input.validationMessage; // текст ошибки равен сообщению дефолтной ошибки ???
    input.classList.add(this._objectValidation.inputErrorClass); // добавить класс показывающий подчеркивания ошибки ???
  };


  _hideError(input) { // функция скрытия ошибки
    const error = this._form.querySelector(`#${input.id}-error`); // находим с помощью шаблонных строк ошибку
    error.classList.remove(this._objectValidation.errorClass); // убираем класс показывающую ошибку
    error.textContent = '';  // ошибка пустая
    input.classList.remove(this._objectValidation.inputErrorClass); // убираем класс ошибки подчеркивания
  };


  _checkValidityInput(input) { // функция проверки на валидность ввода
    if (!input.validity.valid) { // если инпут не валиден
      this._showError(input); // показать ошибку
    } else { // иначе
      this._hideError(input); // спрятать ошибку
    }
  };


  _checkValidityForm() { // функция проверки валидности всей формы
    return this._inputList.every((input) => { // если все инпуты соответствуют валидности
        return input.validity.valid; // возвращаем их
    });
  };


  _disablingSubmitButton() { // функция отключения кнопки submit
    this._submitButton.classList.add(this._objectValidation.inactiveButtonClass); // добавляем класс отключенной кнопки
    this._submitButton.disabled = 'disabled'; // добавляем атрибут дisabled
  };


  _enablingSubmitButton() { // функция включения кнопки submit
    this._submitButton.classList.remove(this._objectValidation.inactiveButtonClass); // удаляем класс отключенной кнопки
    this._submitButton.disabled = ''; // атрибут disabled пуст
  };


  _changeSubmitButton() { // функция проверки submit кнопки
    if (!this._checkValidityForm()) { // если кнопка не валидна форме
      this._disablingSubmitButton(); // отключить ее
    } else { // иначе
      this._enablingSubmitButton(); // включить ее
    }
  };


  _resetSubmitButton() { // функция сброса кнопки после reset
    setTimeout(() => {
        this._changeSubmitButton(); // вызываем функцию после 0s reset
    }, 0);
  };


  _setEventListeners() { // функция прослушивания событий
    this._changeSubmitButton(); // деактивируем при первой загрузке кнопку

    this._form.addEventListener('reset', () => { // после reset form
        this._resetSubmitButton(); // reset кнопку отправки
    });

    this._inputList.forEach((input) => { // проходимся по инпутам
        input.addEventListener('input', () => { // вешая на каждый инпут
            this._checkValidityInput(input); // функцию валидности ввода
            this._changeSubmitButton(); // функцию валидности кнопки формы
        });
    });
  };


  enableValidation() {
    this._form.addEventListener('submit', (event) => { // и добавляем каждой форме обработчик
        event.preventDefault(); // отменяем с помощью метода переход после отправки
    });

    this._setEventListeners(); // накидываем функцию прослушки на формы
  };
};


export const objectForValidation = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__button-save',
  inactiveButtonClass: 'pop-up__button-save_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
};
