const express = require('express');
const router = require('./modules/router')
const server = express();
const port = 3000;

server.use(router);
server.use(express.static('public'))


server.listen(port, ()=>{
    console.log(`Running on port ${port}`)

}) ;