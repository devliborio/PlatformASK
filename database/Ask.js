const Sequelize = require("sequelize"); // Importando Sequelize
const conection = require("./conection"); // Importando conexão com banco de dados

// Criando uma tabela usando Sequelize
const Ask = conection.define('pergunta',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Ask.sync({force: false}).then(() => {});