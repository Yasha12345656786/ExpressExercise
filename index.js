const express = require('express');
const path = require('node:path');

const PORT = process.env.PORT || 8000;

const server = express();
server.use(express.json());

server.use(`/api/store`,require('./Routes/stores'));

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`); 
});