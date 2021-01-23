const port = 3003;

const cors = require("../config/cors/cors")
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
server.use(cors)

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port,()=>{
    console.log("rodando")
});

module.exports = server;