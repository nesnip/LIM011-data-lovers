/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';
console.log(POTTER);

import {showPotterCharacters} from './data.js';
document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(POTTER);

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
