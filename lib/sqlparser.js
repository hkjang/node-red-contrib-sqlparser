module.exports = function (RED) {
  //import Parser for all databases
  const { Parser } = require('node-sql-parser');
  const parser = new Parser();

  function sqlparser(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {
      try{
        if(msg.sqlify){
          msg.payload = parser.sqlify(msg.payload); // mysql sql grammer parsed by default
        }else{
          msg.payload = parser.astify(msg.payload); // mysql sql grammer parsed by default
        }
        self.send(msg);
      }catch (e){
        msg.payload = e.message;
        self.log(e,msg);
        self.send(msg);
        config.trace();
      }

    });
  }

  RED.nodes.registerType('sqlparser', sqlparser);

};
