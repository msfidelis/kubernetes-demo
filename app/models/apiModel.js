function ApiModel(connection) {
  this._connection = connection;
}

ApiModel.prototype.contador = function(callback) {

}

module.exports = function() {
  return ApiModel;
}
