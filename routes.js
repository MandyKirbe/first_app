//wiki.js - Wiki route module 

const express = require("express");
const router = express.Router();
const app = express();


//let db = require("./db");

//Especifica a pasta contendo arquivos estáticos
//O nome "public" não precisará ser colocado na rota
//Para serem alcançados os arquivos e pastas que estão dentro dele
//Por isso na imagem que está na pasta home.ejs só há o indicativo (alguma coisa)

router.use(express.static('public'));



//exemplo rotas:
/*
 http://localhost:3030/css 
 http://localhost:3030/images
 http://localhost:3030/index.html
*/

router.get('/',(req, res)=>{
    res.render('pages/home'); //é home.ejs mas o .ejs pode ser ocultado
});

router.get('/about',(req,res)=>{

    /*let usuarios=[];
    //Usando o Faker para criar 6 perfis para colocar no about
    for(let cont=1;cont<=6;cont++){
        usuarios.push({name:faker.  name.findName(),email:faker.internet.email(),avatar: faker.image.image()}); 
    }
    console.log(usuarios);*/
    res.render('pages/about');
});

router.get('/curriculo',(req,res)=>{
    res.send('Meu currículo');
});

router.get('/cadastro/insert',(req,res)=>{ 
    //inserir um usuario 
}); 
router.get('/cadastro',(req,res)=>{ 
    //página de cadastro
    res.render('pages/cadastro')
}); 


//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação. 
module.exports = router;