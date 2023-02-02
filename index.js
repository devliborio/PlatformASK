const express = require("express"); // Importando ExpressJS
const app = express(); // Criando uma instância no ExpressJS


app.listen(2108,(erro) =>{
    if(erro){
        console.log("O servidor está com erro!")
    } else {
        console.log("O servidor está rodando normalmente!")
    }
});