var express = require('express'),
    path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/routes')(app);

app.listen(8000);