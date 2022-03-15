// import {todo lo que voy a necesitar} from "donde_este.js"

const axios = require("axios")
const urlBase = "https://www.breakingbadapi.com/api/"
const urlQuotes = urlBase + "quotes"
const urlCharacters = urlBase + "characters"
const urlEpisodes = urlBase + "episodes"

// const ejemplo = async (req, res) => {
//   return res.status(200).send({ message: "Chau mundo!!" });
// };

const obtainQuotes = async ()=>{
  const dataQuotes= await axios(urlQuotes);
  const dataJsonQuotes = dataQuotes.data
  return dataJsonQuotes
}
const obtainCharacters = async ()=>{

  const dataCharacters= await axios(urlCharacters);
  const allCharacters = dataCharacters.data
  return allCharacters
}

const obtainCharacter = async (idFromParams)=>{

  const dataCharacters= await axios(urlCharacters);
  const personaje = await dataCharacters.data.filter(character => {if (character.char_id == idFromParams){return character} } )
    return personaje
}

const obtainAllEpisodes = async()=>{
  const data = await axios(urlEpisodes);
  const episodes = data.data
  return episodes
}

const obtainEpisode = async( idFromParams )=>{
  const data = await axios(urlEpisodes);
  const episode = data.data.filter( capitulo => {
    if(capitulo.episode_id == idFromParams){
      return capitulo 
    }
  })
  return episode
}
// const obtainQuotes = async ()=>{
//   const dataQuotes= await axios(urlQuotes);
//   const dataJsonQuotes = dataQuotes.data
//   return dataJsonQuotes
// }

module.exports.obtainQuotes = obtainQuotes;
module.exports.obtainCharacters = obtainCharacters;
module.exports.obtainCharacter = obtainCharacter;
module.exports.obtainAllEpisodes = obtainAllEpisodes;
module.exports.obtainEpisode = obtainEpisode;
