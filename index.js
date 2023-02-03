const express = require("express"); // Importando ExpressJS
const app = express(); // Criando uma instância do ExpressJS
const bodyParser = require("body-parser"); // Importando body-parser
const conection = require("./database/conection"); // Importando conexão do Sequelize com Banco de dados
const askModel = require("./database/Ask"); // Importando model de perguntas

// Autenticação da conexão do Sequelize com o Banco de dados
conection.authenticate().then(() => {
    console.log("Conexão feita com o banco de dados!");
}).catch((msgErro) => {
    console.log(msgErro);
});

// ExpressJS
app.set("view engine", "ejs");
app.use(express.static("public"));

// Body-Parser
app.use(bodyParser.urlencoded({ extended: false })); // Decodificando os dados enviados pelo formulario para serem manipulados pelo JS
app.use(bodyParser.json()); // Permite com que a gente consiga ler dados de formularios enviados por .json

// Rotas
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/saveask", (req, res) => {
    var title = req.body.titleask;
    var description = req.body.description
});

// Servidor
app.listen(2108, (erro) => {
    if (erro) {
        console.log("O servidor está com erro!")
    } else {
        console.log("O servidor está rodando normalmente!")
    }
}); 