'use strict';

(function () {

  var footerNavigation = document.querySelector('.footer__navigation');
  var navigationWrapper = document.querySelector('.navigation__wrapper');
  var footerContacts = document.querySelector('.footer__contacts');
  var contactsWrapper = document.querySelector('.contacts__wrapper');
  var navigationSite = document.querySelector('.navigation_site');
  var contactsOffice = document.querySelector('.contacts__office');

  var openSiteMenu = function () {
    footerNavigation.addEventListener('click', function (evt) {
      evt.preventDefault();
      contactsWrapper.classList.add('footer__hidden');
      contactsOffice.classList.remove('navigation__open');
      navigationWrapper.classList.toggle('footer__hidden');
      navigationSite.classList.toggle('navigation__open');
    });
  };
  openSiteMenu();

  var openOfficeMenu = function () {
    footerContacts.addEventListener('click', function (evt) {
      evt.preventDefault();
      navigationWrapper.classList.add('footer__hidden');
      navigationSite.classList.remove('navigation__open');
      contactsWrapper.classList.toggle('footer__hidden');
      contactsOffice.classList.toggle('navigation__open');
    });
  };
  openOfficeMenu();

  IMask(document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

  IMask(document.getElementById('popup-phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });

})();
