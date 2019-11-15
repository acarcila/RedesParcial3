// Cargar modulos y crear nueva aplicacion
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const mysql = require("mysql");

var mysqlConnection;

function crearConexionBD() {
    mysqlConnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "rysm",
        port: "3307"
    });

    mysqlConnection.connect(function (err) {
        if (err) {
            console.log("error when connecting to db:", err);
        } else {
            console.log("Se conectó a la Base de Datos");
        }
    });
}


app.use(bodyParser.json());

app.get("/hola", function (req, res, next) {
    res.json({ hola: "mundo" });
});

app.get("/datos", function (req, res, next) {
    crearConexionBD();
    mysqlConnection.query("SELECT * FROM datos", (err, rows, fields) => {
        if (err) {
            console.log("=>" + err);
        } else {
            res.json(rows);
        }
        mysqlConnection.end();
    });
});

app.post("/", function (req, res) {
    const var1 = req.body.adios;
    res.json({ hola: var1 });
});

app.listen(8080, () => {
    console.log("Hola :8090");
});
