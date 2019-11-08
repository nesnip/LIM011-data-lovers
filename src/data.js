
export const orderAscDescByName = (array, string1) => {
  const arrAsc = [...array];
  if (string1 === 'A-Z') {
    const newArray = arrAsc.map(obj => obj.name).sort().map(string2 => arrAsc.find(obj => obj.name === string2));
  return newArray;
  } else {
  const newArray = arrAsc.map(obj => obj.name).sort().reverse().map(string => arrAsc.find(obj => obj.name === string));
  return newArray;
  }
};

export const orderByGender = (array, string1) => {
  const arrayByGender = [...array];
  if (string1 === )
}
