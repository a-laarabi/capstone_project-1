// ##########  menu  ##########

const hamburger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.add('active');
  menu.classList.add('active');
});

menuLink.forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));

// ##########  equestrian  ##########

const people = document.querySelector('.equestrian-ul');
const more = document.querySelector('.more');

const equestrian = [
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

more.addEventListener('click', () => {
  if (more.textContent === 'MORE ') {
    for (let i = 0; i < equestrian.length; i += 1) {
      const newLi = document.createElement('li');
      newLi.classList.add('equestrian-li');
      newLi.innerHTML = `
        <img src="${equestrian[i].image}" alt="${equestrian[i].name}">
          <ul>
            <li><h4>${equestrian[i].name}</h4></li>
            <li><p>${equestrian[i].specialty}</p></li>
            <hr class="hr-equestrian">
            <li>${equestrian[i].age} years old</li>
            <li>${equestrian[i].description}</li>
          </ul>
        `;
      people.appendChild(newLi);
      more.innerHTML = 'LESS <i class="fa fa-angle-up"></i>';
    }
  } else if (more.textContent === 'LESS ') {
    people.innerHTML = `
        <li class="equestrian-li">
          <img src="img/ouddar.jpeg" alt="ouddar">
          <ul>
            <li><h4>abdelkebir ouaddar</h4></li>
            <li><p>Show jumping</p></li>
            <hr class="hr-equestrian">
            <li>59 years old</li>
            <li>Moroccan equestrian. He competed at the 2016 Summer Olympics in the individual jumping event, in which he tied for 50th place</li>
          </ul>
      </li>

        <li class="equestrian-li">
          <img src="img/Charlotte_Dujardin.jpeg" alt="Kent Farrington">
          <ul>
            <li><h4>Charlotte Dujardin</h4></li>
            <li><p>Dressage</p></li>
            <hr class="hr-equestrian">
            <li>36 years old</li>
            <li>British dressage rider, equestrian and writer. A multiple World and Olympic champion, Dujardin has been described as the dominant dressage rider of her era.</li>
          </ul>
        </li>
        `;
    more.innerHTML = 'MORE <i class="fa fa-angle-down"></i>';
  }
});
