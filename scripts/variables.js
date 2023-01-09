// pop-up PROFILE-EDIT;
export const popupProfileEdit = document.querySelector('.pop-up_profile-edit'); // поп-пуп редактирования профиля
export const popupCloseProfileEdit = popupProfileEdit.querySelector('.pop-up__button-close'); // закрытиe поп-пуп профиля

// pop-up ELEMENTS-CARD;
export const popupElementsCard = document.querySelector('.pop-up_elements'); // поп-пуп карточки
export const popupCloseElementsCard = popupElementsCard.querySelector('.pop-up__button-close'); // закрытие поп-пуп карточек

// Profile section
const profileSection = document.querySelector('.profile'); // секция профиль
export const popupOpenProfileEdit = profileSection.querySelector('.profile__button-edit'); // кнопка (open) редактирования профиля
export const popupOpenElementsCard = profileSection.querySelector('.profile__button-add'); // кнопка (open) добавления карточек
export const profileName = profileSection.querySelector('.profile__name'); // имя профиля
export const profileStatus = profileSection.querySelector('.profile__status'); // статуса профиля

// pop-up Form-Edit
export const popupEditForm = document.forms['popupFormProfile']; // форма поппуп (edit profile)
export const nameInputEdit = popupEditForm.querySelector('.pop-up__input_name_edit'); // ввод имени поп-пуп (edit profile)
export const statusInputEdit = popupEditForm.querySelector('.pop-up__input_status_edit'); // ввод статуса поп-пуп (edit profile)

// pop-up Add-Card
export const popupAddCardForm = document.forms['popupFormCard']; // форма поппуп (add card)
export const nameCardInput = popupAddCardForm.querySelector('.pop-up__input_name_card'); // ввод названия карты
export const imageLinkCardInput = popupAddCardForm.querySelector('.pop-up__input_link_image'); // ввод ссылки на картинку

// pop-up Image Card
export const popupCardImage = document.querySelector('.pop-up_card-image'); // поппуп Картинки карточки
export const popupCloseCardImage = popupCardImage.querySelector('.pop-up__button-close'); // кнопка close поппуп карточки картинок
export const popupImage = popupCardImage.querySelector('.pop-up__image'); // картинка попуп
export const popupFigcaption = popupCardImage.querySelector('.pop-up__figcaption'); // подпись к картинке

// Elements section
export const elementsSection = document.querySelector('.elements'); // секция Карточек
// const elementCardTemplate = document.querySelector('#card').content.querySelector('.element'); // шаблон Карт
