const axios = require("axios");


const getCharById =(res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result)=> result.data)
    .then((data)=>{
        const character = {
            id:data.id,
            name:data.name,
            image:data.image,
            status:data.status,
            specie:data.species,
            gender:data.gender,
            origin:data.origin
        }
        res.writeHead(200,{'Content-type':'application/json'}).end(JSON.stringify(character))
    })
    .catch((err)=>res.writeHead(500,{'Content-type':'text/plain'}).end(err.message))
}






module.exports = {getCharById};
