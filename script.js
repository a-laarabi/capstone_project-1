// ##########  menu  ##########

const hamburger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-link');
const xButton = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  xButton.classList.add('active');
  hamburger.classList.add('active');
});

menuLink.forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('active');
  xButton.classList.remove('active');
  hamburger.classList.remove('active');
}));

xButton.addEventListener('click', () => {
  menu.classList.remove('active');
  xButton.classList.remove('active');
  hamburger.classList.remove('active');
});

// ##########  equestrian  ##########

const people = document.querySelector('.equestrian-ul');
const more = document.querySelector('.more');

const equestrian = [
  {
    name: 'abdelkebir ouaddar',
    specialty: 'Show jumping',
    image: 'img/ouddar.jpeg',
    age: '59',
    description: 'Moroccan equestrian. He competed at the 2016 Summer Olympics in the individual jumping event, in which he tied for 50th place',
  },

  {
    name: 'Charlotte Dujardin',
    specialty: 'Dressage',
    image: 'img/Charlotte_Dujardin.jpeg',
    age: '36',
    description: 'British dressage rider, equestrian and writer. A multiple World and Olympic champion, Dujardin has been described as the dominant dressage rider of her era.',
  },

  {
    name: 'Kent Farrington',
    specialty: 'Show jumping',
    image: 'img/Kent_Farrington.jpeg',
    age: '41',
    description: 'professional show jumping rider for the United States. He is one of the top ranked riders in the world.',
  },

  {
    name: 'McLain Ward',
    specialty: 'Show jumping',
    image: 'img/mclain-ward.jpeg',
    age: '46',
    description: 'American show jumping competitor and four-time Olympic medalist.',
  },

  {
    name: 'Ashley Nicoll',
    specialty: 'Dressage',
    image: 'img/Ashley.jpeg',
    age: '59',
    description: 'Canadian-born equestrian specializing in dressage, who has been representing the United States since 2017.',
  },

  {
    name: 'Lillie Keenan',
    specialty: 'Show jumping',
    image: 'img/Lillie-Keenan.jpeg',
    age: '25',
    description: 'American show jumping rider. As a junior rider she won the ASPCA Maclay Finals.',
  },
];

const buildToDom = (i, arr) => {
  arr.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.classList.add('equestrian-li');
    if (i >= 768) { newLi.classList.add('hidden'); }
    newLi.innerHTML = `
        <img src="${element.image}" alt="${element.name}">
          <ul>
            <li><h4 class="equestrian-name">${element.name}</h4></li>
            <li><p class="equestrian-job">${element.specialty}</p></li>
            <hr class="hr-equestrian">
            <li class="old">${element.age} years old</li>
            <li>${element.description}</li>
          </ul>
        `;
    people.appendChild(newLi);
  });
};

const windowWidth = window.screen.width;
people.innerHTML = '';
if (windowWidth < 768) {
  buildToDom(windowWidth, equestrian.slice(0, 2));
  more.addEventListener('click', () => {
    if (more.textContent === 'MORE ') {
      buildToDom(windowWidth, equestrian.slice(2));
      more.innerHTML = 'LESS <i class="fa fa-angle-up"></i>';
    } else if (more.textContent === 'LESS ') {
      people.innerHTML = '';
      buildToDom(windowWidth, equestrian.slice(0, 2));
      more.innerHTML = 'MORE <i class="fa fa-angle-down"></i>';
    }
  });
} else {
  buildToDom(windowWidth, equestrian);
  more.parentElement.removeChild(more);
}
