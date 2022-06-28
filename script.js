// ##########  menu  ##########

const hamburger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('active');
  menu.classList.add('active');
  // if (menu.classList.contains('active')) {
  //   menu.classList.remove('active');
  // }
});

menuLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));

// hamburger.classList.contains('active')

// ##########  equestrian  ##########

const equestrian = [
  {
    name: 'abdelkebir ouaddar',
    expert: '',
    image: '',
    age: '',
  },

  {
    name: 'Kent Farrington',
    expert: '',
    image: '',
    age: '',
  },

  {
    name: 'McLain Ward',
    expert: '',
    image: '',
    age: '',
  },

  {
    name: 'Laura Kraut',
    expert: '',
    image: '',
    age: '',
  },

  {
    name: 'Margie Engle',
    expert: '',
    image: '',
    age: '',
  },

  {
    name: 'Adrienne Sternlicht',
    expert: '',
    image: '',
    age: '',
  },
];