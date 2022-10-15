const botones=document.getElementById("botones");
let pokelista=document.getElementById("ListaPoke");


function listapoke(url){
  pokelista.innerHTML="";
  fetch(url)
  .then(res=>res.json())
  .then(res=> {
    for(let i of res.results){
      fetch(i.url)
      .then(x=>x.json())
      .then(x=>{
        pokelista.innerHTML+= `
        <img src="${x.sprites.front_default}">
        <p>ID ${x.id}</p>
        <p>Nombre ${x.name}</p>
        <p>Altura ${x.height/10} m</p>
        <p>Peso ${x.weight/10} Kg</p>
        <p>Tipo: `
        for( let t of x.types){
          pokelista.innerHTML+=`
           <p> ${t.type.name}</p> 
           `
         }
        pokelista.innerHTML+=`</p>
        <p>Formas: `
        for( let f of x.forms){
          pokelista.innerHTML+=`
           <p> ${f.name}</p> 
           `
         }
        pokelista.innerHTML+=`</p>
        <p>Habilidades:`
        for( let a of x.abilities){
          pokelista.innerHTML+=`
           <p> ${a.ability.name}</p> 
           `
         }
        pokelista.innerHTML+=`</p>
        <p>Ubicacion </p>
      </div>`
      })
      botones.innerHTML = (res.previous) ? `<button onclick="listapoke('${res.previous}')">Atrás</button>` : "";
      botones.innerHTML += (res.next) ? `<button onclick="listapoke('${res.next}')">Siguiente</button>` : "";
    }
  })
}

listapoke('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');

