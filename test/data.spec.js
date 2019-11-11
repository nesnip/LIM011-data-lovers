// importamos la función `example`
import { filterHogwartsStudents } from '../src/data';

describe('filterHogwartsStudents', () => {
  it('debería ser una función', () => {
    expect(typeof filterHogwartsStudents).toBe('function');
  });

  it('Es una funcion que filtra estudiantes', () => {
    const input = [{ name: 'Harry Potter' }, { name: 'Hermione Granger' }, { name: 'Minerva McGonagall' }];
    const output = [{ name: 'Harry Potter' }, { name: 'Hermione Granger' }];
    expect(filterHogwartsStudents(input)).toEqual(output);
  });
});
