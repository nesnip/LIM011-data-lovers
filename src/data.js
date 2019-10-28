/* Manejo de data */

// esta es una función de ejemplo

export const showPotterCharacters = (data) => {
  let templatePotter = '';
  data.map(obj => {
    templatePotter += `
    <div class="card">
        <img src = '${obj.image}' class="card-img-top"/>
      <div class="card-body">
        <p class="card-title">${obj.name}</p>
      </div>
    </div>`;
  });
  return templatePotter;
};
