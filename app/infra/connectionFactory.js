var mysql = require('mysql');

/**
 * Retorna as conexões com o MySQL
 * @return {[type]} [description]
 */
var connectMYSQL = function(){

  /**
   * Ambiente de Produção da Aplicação
   */
  if(!process.env.NODE_ENV)  {
    return mysql.createConnection({
      host:'mysql',
      user:'root',
      password:'root',
      database:'crud'
    });
  }

  /**
   * Ambiente de Teste da Aplicaçao
   * @type {[type]}
   */
  if (process.env.NODE_ENV == 'test') {
    return mysql.createConnection({
      host:'mysql',
      user:'root',
      password:'root',
      database:'crud_test'
    });
  }
};

module.exports = function(){
  return connectMYSQL;
}
