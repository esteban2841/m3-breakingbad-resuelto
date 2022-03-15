const { Router, application } = require("express");
const  data = require("../contrllers/ejemplo")
const router = Router();




// Aqui crearemos nuestras rutas

router.get("/quote", async function (req, res){ 
    
    const info = await data.obtainQuotes()
    res.send(info)
    // const dataQuotes= await axios(urlQuotes);
    // const dataJsonQuotes = dataQuotes.data
    // res.send(dataJsonQuotes) 
    
})

router.get("/characters", async function (req, res){
    
    try{

        const info = await data.obtainCharacters()
        res.send(info)
    }catch{
        console.log("error")
    }
})

router.post("/characters", async function (req, res){
    let {char_id, name, birthday} = req.body
    console.log(char_id,name,birthday)
})

router.get("/characters/:id", async function (req, res){
    
    let id = req.params.id
    const info = await data.obtainCharacter(id)
    console.log(info)
    res.send(info)

})

router.get("/episodes", async( req, res)=>{
    const info = await data.obtainAllEpisodes()
    res.send(info)
})

router.get("/episodes/:id", async( req, res)=>{
    id = req.params.id
    const info = await data.obtainEpisode(id)
    res.send(info)
})



module.exports = router;
