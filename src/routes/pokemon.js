const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "Api pokemon"});
});

router.get('/pokemon/', (req, res) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=905`)
    .then((res) => res.json())
    .then((data) => res.json(data.results))
});

module.exports = router;