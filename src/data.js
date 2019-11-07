/* Manejo de data */

// esta es una función de ejemplo

export const showPotterCharacters = (data) => {
  let templatePotter = '';
  data.map((obj) => {
    templatePotter += `
    <div class="card flex-container flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src = '${obj.image}' alt = "Image" class="photoCharacter"/>
          <h2 class="fontNameCharacter">${obj.name}</h2>
        </div>
        <div class="flip-card-back">
          <h1>${obj.name}</h1>
          <p>Nacimiento: ${obj.dateOfBirth}</p>
          <p>Especie: ${obj.species}</p>
          <p>Estatus de sangre: ${obj.ancestry}</p>
          <p>Casa: ${obj.house}</p>
          <p>Patronus: ${obj.patronus}</p>
          <p>Varita:</p>
          <li>Madera: ${obj.wand.wood}</li>
          <li>Núcleo: ${obj.wand.core}</li>
          <li>Largo: ${obj.wand.length}</li>
          <p>Ocupación:</p>
          <p>Actor: ${obj.actor}</p>
        </div>
      </div>
    </div>`;
  });
  return templatePotter;
};

