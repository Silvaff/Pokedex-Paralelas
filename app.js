const pokelista = document.getElementById("ListaPoke")
const botones=document.getElementById("botones");
const botonlista=document.getElementById("botonlista");
const BusquedaPoke=document.getElementById("BusquedaPoke");

function LlamadaApi(url) {
  pokelista.innerHTML="";
    fetch(url)
    .then(res=>res.json())
    .then(res=> {
      for(let i of res.results){
        fetch(i.url)
          .then(x=>x.json())
          .then(x=>{
            let tipo="";
            x.types.forEach(element => {
              tipo+=`<br>${element.type.name}`;
            });
            let formas="";
            x.forms.forEach(element =>{
              formas+=`<br>${element.name}`;
            });
            let habilidades="";
            x.abilities.forEach(element =>{
              habilidades+=`<br>${element.ability.name} `;
            });

            pokelista.innerHTML+= `<div class="card" >
            <img src="${x.sprites.front_default}">
              <div class="card-body">
                <h5 class="card-title" align="center">${x.name}</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${x.id}</li>
                  <li class="list-group-item">Altura: ${x.height/10} m</li>
                  <li class="list-group-item">Peso: ${x.weight/10} Kg</li>
                  <li class="list-group-item">Tipo: ${tipo} </li>        
                  <li class="list-group-item">Formas: ${formas}</li>  
                  <li class="list-group-item">Habilidades: ${habilidades}</li> 
                </ul> 
              </div>
          </div>
          `
          });
      };
        // Mostramos Los botones a los enlaces de siguiente o anterior de la paginacion de los pokemones 
        //Boton hacia atrás
        botones.innerHTML = (res.previous) ? `<button type="button" onclick="LlamadaApi('${res.previous}')" class="btn btn-secondary">Atrás</button>` : "";
        
        //Botón hacia adelante
        botones.innerHTML += (res.next) ? `<button type="button" onclick="LlamadaApi('${res.next}')" class="btn btn-secondary  position-relative">Siguiente</button>` : "";
        
  });
}


LlamadaApi("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");

function buscar(){
  BusquedaPoke.innerHTML="";
  botonlista.innerHTML="";
 var idpoke= document.getElementById("pokeid").value;
 fetch(`https://pokeapi.co/api/v2/pokemon/${idpoke}/`)
 .then(res=>res.json())
 .then(res=> {
  let tipo="";
  res.types.forEach(element => {
    tipo+=`<br> ${element.type.name}`;
  });
  let formas="";
  res.forms.forEach(element =>{
    formas+=`<br> ${element.name}`;
  });
  let habilidades="";
  res.abilities.forEach(element =>{
    habilidades+=` <br>${element.ability.name}`;
  });


  BusquedaPoke.innerHTML+= `
  <img src="${res.sprites.front_default}">
    <div class="card-body mr-5 ml-5">
      <h5 class="card-title" align="center">${res.name}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${res.id}</li>
        <li class="list-group-item">Altura: ${res.height/10} m</li>
        <li class="list-group-item">Peso: ${res.weight/10} Kg</li>
        <li class="list-group-item">Tipo: ${tipo} </li>        
        <li class="list-group-item">Formas: ${formas}</li>  
        <li class="list-group-item">Habilidades: ${habilidades}</li> 
      </ul> 
    </div>
 `
 })
}
