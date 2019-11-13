// importamos la función `example`
import { filterHogwartsStudents, filterHogwartsProfesors } from '../src/data';

describe('filterHogwartsStudents', () => {
  it('debería ser una función', () => {
    expect(typeof filterHogwartsStudents).toBe('function');
  });

  it('Es una funcion que filtra estudiantes', () => {
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
