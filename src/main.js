/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import POTTER from './data/potter/potter.js';
import {
  orderByNameAndGender,
  filterHogwartsStudents,
  filterHogwartsStaff,
  searchCharacters,
  filterPotterHouse,
  filterWands,
  filterSpells,
} from './data.js';

// Declarando id's donde se pintan los personajes
const insertPotterCharacter = document.querySelector('#insertPotterCharacter');
const searchResults = document.querySelector('#searchResults');

// Declarando id's de las opciones del Menú
const text = document.querySelector('#search');
const filteredStudentsMenu = document.querySelector('#subOption1');
const filteredStaffMenu = document.querySelector('#subOption2');
const filterHouseGryffindor = document.querySelector('#subOption3');
const valuePotterGryffindor = document.getElementById('subOption3').getAttribute('data-value');
const filterHouseSlytherin = document.querySelector('#subOption4');
const valuePotterSlytherin = document.getElementById('subOption4').getAttribute('data-value');
const filterHouseHufflepuff = document.querySelector('#subOption5');
const valuePotterHufflepuff = document.getElementById('subOption5').getAttribute('data-value');
const filterHouseRavenclaw = document.querySelector('#subOption6');
const valuePotterRavenclaw = document.getElementById('subOption6').getAttribute('data-value');
const wandsMenu = document.querySelector('#wandsMenu');
const filterPotterSpells = document.querySelector('#spellsMenu');

// Declarando los id's de los contenedores (pantallas)

const principalContainer = document.querySelector('#principalContainer');
const searchContainer = document.querySelector('#searchContainer');
const potterStudents = document.querySelector('#potterStudents');
const potterStaff = document.querySelector('#potterStaff');
const potterGryffindor = document.querySelector('#potterGryffindor');
const potterSlytherin = document.querySelector('#potterSlytherin');
const potterHufflepuff = document.querySelector('#potterHufflepuff');
const potterRavenclaw = document.querySelector('#potterRavenclaw');
const wandsContainer = document.querySelector('#wandsContainer');
const potterSpells = document.querySelector('#potterSpells');

// Declarando id's de las opciones de los filtros

const filterSelection = document.querySelector('#filterSelection');
const secondFilter = document.querySelector('#secondFilter');
const thirdFilter = document.querySelector('#thirdFilter');
const fourthFilter = document.querySelector('#fourthFilter');
const fifthFilter = document.querySelector('#fifthFilter');

// Logo alterno
const principalLogo = document.querySelector('.HPLogoAlterno');

// Función para volver al inicio haciendo click en logo alterno
principalLogo.addEventListener('click', () => {
  principalContainer.classList.remove('hide');
  searchContainer.classList.add('hide');
  potterStaff.classList.add('hide');
  potterStudents.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  potterSpells.classList.add('hide');
});

// Fumción que crea los flip cards de personajes
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

// Función que muestra personajes por orden a-z, z-a y género
filterSelection.addEventListener('change', () => {
  const arrByNameOrGender = orderByNameAndGender(POTTER, filterSelection.value);
  insertPotterCharacter.innerHTML = showPotterCharacters(arrByNameOrGender);
});

// Función que muestra los estudiantes
filteredStudentsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStaff.classList.add('hide');
  potterStudents.classList.remove('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  potterSpells.classList.add('hide');
  wandsContainer.classList.add('hide');
  text.value = '';

  const filterByStudent = filterHogwartsStudents(POTTER);
  document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(filterByStudent);
  secondFilter.addEventListener('change', () => {
    const arrStudByNameGender = orderByNameAndGender(filterByStudent, secondFilter.value);
    document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(arrStudByNameGender);
  });
});

// Función que muestra a los Staff
filteredStaffMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.remove('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  wandsContainer.classList.add('hide');
  potterSpells.classList.add('hide');
  text.value = '';

  const filterByStaff = filterHogwartsStaff(POTTER);
  document.querySelector('#insertPotterStaff').innerHTML = showPotterCharacters(filterByStaff);
  thirdFilter.addEventListener('change', () => {
    const arrStaffByNameGender = orderByNameAndGender(filterByStaff, thirdFilter.value);
    document.querySelector('#insertPotterStaff').innerHTML = showPotterCharacters(arrStaffByNameGender);
  });
});

// Función que muestra los resultados de búsqueda en tiempo real
text.addEventListener('keyup', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.remove('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  potterSpells.classList.add('hide');
  wandsContainer.classList.add('hide');

  const arrSearchCharacter = searchCharacters(POTTER, text.value);
  searchResults.innerHTML = showPotterCharacters(arrSearchCharacter);
});

// Función que muestra personajes de Gryffindor
filterHouseGryffindor.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.remove('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  wandsContainer.classList.add('hide');
  potterSpells.classList.add('hide');
  text.value = '';

  const filterByGryffindor = filterPotterHouse(POTTER, valuePotterGryffindor);
  document.querySelector('#insertPotterGryffindor').innerHTML = showPotterCharacters(filterByGryffindor);
  fourthFilter.addEventListener('change', () => {
    const arrProfByNameGender = orderByNameAndGender(filterByGryffindor, fourthFilter.value);
    document.querySelector('#insertPotterGryffindor').innerHTML = showPotterCharacters(arrProfByNameGender);
  });
});

// Función que muestra personajes de Slytherin
filterHouseSlytherin.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.remove('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  wandsContainer.classList.add('hide');
  potterSpells.classList.add('hide');
  text.value = '';

  const filterBySlytherin = filterPotterHouse(POTTER, valuePotterSlytherin);
  document.querySelector('#insertPotterSlytherin').innerHTML = showPotterCharacters(filterBySlytherin);
  fifthFilter.addEventListener('change', () => {
    const arrProfByNameGender = orderByNameAndGender(filterBySlytherin, fifthFilter.value);
    document.querySelector('#insertPotterSlytherin').innerHTML = showPotterCharacters(arrProfByNameGender);
  });
});

// Función que muestra personajes de Hufflepuff
filterHouseHufflepuff.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.remove('hide');
  potterRavenclaw.classList.add('hide');
  wandsContainer.classList.add('hide');
  potterSpells.classList.add('hide');
  text.value = '';

  const filterByHufflepuff = filterPotterHouse(POTTER, valuePotterHufflepuff);
  document.querySelector('#insertPotterHufflepuff').innerHTML = showPotterCharacters(filterByHufflepuff);
});

// Función que muestra personajes de Ravenclaw
filterHouseRavenclaw.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.remove('hide');
  wandsContainer.classList.add('hide');
  potterSpells.classList.add('hide');
  text.value = '';

  const filterByRavenclaw = filterPotterHouse(POTTER, valuePotterRavenclaw);
  document.querySelector('#insertPotterRavenclaw').innerHTML = showPotterCharacters(filterByRavenclaw);
});


// Función que crea cards mostrando descripción de varitas
const characterWands = (data) => {
  let templatePotter = '';
  data.map((obj) => {
    templatePotter += `
    <div class="wand-card">
      <img src="${obj.image}" alt="Image" class="wand-card-photo"/>
      <div class="wand-description">
        <h1>${obj.name}</h1>
        <li>Madera: ${obj.wand.wood}</li>
        <li>Núcleo: ${obj.wand.core}</li>
        <li>Largo: ${obj.wand.length}</li>
      </div>
    </div>
    `;
    return templatePotter;
  });
  return templatePotter;
};

// Función que muestra los cards de varitas
wandsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  wandsContainer.classList.remove('hide');
  potterSpells.classList.add('hide');
  text.value = '';

  const arrWands = filterWands(POTTER);
  document.querySelector('#insertWands').innerHTML = characterWands(arrWands);
});

function showPotterSpells(file) {
  let templateSpellsPotter = '';
  file.map((obj) => {
    templateSpellsPotter += `
      <div class="spells-card">
        <img src = '${obj.image}' alt = "Image" class="spells-card-photo"/>
        <div class="spells-description">
          <h1>${obj.name}</h1>
          <li>Patronus: ${obj.patronus}</li>
        </div>
      </div>`;
    return templateSpellsPotter;
  });
  return templateSpellsPotter;
}

filterPotterSpells.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  searchContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterStaff.classList.add('hide');
  potterGryffindor.classList.add('hide');
  potterSlytherin.classList.add('hide');
  potterHufflepuff.classList.add('hide');
  potterRavenclaw.classList.add('hide');
  wandsContainer.classList.add('hide');
  potterSpells.classList.remove('hide');
  text.value = '';

  const arrSpells = filterSpells(POTTER);
  document.querySelector('#insertPotterSpells').innerHTML = showPotterSpells(arrSpells);
});
