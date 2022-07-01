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
const media = window.screen.width;

const equestrian = [
  {
    name: 'abdelkebir ouaddar',
    specialty: 'Show jumping',
    image: 'img/ouddar.jpeg',
    age: '59',
    description: 'Moroccan equestrian. He competed at the 2016 Summer Olympics in the individual jumping event, in which he tied for 50th place',
    position: 'left',
  },

  {
    name: 'Charlotte Dujardin',
    specialty: 'Dressage',
    image: 'img/Charlotte_Dujardin.jpeg',
    age: '36',
    description: 'British dressage rider, equestrian and writer. A multiple World and Olympic champion, Dujardin has been described as the dominant dressage rider of her era.',
    position: 'right',
  },
  
  {
    name: 'Kent Farrington',
    specialty: 'Show jumping',
    image: 'img/Kent_Farrington.jpeg',
    age: '41',
    description: 'professional show jumping rider for the United States. He is one of the top ranked riders in the world.',
    position: 'left',
  },

  {
    name: 'McLain Ward',
    specialty: 'Show jumping',
    image: 'img/mclain-ward.jpeg',
    age: '46',
    description: 'American show jumping competitor and four-time Olympic medalist.',
    position: 'right',
  },

  {
    name: 'Ashley Nicoll',
    specialty: 'Dressage',
    image: 'img/Ashley.jpeg',
    age: '59',
    description: 'Canadian-born equestrian specializing in dressage, who has been representing the United States since 2017.',
    position: 'left',
  },

  {
    name: 'Lillie Keenan',
    specialty: 'Show jumping',
    image: 'img/Lillie-Keenan.jpeg',
    age: '25',
    description: 'American show jumping rider. As a junior rider she won the ASPCA Maclay Finals.',
    position: 'right',
  },
];

if (media < 768) {
  people.innerHTML = `
        <li class="equestrian-li left">
          
          <img src="img/ouddar.jpeg" alt="ouddar">

          <ul>
            <li><h4 class="equestrian-name">abdelkebir ouaddar</h4></li>
            <li><p class="equestrian-job">Show jumping</p></li>
            <hr class="hr-equestrian">
            <li class="old">59 years old</li>
            <li>Moroccan equestrian. He competed at the 2016 Summer Olympics in the individual jumping event, in which he tied for 50th place</li>
          </ul>
        </li>

        <li class="equestrian-li right">
          <img src="img/Charlotte_Dujardin.jpeg" alt="Kent Farrington">
          <ul>
            <li><h4 class="equestrian-name">Charlotte Dujardin</h4></li>
            <li><p class="equestrian-job">Dressage</p></li>
            <hr class="hr-equestrian">
            <li class="old">36 years old</li>
            <li>British dressage rider, equestrian and writer. A multiple World and Olympic champion, Dujardin has been described as the dominant dressage rider of her era.</li>
          </ul>
        </li>
        `;

more.addEventListener('click', () => {
  if (more.textContent === 'MORE ') {
    for (let i = 2; i < equestrian.length; i += 1) {
      const newLi = document.createElement('li');
      newLi.classList.add('equestrian-li');
      newLi.classList.add(equestrian[i].position);
      newLi.innerHTML = `
        <img src="${equestrian[i].image}" alt="${equestrian[i].name}">
          <ul>
            <li><h4 class="equestrian-name">${equestrian[i].name}</h4></li>
            <li><p class="equestrian-job">${equestrian[i].specialty}</p></li>
            <hr class="hr-equestrian">
            <li class="old">${equestrian[i].age} years old</li>
            <li>${equestrian[i].description}</li>
          </ul>
        `;
      people.appendChild(newLi);
      more.innerHTML = 'LESS <i class="fa fa-angle-up"></i>';
    }
  } else if (more.textContent === 'LESS ') {
    people.innerHTML = `
        <li class="equestrian-li left">
          <img src="img/ouddar.jpeg" alt="ouddar">
          <ul>
            <li><h4 class="equestrian-name">abdelkebir ouaddar</h4></li>
            <li><p class="equestrian-job">Show jumping</p></li>
            <hr class="hr-equestrian">
            <li class="old">59 years old</li>
            <li>Moroccan equestrian. He competed at the 2016 Summer Olympics in the individual jumping event, in which he tied for 50th place</li>
          </ul>
      </li>

        <li class="equestrian-li right">
          <img src="img/Charlotte_Dujardin.jpeg" alt="Kent Farrington">
          <ul>
            <li><h4 class="equestrian-name">Charlotte Dujardin</h4></li>
            <li><p class="equestrian-job">Dressage</p></li>
            <hr class="hr-equestrian">
            <li class="old">36 years old</li>
            <li>British dressage rider, equestrian and writer. A multiple World and Olympic champion, Dujardin has been described as the dominant dressage rider of her era.</li>
          </ul>
        </li>
        `;
    more.innerHTML = 'MORE <i class="fa fa-angle-down"></i>';
  }
});

} else if (media >= 768) {
  for (let i = 0; i < equestrian.length; i += 1) {
    const newLi = document.createElement('li');
    newLi.classList.add('equestrian-li');
    newLi.classList.add(equestrian[i].position);
    newLi.innerHTML = `
      <img src="${equestrian[i].image}" alt="${equestrian[i].name}">
        <ul>
          <li><h4 class="equestrian-name">${equestrian[i].name}</h4></li>
          <li><p class="equestrian-job">${equestrian[i].specialty}</p></li>
          <hr class="hr-equestrian">
          <li class="old">${equestrian[i].age} years old</li>
          <li>${equestrian[i].description}</li>
        </ul>
      `;
    people.appendChild(newLi);
}

      more.parentElement.removeChild(more);
}