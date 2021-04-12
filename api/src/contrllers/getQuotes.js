const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios");

exports.getQuotes = async (req, res) => {
  const { data } = await axios(`${URL}quote/random`);

  res.status(200).send(data);
};
