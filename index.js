/*
* Exemplo de aplicação Node.js com MongoDB
* Autor: Wellington Wagner F. Sarmento
* 
*
* Este exemplo foi baseado no código escrito em:
* Utilizando a engine EJS para aplicações em NodeJS 
* (https://www.codementor.io/@nulldreams/utilizando-a-engine-ejs-para-aplicacoes-em-nodejs-dok81l3si)
*
*
*/

const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");


const port=3030;
const address = "localhost";

const utils = require("./utils");

const faker = require("faker"); //modulo usado para criar dados fakes aleatorios para testes

let toggleBol=true;


//Eu tirei o faker porque quis colocar os usuarios em homenagem a meus 8 gatos :D
global.users =[
    {name:"Garfield", email:"whiskassache@gato.com",address:"Rua miau, 25",birthday:"2000-03-01",height:"1.70",vote:"true"},
    {name:"Tzar", email:"sommelierdeagua@gato.com",address:"Rua miau, 25",birthday:"2001-06-18",height:"1.60",vote:"true"},
    {name:"Malhada", email:"euodeiotodomundo@gato.com",address:"Rua miau, 26",birthday:"2003-03-12",height:"1.50",vote:"false"},
    {name:"Isadora", email:"durmoodiatodo@gato.com",address:"Rua miau, 25",birthday:"2003-03-12",height:"1.50",vote:"false"},
    {name:"Luna", email:"ilikecuddles@gato.com",address:"Rua miau, 25",birthday:"2004-07-05",height:"1.65",vote:"true"},
    {name:"Prata", email:"naoseimiar@gato.com",address:"Rua miau, 25",birthday:"2004-11-03",height:"1.70",vote:"true"},
    {name:"Nevasca", email:"seimiar@gato.com",address:"Rua miau, 25",birthday:"2004-11-03",height:"1.67",vote:"false"},
    {name:"Pangur", email:"espancadordegatas@gato.com",address:"Rua miau, 25",birthday:"2009-11-25",height:"1.90",vote:"true"}
];


    


//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON

//esse codigo abaixo foi criado para testar variacoes de tempo de resposta do servidor, simulando problemas de lentidao na conexcao e/ou retardos no tempo de resposta do computador onde esta a aplicacao (servidor)
//espera um tempo de 2 segundos (2000 milissegundos) para responder a qualquer requisicao do cliente. Isso gera um delay (espera) proposital para testes do codigo e condicoes de erro.
//app.use(utils.delay(2000));



//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});