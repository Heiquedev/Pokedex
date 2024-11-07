const imgPokemon = document.querySelector("#imgPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const numeroPokemon = document.querySelector("#numeroPokemon");
const inputText = document.querySelector("#inputText");
const formBusca = document.querySelector(".form-busca");
const buttonA = document.querySelector("#btnAnterior");
const buttonB = document.querySelector("#btnProximo");
const tipo = document.querySelector("#tipo");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");

let IDPokemon = 1;
const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIresponse.json();
  return data;
};



const showPokemon = async (pokemon) => {
  const dataPokemon = await fetchPokemon(pokemon);
  IDPokemon = dataPokemon.id;
  imgPokemon.src = dataPokemon.sprites.front_default;
  numeroPokemon.innerHTML = dataPokemon.id;
  nomePokemon.innerHTML = dataPokemon.name;
  const texto1 = document.createElement("span");
  texto1.textContent = dataPokemon.types[0].type.name;
  tipo.appendChild(texto1);
  const texto2 = document.createElement("span");
  texto2.textContent = ` ${dataPokemon.weight / 10} kg`;
  peso.appendChild(texto2);
  const texto3 = document.createElement("span");
  texto3.textContent = ` ${dataPokemon.height * 10} cm`;
  altura.appendChild(texto3);
};
showPokemon(IDPokemon);
inputText.addEventListener(
  "input",
  () => (IDPokemon = toString(inputText.value))
);

formBusca.addEventListener("submit", (event) => {
  event.preventDefault();
  showPokemon(inputText.value.toLowerCase());
});

buttonA.addEventListener("click", () => {
  if (showPokemon(IDPokemon > 1)){
    showPokemon(IDPokemon -1)
  } 
});

buttonB.addEventListener("click", () => {
  if (showPokemon(IDPokemon >= 1)){
    showPokemon(IDPokemon +1)
  } 
});

