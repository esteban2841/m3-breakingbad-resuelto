const express = require("express");
const axios = require("axios");
const cors = require ("cors");
const morgan = require("morgan");

const app = express();
//==========================================//

app.use(cors());
app.use(express.json())
app.use(morgan("dev"))

//==========================================//

app.get("/",(req,res)=>{
    res.json({"Hola":"Hola"})
})

app.get("/quote",async(req,res)=>{
    const data = await axios(
        'https://www.breakingbadapi.com/api/quote/random'
        )
    res.json(data.data[0])
})

app.get("/characters?name",async(req,res)=>{
    const name = req.query.name;
    const data = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    res.json(data)
})

app.get("/characters/:id", async(req,res)=>{
    const id = Number(req.params.id);
    const data = await axios(`https://www.breakingbadapi.com/api/characters/${id}`);
    res.json(data.data)
})

app.get("/episodes", async(req,res)=>{
    const data = await axios ("https://www.breakingbadapi.com/api/episodes")
    res.json(data.data)
})

app.get("/episodes/:id", async(req,res)=>{
    const id = Number(req.params.id);
    const data = await axios( `https://www.breakingbadapi.com/api/episodes/${id}`);
    res.json(data.data)
})




app.listen(3001,()=>console.log("Escuchando puerto 3001"))