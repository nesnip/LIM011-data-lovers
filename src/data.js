/* Manejo de data */

// esta es una función de ejemplo

export const showPotterCharacters = (data) => {
  let templatePotter = '';
  data.map((obj) => {
    templatePotter += `
    <div class="card hide" id="cardCharacter">
        <img src="${obj.image}" alt="Image" class="photoCharacter"/>
      <div class="container">
        <p>${obj.name}</p>
      </div>
    </div>`;
  });
  return templatePotter;
};

/* export const showPotterCharacters = (data) => {
  return data
    .map((obj) => (`
      <div class="card">
          <img src="${obj.image}" alt="Image" class="photoCharacter"/>
        <div class="container">
          <p>${obj.name}</p>
        </div>
      </div>`
    ))
    .join('');
}; */

export const showPotterDescription = (data2) => {
  let templatePotter2 = '';
  data2.map((obj) => {
    templatePotter2 += `
    <div class="card hide" id="cardDescription">
      <div class="container">
        <h2>${obj.name}</h2>
        <p>Especie: ${obj.species}</p>
        <p>Status de sangre: ${obj.ancestry}</p>
        <p>Casa: ${obj.house}</p>
        <p>Patronus: ${obj.patronus}</p>
        <p>Actor: ${obj.actor}</p>
      </div>
    </div>`;
  });
  return templatePotter2;
};
