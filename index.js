/*
Exemplo de aplicação node.js*/

const express = require ("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");

const port = 3030;
const address = "localhost";

//ativa uso do EJS e do express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servido simples com o node.js e o Express

const server = app.listen(port,address,()=>{
    let host =server.address().address;
    let port = server.address().port;
    console.log (`Servidor executando no endereço ${host} e porta ${port}`)
});