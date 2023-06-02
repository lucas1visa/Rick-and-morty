// var http = require("http")
// var {getCharById} = require("./controllers/getCharById")
// const PORT = 3001
// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split('/').at(-1);
//         getCharById(res, Number(id))
//     }}).listen(PORT, 'localhost')
const express = require('express')
const router = require("./routes/index")
const morgan = require("morgan")
const { conn } = require('./DB_connection');

const server = express()
const PORT = 3001

conn.sync({force: true})

server.use(express.json());
server.use(morgan('dev'))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 server.use("/rickandmorty", router)


server.listen(PORT, ()=> console.log({PORT}))