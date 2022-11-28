var mysql = require('mysql');

var config = {
    database: {
        host: 'localhost', 
        user: "root",  
        password: "root",  
        port: '3306',
        db:'myrestaurant'
    }
};

module.exports = config;