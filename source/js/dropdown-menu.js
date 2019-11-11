'use strict';

(function () {

  var navigationTitle = document.querySelector('.navigation__title');
  var navigationWrapper = document.querySelector('.navigation__wrapper');
  var contactsTitle = document.querySelector('.contacts__title');
  var contactsWrapper = document.querySelector('.contacts__wrapper');


  if (window.innerWidth < 767) {
    navigationTitle.addEventListener('click', function (evt) {
      evt.preventDefault();
      navigationWrapper.classList.toggle('footer__hidden');
      navigationTitle.classList.toggle('navigation__title_open');
    });
  }

  if (window.innerWidth < 767) {
    contactsTitle.addEventListener('click', function (evt) {
      evt.preventDefault();
      contactsWrapper.classList.toggle('footer__hidden');
      contactsTitle.classList.toggle('navigation__title_open');
    });
  }

  IMask(document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

  IMask(document.getElementById('popup-phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

})();
