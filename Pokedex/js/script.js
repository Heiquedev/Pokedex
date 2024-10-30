const imgPokemon = document.querySelector("#imgPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const numeroPokemon = document.querySelector("numeroPokemon");
const inputText = document.querySelector("#inputText");
const formBusca = document.querySelector("form-busca");
const buttonA = document.querySelector("#btnAnterior");
const buttonB = document.querySelector("#btnProximo");
const tipo = document.querySelector("#tipo");

let IDpokemon = 1;
const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIresponse.json();
  return data;
};

const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon)
    IDPokemon = dataPokemon.id;
    imgPokemon.scr = dataPokemon.sprites.front_defaut
    const texto1 = document.createElement('span')
    texto.textContent =dataPokemon.types[0].type.name
    typePoke.appendChild(texto)
    const texto2 = document.createElement('span')
    texto.textContent =dataPokemon.types[0].type.name
    typePoke.appendChild(texto)
}