const express = require("express"); // Importando ExpressJS
const app = express(); // Criando uma instância do ExpressJS
const bodyParser = require("body-parser"); // Importando body-parser
const connection = require("./database/conection"); // Importando conexão do Sequelize com Banco de dados
const QuestionModel = require("./database/Question"); // Importando model de perguntas
const AnswerModel = require("./database/Answer"); // Importando model de respostas

// Autenticação da conexão do Sequelize com o Banco de dados
connection.authenticate().then(() => {
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
    QuestionModel.findAll({ raw: true, order: [["id", "DESC"]] }).then((questions) => { // Aqui ele basicamente está fazendo um SELECT * FROM questions e retornando isso de forma crua (Apenas os dados da pergunta) atraves do raw: true e ordenando as perguntas em ordem decrescente usando order: [['id','DESC - decrescente']] (ASC - crescente)
        res.render("index", {
            questions: questions
        });
    });
});

app.get("/ask", (req, res) => {
    res.render("ask");
});

app.post("/saveask", (req, res) => {
    var title = req.body.titlequestion;
    var description = req.body.description
    QuestionModel.create({ // Módulo responsavel por salvar a pergunta na tabela do banco de dados
        title: title,
        description: description
    }).then(() => {
        res.redirect("/") // Após o usuario enviar a pergunta vamos redirecionar ele para nossa pagina principal
    })
});

app.get("/question/:id", (req, res) => {
    var id = req.params.id;
    QuestionModel.findOne({
        where: { id: id }
    }).then((question) => {
        if (question != undefined) { // Se passar esse If siginifica que a pergunta foi encontrada
            res.render("question", {
                question: question
            });
        } else { // Se vier para cá significa que a pergunta foi encontrada
            res.redirect("/");
        }
    });
});

app.post("/torespond", (req, res) => {
    var body = req.body.bodyAnswer;
    var idQuestion = req.body.idQuestion;
    AnswerModel.create({
        bodyAnswer: body,
        idQuestion: idQuestion
    }).then(() => {
        res.redirect("/question/"+idQuestion);
    });
});

// Servidor
app.listen(2108, (erro) => {
    if (erro) {
        console.log("O servidor está com erro!")
    } else {
        console.log("O servidor está rodando normalmente!")
    }
}); 