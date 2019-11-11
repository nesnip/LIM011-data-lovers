import POTTER from './data/potter/potter.js';
import { orderAscDescByName, filterFemMale, filterHogwartsStudents, filterHogwartsProfesors } from './data.js';

const insertPotterCharacter = document.querySelector('#insertPotterCharacter');
const filteredStudentsMenu = document.querySelector('#subOption1');
const filteredProfesorsMenu = document.querySelector('#subOption2');
const principalContainer = document.querySelector('#principalContainer');
const potterStudents = document.querySelector('#potterStudents');
const potterProfesors = document.querySelector('#potterProfesors');
const filterSelection = document.querySelector('#filterSelection');
const secondFilter = document.querySelector('#secondFilter');
const thirdFilter = document.querySelector('#thirdFilter');

function showPotterCharacters (data) {
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
  });
  return templatePotter;
};

insertPotterCharacter.innerHTML = showPotterCharacters(POTTER);

filterSelection.addEventListener('change', () => {
  const orderByName = orderAscDescByName(POTTER, filterSelection.value);
  insertPotterCharacter.innerHTML = showPotterCharacters(orderByName);
  const filterByGender = filterFemMale(POTTER, filterSelection.value);
  insertPotterCharacter.innerHTML = showPotterCharacters(filterByGender);
});

filteredStudentsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterProfesors.classList.add('hide');
  potterStudents.classList.remove('hide');
  potterProfesors.classList.add('hide');
  const filterByStudent = filterHogwartsStudents(POTTER);
  document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(filterByStudent);
  secondFilter.addEventListener('change', () => {
    const orderAscDesc = orderAscDescByName(filterByStudent, secondFilter.value);
    document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(orderAscDesc);
    const genderFilter = filterFemMale(filterByStudent, secondFilter.value);
    document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(genderFilter);
  });
});

filteredProfesorsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.remove('hide');
  const filterByStaff = filterHogwartsProfesors(POTTER);
  document.querySelector('#insertPotterProfesors').innerHTML = showPotterCharacters(filterByStaff);
  thirdFilter.addEventListener('change', () => {
    const ascDescOrder = orderAscDescByName(filterByStaff, thirdFilter.value);
    document.querySelector('#insertPotterProfesors').innerHTML = showPotterCharacters(ascDescOrder);
    const genderStaff = filterFemMale(filterByStaff, thirdFilter.value);
    document.querySelector('#insertPotterProfesors').innerHTML = showPotterCharacters(genderStaff);
  });
});



/* else if (filterSelection.value == 'Gryffindor') {
    const filteredGryffindor =  [...POTTER].filter(item => item.house === 'Gryffindor');
    console.log(filteredGryffindor);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredGryffindor);
  } else if (filterSelection.value == 'Slytherin') {
    const filteredSlytherin = [...POTTER].filter(item => item.house === 'Slytherin');
    console.log(filteredSlytherin);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredSlytherin);
  } else if (filterSelection.value == 'Hufflepuff') {
    const filteredHufflepuff = [...POTTER].filter(item => item.house === 'Hufflepuff');
    console.log(filteredHufflepuff);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredHufflepuff);
  } else if (filterSelection.value == 'Ravenclaw') {
    const filteredRavenclaw = [...POTTER].filter(item => item.house === 'Ravenclaw');
    console.log(filteredRavenclaw);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredRavenclaw);
  } });*/


