import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

import Gen1Controller from "./controllers/Gen1Controller.js";
import Gen2Controller from "./controllers/Gen2Controller.js";
import Gen3Controller from "./controllers/Gen3Controller.js";
import Gen4Controller from "./controllers/Gen4Controller.js";
import Gen5Controller from "./controllers/Gen5Controller.js";

app.use("/",Gen1Controller);
app.use("/",Gen2Controller);
app.use("/",Gen3Controller);
app.use("/",Gen4Controller);
app.use("/",Gen5Controller);

// Rota principal
app.get("/",function(req,res){
    res.render("index");
})

// Iniciando servidor
const port = 8080;
app.listen(port, function(erro){
    if(erro){
        console.log("Ocorreu um erro ao iniciar o servidor.");
    } else{
        console.log(`Servidor iniciado em http://localhost:${port}`);
    }
})