var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: false }));

app.use(express.json())
require('./app/routing/apiRoutes')(app);

require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});


