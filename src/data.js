/* eslint-disable consistent-return */

// Función que filtra personajes por orden a-z, z-a y filtra por género
export const orderByNameAndGender = (array, string1) => {
  const arrayData = [...array];
  const newArray = arrayData.map((obj) => obj.name)
    .sort().map((string2) => arrayData.find((obj) => obj.name === string2));
  if (string1 === 'A-Z') {
    return newArray;
  } if (string1 === 'Z-A') {
    return newArray.reverse();
  } if (string1 === 'Femenino') {
    return arrayData.filter((obj) => (obj).gender === 'female');
  }
  return arrayData.filter((obj) => (obj).gender === 'male');
};

// Función que filtra estudiantes
export const filterHogwartsStudents = (array) => {
  const arrayByStudent = [...array];
  const newArrayByStudent = arrayByStudent.filter((obj) => (obj).hogwartsStudent === true);
  return newArrayByStudent;
};

// Función que filtra staff
export const filterHogwartsStaff = (array) => {
  const arrayByStaff = [...array];
  const newArrayByStaff = arrayByStaff.filter((obj) => (obj).hogwartsStaff === true);
  return newArrayByStaff;
};

// Función que busca personajes
export const searchCharacters = (array, string) => {
  const arrOfSearch = [...array];
  const newArrOfSearch = arrOfSearch.filter((obj) => obj.name
    .indexOf(string[0].toUpperCase() + string.slice(1).toLowerCase()) > -1);
    /* obj.name
    .toUpperCase()
    .indexOf(string.toUpperCase()) > -1); */
  return newArrOfSearch;
};

// Función que filtra personajes por casa
export const filterPotterHouse = (array, string) => {
  const arrayHouses = [...array];
  if (string === 'Gryffindor') {
    return arrayHouses.filter((obj) => obj.house === 'Gryffindor');
  } if (string === 'Slytherin') {
    return arrayHouses.filter((obj) => obj.house === 'Slytherin');
  } if (string === 'Hufflepuff') {
    return arrayHouses.filter((obj) => obj.house === 'Hufflepuff');
  }
  return arrayHouses.filter((obj) => obj.house === 'Ravenclaw');
};

// Función que filtre solo personajes con varitas
export const filterWands = (array) => {
  const arrayWands = [...array];
  return arrayWands.filter((obj) => obj.wand.wood !== '' || obj.wand.core !== '' || obj.wand.length !== '');
};

export const filterSpells = (array) => {
  const arraySpells = [...array];
  return arraySpells.filter((obj) => obj.patronus !== '');
};
