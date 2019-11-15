/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import POTTER from './data/potter/potter.js';
import {
  orderByNameAndGender,
  filterHogwartsStudents,
  filterHogwartsProfesors,
  searchCharacters,
  filterPotterHouse,
} from './data.js';

const insertPotterCharacter = document.querySelector('#insertPotterCharacter');
const filteredStudentsMenu = document.querySelector('#subOption1');
const filteredProfesorsMenu = document.querySelector('#subOption2');
const filterHouseGryffindor = document.querySelector('#subOption3');
const valuePotterGryffindor = document.getElementById('subOption3').getAttribute('data-value');
const filterHouseSlytherin = document.querySelector('#subOption4');
const valuePotterSlytherin = document.getElementById('subOption4').getAttribute('data-value');
const filterHouseHufflepuff = document.querySelector('#subOption5');
const valuePotterHufflepuff = document.getElementById('subOption5').getAttribute('data-value');
const filterHouseRavenclaw = document.querySelector('#subOption6');
const valuePotterRavenclaw = document.getElementById('subOption6').getAttribute('data-value');
const principalContainer = document.querySelector('#principalContainer');
const potterStudents = document.querySelector('#potterStudents');
const potterProfesors = document.querySelector('#potterProfesors');
const potterGryffindor = document.querySelector('#potterGryffindor');
const potterSlytherin = document.querySelector('#potterSlytherin');
const potterHufflepuff = document.querySelector('#potterHufflepuff');
const potterRavenclaw = document.querySelector('#potterRavenclaw');
const filterSelection = document.querySelector('#filterSelection');
const secondFilter = document.querySelector('#secondFilter');
const thirdFilter = document.querySelector('#thirdFilter');
const fourthFilter = document.querySelector('#fourthFilter');
const fifthFilter = document.querySelector('#fifthFilter');
const principalLogo = document.querySelector('.HPLogoAlterno');

principalLogo.addEventListener('click', () => {
  principalContainer.classList.remove('hide');
  potterProfesors.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
});

function showPotterCharacters(data) {
  let templatePotter = '';
  data.map((obj) => {
    templatePotter += `
    <div class="card flex-container flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src = '${obj.image}' alt = "Image" class="photoCharacter"/>
          <h2 class="fontNameCharacter">${obj.name}</h2>
        </div>
        <div class="flip-card-back">
          <h1>${obj.name}</h1>
          <p>Nacimiento: ${obj.dateOfBirth}</p>
          <p>Especie: ${obj.species}</p>
          <p>Estatus de sangre: ${obj.ancestry}</p>
          <p>Casa: ${obj.house}</p>
          <p>Patronus: ${obj.patronus}</p>
          <p>Varita:</p>
          <li>Madera: ${obj.wand.wood}</li>
          <li>Núcleo: ${obj.wand.core}</li>
          <li>Largo: ${obj.wand.length}</li>
          <p>Actor: ${obj.actor}</p>
        </div>
      </div>
    </div>`;
    return templatePotter;
  });
  return templatePotter;
}

insertPotterCharacter.innerHTML = showPotterCharacters(POTTER);

filterSelection.addEventListener('change', () => {
  const arrByNameOrGender = orderByNameAndGender(POTTER, filterSelection.value);
  insertPotterCharacter.innerHTML = showPotterCharacters(arrByNameOrGender);
});

filteredStudentsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterStudents.classList.remove('hide');
  potterProfesors.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  const filterByStudent = filterHogwartsStudents(POTTER);
  document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(filterByStudent);
  secondFilter.addEventListener('change', () => {
    const arrStudByNameGender = orderByNameAndGender(filterByStudent, secondFilter.value);
    document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(arrStudByNameGender);
  });
});

filteredProfesorsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.remove('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  const filterByStaff = filterHogwartsProfesors(POTTER);
  document.querySelector('#insertPotterProfesors').innerHTML = showPotterCharacters(filterByStaff);
  thirdFilter.addEventListener('change', () => {
    const arrProfByNameGender = orderByNameAndGender(filterByStaff, thirdFilter.value);
    document.querySelector('#insertPotterProfesors').innerHTML = showPotterCharacters(arrProfByNameGender);
  });
});

const texto = document.querySelector('#search');

texto.addEventListener('keyup', () => {
  const arrSearchCharacter = searchCharacters(POTTER, texto.value);
  insertPotterCharacter.innerHTML = showPotterCharacters(arrSearchCharacter);
});

filterHouseGryffindor.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterGryffindor.classList.remove('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  const filterByGryffindor = filterPotterHouse(POTTER, valuePotterGryffindor);
  document.querySelector('#insertPotterGryffindor').innerHTML = showPotterCharacters(filterByGryffindor);
  fourthFilter.addEventListener('change', () => {
    const arrProfByNameGender = orderByNameAndGender(filterByGryffindor, fourthFilter.value);
    document.querySelector('#insertPotterGryffindor').innerHTML = showPotterCharacters(arrProfByNameGender);
  });
});

filterHouseSlytherin.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.remove('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  const filterBySlytherin = filterPotterHouse(POTTER, valuePotterSlytherin);
  document.querySelector('#insertPotterSlytherin').innerHTML = showPotterCharacters(filterBySlytherin);
  fifthFilter.addEventListener('change', () => {
    const arrProfByNameGender = orderByNameAndGender(filterBySlytherin, fifthFilter.value);
    document.querySelector('#insertPotterSlytherin').innerHTML = showPotterCharacters(arrProfByNameGender);
  });
});

filterHouseHufflepuff.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.remove('hide');
  const filterByHufflepuff = filterPotterHouse(POTTER, valuePotterHufflepuff);
  document.querySelector('#insertPotterHufflepuff').innerHTML = showPotterCharacters(filterByHufflepuff);
});

filterHouseRavenclaw.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.remove('hide');
  const filterByRavenclaw = filterPotterHouse(POTTER, valuePotterRavenclaw);
  document.querySelector('#insertPotterRavenclaw').innerHTML = showPotterCharacters(filterByRavenclaw);
});
