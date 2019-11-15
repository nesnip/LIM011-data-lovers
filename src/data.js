/* eslint-disable consistent-return */

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

export const filterHogwartsStudents = (array) => {
  const arrayByStudent = [...array];
  const newArrayByStudent = arrayByStudent.filter((obj) => (obj).hogwartsStudent === true);
  return newArrayByStudent;
};

export const filterHogwartsProfesors = (array) => {
  const arrayByProfesor = [...array];
  const newArrayByProfesor = arrayByProfesor.filter((obj) => (obj).hogwartsStaff === true);
  return newArrayByProfesor;
};

export const searchCharacters = (array, text) => {
  const arrOfSearch = [...array];
  const newArrOfSearch = arrOfSearch.filter((obj) => obj.name.toUpperCase()
    .indexOf(text.toUpperCase()) > -1);
  return newArrOfSearch;
};

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
