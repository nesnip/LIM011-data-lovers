// importamos la función `example`
import { orderByNameAndGender, filterHogwartsStudents, filterHogwartsProfesors } from '../src/data';

describe('orderByNameAndGender', () => {
  it('debería ser una función', () => {
    expect(typeof orderByNameAndGender).toBe('function');
  });

  it('es una función que ordena a los personajes por nombre en orden o por genero', () => {
    const input1 = [
      { name: 'Ron Weasley' },
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
    ];
    const outputAsc = [
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
      { name: 'Ron Weasley' },
    ];
    const outputDesc = [
      { name: 'Ron Weasley' },
      { name: 'Minerva McGonagall' },
      { name: 'Draco Malfoy' },
    ];
    const input2 = [
      {
        name: 'Ron Weasley',
        gender: 'male',
      },
      {
        name: 'Draco Malfoy',
        gender: 'male',
      },
      {
        name: 'Hermione Granger',
        gender: 'female',
      },
      {
        name: 'Minerva McGonagall',
        gender: 'female',
      },
    ];
    const outputFem = [
      {
        name: 'Hermione Granger',
        gender: 'female',
      },
      {
        name: 'Minerva McGonagall',
        gender: 'female',
      },
    ];
    const outputMale = [
      {
        name: 'Ron Weasley',
        gender: 'male',
      },
      {
        name: 'Draco Malfoy',
        gender: 'male',
      },
    ];
    expect(orderByNameAndGender(input1, 'A-Z')).toEqual(outputAsc);
    expect(orderByNameAndGender(input1, 'Z-A')).toEqual(outputDesc);
    expect(orderByNameAndGender(input2, 'Femenino')).toEqual(outputFem);
    expect(orderByNameAndGender(input2, 'Masculino')).toEqual(outputMale);
  });
});

describe('filterHogwartsStudents', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterHogwartsStudents).toBe('function');
  });

  it('es una funcion que filtra estudiantes', () => {
    const input = [
      {
        name: 'Ron Weasley',
        hogwartsStudent: true,
      },
      {
        name: 'Draco Malfoy',
        hogwartsStudent: true,
      },
      {
        name: 'Minerva McGonagall',
        hogwartsStudent: false,
      },
    ];
    const output = [
      {
        name: 'Ron Weasley',
        hogwartsStudent: true,
      },
      {
        name: 'Draco Malfoy',
        hogwartsStudent: true,
      },
    ];
    expect(filterHogwartsStudents(input)).toEqual(output);
  });
});

describe('filterHogwartsProfesors', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterHogwartsProfesors).toBe('function');
  });

  it('es una funcion que filtra staff', () => {
    const input = [
      {
        name: 'Ron Weasley',
        hogwartsStudent: true,
        hogwartsStaff: false,
      },
      {
        name: 'Minerva McGonagall',
        hogwartsStaff: true,
      },
      {
        name: 'Severus Snape',
        hogwartsStaff: true,
      },
    ];
    const output = [
      {
        name: 'Minerva McGonagall',
        hogwartsStaff: true,
      },
      {
        name: 'Severus Snape',
        hogwartsStaff: true,
      },
    ];
    expect(filterHogwartsProfesors(input)).toEqual(output);
  });
});
