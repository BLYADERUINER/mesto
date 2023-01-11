const showError = function (input, object) { // функция показа ошибки
    const error = document.querySelector(`#${input.id}-error`); // находим с помощью шаблонных строк ошибку
    error.classList.add(object.errorClass); // добавить класс показывающий ошибку
    error.textContent = input.validationMessage; // текст ошибки равен сообщению дефолтной ошибки
    input.classList.add(object.inputErrorClass); // добавить класс показывающий подчеркивания ошибки
};


const hideError = function (input, object) { // функция скрытия ошибки
    const error = document.querySelector(`#${input.id}-error`); // находим с помощью шаблонных строк ошибку
    error.classList.remove(object.errorClass); // убираем класс показывающую ошибку
    error.textContent = '';  // ошибка пустая
    input.classList.remove(object.inputErrorClass); // убираем класс ошибки подчеркивания
};


const checkValidityInput = function (input, object) { // функция проверки на валидность ввода
    if (!input.validity.valid) { // если инпут не валиден
        showError(input, object); // показать ошибку
    } else { // иначе
        hideError(input, object); // спрятать ошибку
    }
};


const checkValidityForm = function (inputList) { // функция проверки валидности всей формы
    return inputList.every(function (input) { // если все инпуты соответствуют валидности
        return input.validity.valid; // возвращаем их
    });
};


const disablingSubmitButton = function (submitButton, object) { // функция отключения кнопки submit
    submitButton.classList.add(object.inactiveButtonClass); // добавляем класс отключенной кнопки
    submitButton.disabled = 'disabled'; // добавляем атрибут дisabled
};


const enablingSubmitButton = function (submitButton, object) { // функция включения кнопки submit
    submitButton.classList.remove(object.inactiveButtonClass); // удаляем класс отключенной кнопки
    submitButton.disabled = ''; // атрибут disabled пуст
};


const changeSubmitButton = function (inputList, submitButton, object) { // функция проверки submit кнопки
    if (!checkValidityForm(inputList)) { // если кнопка не валидна форме
        disablingSubmitButton(submitButton, object); // отключить ее
    } else { // иначе
        enablingSubmitButton(submitButton, object); // включить ее
    }
};


const resetSubmitButton = function (inputList, submitButton, object) { // функция сброса кнопки после reset
    setTimeout(function () {
        changeSubmitButton(inputList, submitButton, object); // вызываем функцию после 0s reset
    }, 0);
};


const setEventListeners = function (form, object) { // функция прослушивания событий
    const inputList = Array.from(form.querySelectorAll(object.inputSelector)); // находим массив всех инпутов
    const submitButton = form.querySelector(object.submitButtonSelector); // находим кнопку отправки в форме
    changeSubmitButton(inputList, submitButton, object); // деактивируем при первой загрузке кнопку

    form.addEventListener('reset', function () { // после reset form
        resetSubmitButton(inputList, submitButton, object); // reset кнопку отправки
    });

    inputList.forEach(function (input) { // проходимся по инпутам
        input.addEventListener('input', function () { // вешая на каждый инпут
            checkValidityInput(input, object); // функцию валидности ввода
            changeSubmitButton(inputList, submitButton, object); // функцию валидности кнопки формы
        });
    });
};


const enableValidation = function (object) { // функция включения валидации
    const formList = Array.from(document.querySelectorAll(object.formSelector)); // находим массив форм на странице
    console.log(formList);
    formList.forEach(function (form) { // проходимся по ним
      console.log(form);
        form.addEventListener('submit', function (event) { // и добавляем каждой форме обработчик
            event.preventDefault(); // отменяем с помощью метода переход после отправки
        });
        setEventListeners(form, object); // накидываем функцию прослушки на формы
    });
};


enableValidation({
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__input',
    submitButtonSelector: '.pop-up__button-save',
    inactiveButtonClass: 'pop-up__button-save_disabled',
    inputErrorClass: 'pop-up__input_type_error',
    errorClass: 'pop-up__error_visible'
});
