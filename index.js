const express = require("express"); // Importando ExpressJS
const app = express(); // Criando uma instância do ExpressJS

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(2108, (erro) => {
    if (erro) {
        console.log("O servidor está com erro!")
    } else {
        console.log("O servidor está rodando normalmente!")
    }
}); 