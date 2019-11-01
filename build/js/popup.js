'use strict';

var ESC_KEYCODE = 27;
var popupButton = document.querySelector('.header__contact_button');
var popup = document.querySelector('.popup');
var closePopup = popup.querySelector('.popup__close');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var phone = popup.querySelector('[name=phone]');
var textarea = popup.querySelector('[name=textarea]');
var overlay = document.querySelector('.overlay');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}


popupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
  if (storage) {
    login.value = storage;
  }
  login.focus();
});

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !phone.value || !textarea.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    if (popup.classList.contains('hidden')) {
      popup.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  }
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
});
