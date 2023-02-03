const Sequelize =  require("sequelize"); // Importando o módulo

const conection = new Sequelize("platformask","root","@root@",{ // Configurando conexão ao banco de dados MySQL
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conection; // Exportando conexão do banco de dados