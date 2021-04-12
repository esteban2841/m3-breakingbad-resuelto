const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios");

exports.getCharactersById = async (req, res) => {
  const { id } = req.params;

  const { data } = await axios(`${URL}characters/${id}`);
  if (data.length) {
    const allCharacters = data.map((c) => {
      return {
        id: c.char_id,
        nombre: c.name,
        cumple: c.birthday,
        imagen: c.img,
        estado: c.status,
        apodo: c.nickname,
      };
    });

    return res.status(200).send(allCharacters);
  }
  return res.status(404).json({ message: "No hay data, papi" });
};
