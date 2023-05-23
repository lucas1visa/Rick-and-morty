const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character"

const getCharById =(req, res)=>{
    const id = req.params.id;
    axios.get(`${URL}/${id}`)
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
        res.status(200).json(character)
    })
    
    .catch((error)=>res.status(500).send((error.message)))
}






module.exports = {getCharById};
