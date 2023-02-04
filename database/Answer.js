const Sequelize = require("sequelize"); // Importando sequelize
const connection = require("./conection"); // Importando conexão com o banco de dados

// Criando uma tabela usando Sequelize
const Answer = connection.define("answer", {
    bodyAnswer: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    idQuestion: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Answer.sync({ force: false }).then(() => { });

module.exports = Answer;