import { Character } from './Character.js';

export const renderCard = async (generator, iconColor, row) => {
    const data = await generator.next().value;
    const character = new Character(data.name, data.height, data.mass);
    generateCard(character, iconColor, row);
  };
const generateCard = (character, iconColor, row) => {
    let column = document.createElement('div');
    column.classList.add('col-12', 'col-md-6', 'col-lg-4');
    column.innerHTML = `<div class="timelineContent d-flex shadow">
        <div class="icon icon${iconColor}"></div>
        <div class="timelineInfo">
          <h6>${character.name}</h6>
          <p>Estatura: ${character.height} cm. y Peso: ${character.mass} kg.</p>
        </div>
      </div>`;
    row.appendChild(column);
  };