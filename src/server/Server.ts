import express from "express";


const server = express();

server.get('/', (req, Res) => {
    
    return Res.send('Olá, DEV!');
});



export { server };