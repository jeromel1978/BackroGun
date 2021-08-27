(function () {
  var Gun = require("gun"); // require('gun')
  var server = require("http").createServer().listen(8080);
  var gun = Gun({ web: server });

  console.log("Relay peer started on port " + 8080 + " with /gun");

  module.exports = gun;
})();
