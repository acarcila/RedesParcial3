// Cargar modulos y crear nueva aplicacion
import * as express from "express";
var app = express();
import * as cors from "cors";
import * as bodyParser from "body-parser";

app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
app.use(cors());

app.get("/suma/:var1/:var2", function (req, res) {
    var var1: number = parseFloat(req.params.var1);
    var var2: number = parseFloat(req.params.var2);
    var suma: number = var1 + var2;
    res.json(suma);
});

app.post("/suma", function (req, res) {
    var body = req.body;
    var suma = body.var1 + body.var2;
    res.json(suma);
    console.log(suma);
});

var server = app.listen(8080, function () {
    console.log("Server is running..");
});
