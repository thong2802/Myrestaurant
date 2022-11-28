var PORT = 3000;

var express = require('express');
var app = express();
var mysql = require('mysql');
var connection  = require('express-myconnection');
var bodyParser = require('body-parser');

var config = require('./database/db');

var dbOptions = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.db
}

// dbOptions = {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     port: '3306',
//     database: 'myrestaurant'
// };

var routers = require('./routes/index');
var publicDir = (__dirname +  '/public/'); // set static dir for display image.

app.use(express.static(publicDir));
app.use(connection(mysql, dbOptions, 'pool'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', routers);
app.listen(PORT, () => {
    console.log('Backend listening on port: ', + PORT);
});
