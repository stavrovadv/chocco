let hamburger = document.querySelector('.hamburger-menu__wrap');
let nav  = document.querySelector('.nav');
let items = document.querySelectorAll('.nav__item');

hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', function(){
  if(nav.hasAttribute('class', '.nav--active')){
    toggleMenu();
  }
});

function toggleMenu(){
  hamburger.classList.toggle('hamburger-menu__wrap--active');
  nav.classList.toggle('nav--active');

  if(document.body.style.overflow!=="hidden"){
    document.body.style.overflow="hidden";
  }
  else{
    document.body.removeAttribute('style');
  }
}