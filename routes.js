module.exports = function(app) {
    var fs = require("fs");
    var path = require("path");
    var routePath = path.join(__dirname, "routes");
    fs.readdirSync(routePath).forEach(function(file){
        require(path.join(routePath, file))(app);
    });
};