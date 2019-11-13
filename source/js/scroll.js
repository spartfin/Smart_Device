'use strict';

(function () {

  var advantages = document.getElementById('advantages');
  var headerScroll = document.querySelector('.header__scroll');

  var headerScrollClick = function () {
    headerScroll.addEventListener('click', function (evt) {
      evt.preventDefault();
      advantages.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  headerScrollClick();

  var question = document.getElementById('question');
  var headerConsultation = document.querySelector('.header__consultation');
  var headerConsultationFree = document.querySelector('.header__consultation_free');

  var headerConsultationClick = function () {
    headerConsultation.addEventListener('click', function (evt) {
      evt.preventDefault();
      question.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  headerConsultationClick();

  var headerConsultationFreeClick = function () {
    headerConsultationFree.addEventListener('click', function (evt) {
      evt.preventDefault();
      question.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  headerConsultationFreeClick();

})();
