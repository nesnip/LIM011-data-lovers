/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';
import { showPotterCharacters } from './data.js';

console.log(POTTER);

document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(POTTER);

const filterSelection = document.querySelector('#filterSelection');
console.log(filterSelection);

filterSelection.addEventListener('change', () => {
  if (filterSelection.value == 'A-Z') {
    const arrAsc = [...POTTER]; //... operador que junta los elementos de un array en un nuevo array
    const names = arrAsc.map(item => item.name);
    const orderedNames = names.sort();
    const objects = orderedNames.map(name => [...POTTER].find(it => it.name === name));
    console.log(objects);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(objects);
  } else if (filterSelection.value == 'Z-A') {
    const arrDesc = [...POTTER].map(item => item.name)
      .sort().reverse()
      .map(name => [...POTTER].find(it => it.name === name));
    console.log(arrDesc);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(arrDesc);
  } else if (filterSelection.value == 'Estudiantes') {
    const filteredStudents = [...POTTER].filter(item => item.hogwartsStudent === true);
    console.log(filteredStudents);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredStudents);
  }
  // console.log(e.target.value);
  console.log('hola');
});
