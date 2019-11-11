// importamos la función `example`
import { orderAscDescByName } from '../src/data';

describe('orderAscDescByName', () => {
  it('debería ser una función', () => {
    expect(typeof orderAscDescByName).toBe('function');
  });

  describe('Es una funcion que ordena Ascendente y Descendente', () => {
    const input = [{ name: 'Harry Potter' }, { name: 'Hermione Granger' }, { name: 'Ron Weasley' }, { name: 'Draco Malfoy' }];
    const output1 = [{ name: 'Draco Malfoy' }, { name: 'Harry Potter' }, { name: 'Hermione Granger' }, { name: 'Ron Weasley' }];
    const output2 = [{ name: 'Ron Weasley' }, { name: 'Hermione Granger' }, { name: 'Harry Potter' }, { name: 'Draco Malfoy' }];
    expect(orderAscDescByName(input)).toEqual(output1, output2);
  });
});
