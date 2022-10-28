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


            pokelista.innerHTML+= `<div class="card">
          <img src="${x.sprites.front_default}" class="card-img-top">
           <h5 class="card-title text-center">ID ${x.id} <br> ${x.name}</h5>
           <p class="card-text text-center">         
           Altura ${x.height/10} 
           Peso ${x.weight/10} Kg <br>
           Tipo: ${tipo}       
           <br>Formas: ${formas}
           <br> Habilidades: ${habilidades}
           <br>   Ubicacion: </p>
            </div>`
          
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


  BusquedaPoke.innerHTML+= `<div class="card">
<div class="row g-0">
<div class="col-md-4">
<img src="${res.sprites.front_default}" class="img-fluid rounded-start" width="300" height="400">
</div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">ID ${res.id} <br> ${res.name} </h5>
    <p class="card-text"><p>Altura ${res.height/10} m</p>
    <p>Peso ${res.weight/10} Kg</p>
    <p>Tipo: ${tipo} </p>        
    <p>Formas: ${formas}</p>  
    <p>Habilidades: ${habilidades}</p>  
  </div>
</div> `
   botonlista.innerHTML+=`<button  onclick="location.href='index.html';" type="button" class="btn btn-secondary btn-lg btn-block">Inicio</button>`
 })
}
