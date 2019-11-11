// importamos la función `example`
import { orderAscDescByName } from '../src/data';

describe('orderAscDescByName', () => {
  it('debería ser una función', () => {
    expect(typeof orderAscDescByName).toBe('function');
  });

  describe('Es una funcion que ordena Ascendente y Descendente', () => {
    const input = [{ name: 'Harry Potter' }, { name: 'Hermione Granger' }, { name: 'Ron Weasley' }, { name: 'Draco Malfoy' }];
    const output = [{ name: 'Draco Malfoy' }, { name: 'Harry Potter' }, { name: 'Hermione Granger' }, { name: 'Ron Weasley' }];
    expect(orderAscDescByName(input)).toEqual(output, output.reverse());
  });
});
