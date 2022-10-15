const botonApi=document.getElementById("BotonSgte");
let pokelista=document.getElementById("ListaPoke");

const LlamadaApi= ()=>{
  fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  .then(res=>res.json())
  .then(res=> {
    for(let i of res.results){
      fetch(i.url)
      .then(x=>x.json())
      .then(x=>{
        pokelista.innerHTML+= `
        <img src="${x.sprites.front_default}" alt="">
        <p>ID ${x.id}</p>
        <p>Nombre ${x.name}</p>
        <p>Altura ${x.height}</p>
        <p>Peso ${x.weight}</p>
        <p>Tipo ${x.types[0].type.name}</p>
        <p>Formas ${x.forms[0].name}</p>
        <p>Habilidades ${x.abilities[0].ability.name}</p>
        <p>Ubicacion </p>
      </div>`
      })
    }
  })
}


botonApi.addEventListener('click',LlamadaApi);