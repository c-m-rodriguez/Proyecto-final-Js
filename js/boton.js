
//https://pokeapi.co/api/v2/pokemon/5
let contenedor;
const total_pokemons = 3; //trae el total de pokemon

window.onload = inicio;

function aleatorio(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function inicio()
{
  contenedor = document.getElementById("pokemon");
  window.addEventListener("click",pintarPokemon);
}

function pintarPokemon(evento){
  contenedor.innerHTML = "";
  traerDatos(aleatorio(20,total_pokemons));


}

function traerDatos(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then(function(data){
    let nombre = data.name;
    let url = data.sprites.other.dream_world.front_default;
    if(nombre && url)
    {
        imprimirTarjeta(nombre,url);
    }
  });
}

function imprimirTarjeta(nombre,url)
{
  let template = `<div class="tarjeta">
  <img src="${url}" alt="" >
    <br>
    <label for="">
      ${nombre}
    </label>`;
  contenedor.innerHTML += template;
}