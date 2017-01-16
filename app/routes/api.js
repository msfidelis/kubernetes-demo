module.exports = function(app) {
  /**
   * [os description]
   * @type {[type]}
   */
  app.get('/api/hostname', function (req, res) {
    var os = require('os');
    return res.json(os.hostname());
  });

  app.get('/api/contador/local', function (req, res) {
    var connectionLocal = app.infra.connectionFactory();
    console.log(connectionLocal);
    res.send('oi');
  });

  app.get('/api/contador/server', function (req, res) {
    var connection = app.infra.connectionFactory();
    console.log(connection);
    res.send('legal');
  });

}
