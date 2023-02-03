const Sequelize = require("sequelize"); // Importando Sequelize
const connection = require("./conection"); // Importando conexão com banco de dados

// Criando uma tabela usando Sequelize
const Question = connection.define("questions",{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Question.sync({force: false}).then(() => {});

module.exports = Question; // Exportando Model