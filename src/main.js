import './style.css'

const main = document.getElementById('main');
const img = document.getElementsByTagName('img')[0];
const pokeName = document.getElementById('poke-name');
const button = document.getElementsByTagName('button')[0];
const tryBtn = document.getElementById('try');
let pokemonName;

const testIfCorrect = () => {
  const newP = document.createElement('p');
  if (main.childElementCount > 6) { main.removeChild(document.getElementsByTagName('p')[0]); }
  if (pokeName.value.toLowerCase() === pokemonName) {
    newP.innerText = 'Well done!';
    newP.style.color = 'green';
    main.appendChild(newP);
  } else {
      newP.innerText = 'Not this time, but keep trying!';
      newP.style.color = 'red';
      main.appendChild(newP); 
    }
}

const getRandomPokemon = (evt) => {
  evt.preventDefault();
  const randomId = Math.floor(Math.random() * 1015);
  fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomId}/`)
    .then(response => response.json())
    .then(pokemon =>  {
      img.src = pokemon.sprites.front_default;
      pokemonName = pokemon.name;
      console.log(pokemon.name)
    })
}

button.addEventListener('click', getRandomPokemon);
tryBtn.addEventListener('click', testIfCorrect);