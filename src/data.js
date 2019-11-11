/* eslint-disable consistent-return */

export const orderAscDescByName = (array, string1) => {
  const arrAsc = [...array];
  const newArray = arrAsc.map((obj) => obj.name).sort().map((string2) => arrAsc
    .find((obj) => obj.name === string2));
  if (string1 === 'A-Z') {
    return newArray;
  } if (string1 === 'Z-A') {
    return newArray.reverse();
  }
};

export const filterFemMale = (array, string1) => {
  const arrayByGender = [...array];
  if (string1 === 'Femenino') {
    return arrayByGender.filter((obj) => (obj).gender === 'female');
  } else if (string1 === 'Masculino') {
    return arrayByGender.filter((obj) => (obj).gender === 'male');
  }
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
