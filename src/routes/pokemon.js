const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "Api pokemon"});
});

module.exports = router;