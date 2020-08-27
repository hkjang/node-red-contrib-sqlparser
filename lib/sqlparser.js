module.exports = function (RED) {
  //import Parser for all databases
  const { Parser } = require('node-sql-parser');
  const parser = new Parser();

  function sqlparser(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {
      msg.payload = parser.astify(msg.payload); // mysql sql grammer parsed by default
      self.send(msg);
    });
  }

  RED.nodes.registerType('sqlparser', sqlparser);

};
