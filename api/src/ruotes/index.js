const { Router } = require("express");
const router = Router();

// Traemos la logica
const { addCharacters } = require("../contrllers/addCharacters");
const { getCharacters } = require("../contrllers/getCharacters");
const { getCharactersById } = require("../contrllers/getCharactersById");
const { getQuotes } = require("../contrllers/getQuotes");

// Aqui crearemos nuestras rutas
router.get("/quote", getQuotes);

router.get("/characters", getCharacters);

router.post("/characters", addCharacters);

router.get("/characters/:id", getCharactersById);

router.get("/episodes");

router.get("/episodes/:id");

module.exports = router;
