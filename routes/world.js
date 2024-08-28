var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'LjH@mySQL2024',
    database: 'world',
})

connection.connect();
console.log("DB Connected");

var dbRes = connection.query(
    'SELECT * FROM city',
    function (err, results, fields) {
        if (err instanceof Error) throw err;
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(dbRes._rows[0]);
});

module.exports = router;