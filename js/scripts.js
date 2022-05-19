document.addEventListener ('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  document.querySelectorAll('.section-how__nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.section-how__detail').forEach(function (tabContent) {
        tabContent.classList.remove('section-how__detail-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('section-how__detail-active');
    });
  });

  let menu;
  let burger = document.querySelector('.header__burger');
  burger.addEventListener('click', function(){
    menu = document.querySelector('.header_burger-block');
    menu.classList.add('is-active');
  });

  let closeMenu =  document.querySelector('.header__burger-menu-close ');
  closeMenu.addEventListener('click', function(){
    menu.classList.remove('is-active');
  });

  let MainBtnSearch =  document.querySelector('#MainBtnSearch');
  let FormSearch = document.querySelector('#FormSearch');
  MainBtnSearch.addEventListener('click', function() {
    MainBtnSearch.classList.add('search-inactive');
    FormSearch.classList.add('search-active');
  });

  let CloseSearch = document.querySelector('#CloseSearch');
  CloseSearch.addEventListener('click', function() {
    CloseSearch.addEventListener('click', function() {
      MainBtnSearch.classList.remove('search-inactive');
      FormSearch.classList.remove('search-active');
    });
  });

  document.querySelectorAll('.section-faq__item-header').forEach(function (question){
    question.addEventListener('focus', function() {
      question.parentNode.classList.add('section-faq__list-item-focus');
    });
  });
  document.querySelectorAll('.section-faq__item-header').forEach(function (question){
    question.addEventListener('blur', function() {
      question.parentNode.classList.remove('section-faq__list-item-focus');
    });
  });

  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      active: true,
      collapsible: true,
      heightStyle:'content',
    });
  });
});

