const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios");

exports.getCharacters = async (req, res) => {
  const { name } = req.query;

  if (name) {
    const { data } = await axios(`${URL}characters?name=${name}`);

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

  const { data } = await axios(`${URL}characters`);

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
};
