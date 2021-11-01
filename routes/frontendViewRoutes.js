const location = require("path");

module.exports = function(app) {
    app.get("/exercise", function(req, res) {
      res.sendFile(location.join(__dirname, "../public/exercise.html"));
    });
  
    app.get("/stats", function(req, res) {
      res.sendFile(location.join(__dirname, "../public/stats.html"));
    });
  
  };