"use strict";
exports.__esModule = true;
// Cargar modulos y crear nueva aplicacion
var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
app.use(cors());
//Ejemplo: GET http://localhost:8080
app.get("/suma/:var1/:var2", function (req, res, next) {
    var var1 = parseFloat(req.params.var1);
    var var2 = parseFloat(req.params.var2);
    var suma = var1 + var2;
    res.json(suma);
});
//Ejemplo: POST http://localhost:8080/insert/estudiante
app.post("/suma", function (req, res) {
    var body = req.body;
    var suma = body.var1 + body.var2;
    res.json(suma);
    console.log(suma);
});
var server = app.listen(8080, function () {
    console.log("Server is running..");
});
