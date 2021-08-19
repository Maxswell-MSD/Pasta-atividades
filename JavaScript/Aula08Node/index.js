//  importação do módulo do express para criar  o servidor
const express = require("express");

// Fazendo aplicação do servidor express

const app = express();



//  Mensagem  quando houver requisição
app.get("/",(req,res) =>{
    res.send("Olá! Seja Bem-vindo!");
});

app.get("/contato",(req,res) =>{
    res.send("maxswellsousadiniz@yahoo.com");
});

app.get("/produtos", (req, res) => {
    res.send(
        [
            { produto: "calça", Marca: "Lee", Preco: "R$ 150" },
            {produto: "blusa", Marca: "Marisol", Preco: "R$ 40"}
        ]
    );

});

//  definindo a porta de  de comunicação do servidor 
// 3306  // porta padrão do MySQL
// 3307  // Porta padrão Maria-DB
// 5500  // Live server por onde se comunica
// 80 ou 8080 ou 8081   // Porta padrão do Apache
// 5534    // Porta padrão do Oracle
    app.listen(3000,() => console.log("Servidor Online..."));
