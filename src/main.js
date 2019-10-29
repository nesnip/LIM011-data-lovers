/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';

console.log(POTTER);

// import {showPotterCharacters} from './data.js';
import {showPotterDescription} from './data.js';

// document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(POTTER);
document.querySelector('#insertPotterDescription').innerHTML = showPotterDescription(POTTER);

const photoCharacter = document.querySelector('.photoCharacter');
const cardCharacter = document.querySelector('#cardCharacter');
const cardDescription = document.querySelector('#cardDescription');
cardDescription.classList.add('hide');
cardCharacter.classList.remove('hide');
photoCharacter.addEventListener('click', () => {
  cardCharacter.classList.add('hide');
  cardDescription.classList.remove('hide');
});
/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
