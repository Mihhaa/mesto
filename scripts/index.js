//создать переменную всплывающего окна
const popup = document.querySelector('.popup');
//создать переменную открытия окна для кнопки button
const openPopupButton = document.querySelector('.profile__edit-button');
//создать переменную закрытия окна popup
const closePopupButton = document.querySelector('.popup__close');
//внешняя область вокруг popup
const popupOverlay = document.querySelector('.popup__overlay');
// Находим форму в DOM
let formElement = document.querySelector('.form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__input_text_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.popup__input_text_job');// Воспользуйтесь инструментом .querySelector()
// Выберите элементы, куда должны быть вставлены значения полей
let paragraphNam = document.querySelector('.profile__paragraph-nam');
let paragraphJob = document.querySelector('.profile__paragraph-job');


//функция добавления класса открытия popup
function openPopup() {
  popup.classList.add('popup_visible');
  //получить значения textcontent
  let avatarNam = paragraphNam.textContent;
  let avatarJob = paragraphJob.textContent;
  //вставить значения в input
  nameInput.value = avatarNam;
  jobInput.value = avatarJob;
}

//функция удаления класса для закрытия popup
function closePopup() {
  popup.classList.remove('popup_visible');
}

//обработчик события открыть popup
openPopupButton.addEventListener('click', openPopup);
//обработчик события закрыть popup для крестика
closePopupButton.addEventListener('click', closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let nam = nameInput.value;
  let job = jobInput.value;
  // Вставьте новые значения с помощью textContent
  paragraphNam.textContent = nam;
  paragraphJob.textContent = job;

  closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);