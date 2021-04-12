const { v4: uuidv4 } = require("uuid");

exports.addCharacters = async (req, res) => {
  const { name, birthday, status, nickname } = req.body;

  const newCharacter = {
    id: uuidv4(),
    name,
    birthday,
    status,
    nickname,
  };

  res.status(200).send(newCharacter);
};
