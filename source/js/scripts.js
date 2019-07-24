$(function () {

  // mainNav
  var mainNav = document.querySelector('.main-nav');
  var mainNavToggle = mainNav.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--no-js');
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');

  mainNavToggle.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

  new WOW().init();

});
