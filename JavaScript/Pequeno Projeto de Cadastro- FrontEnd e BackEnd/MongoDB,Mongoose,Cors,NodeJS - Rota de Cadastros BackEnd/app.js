const express = require("express");

const bodyParser = require("body-parser");


const mongoose = require("mongoose");

// Criando CORS instalando no terminal a extensão com o seguintes comandos (npm i cors)
const cors = require("cors");



const config= {
    origin:"*",
    optionsSuccessStatus:200
}





// Criando o link com o mongoDB

const url = "mongodb+srv://maxswell:Senha123@maxswell-msd.szg1h.mongodb.net/DesenvolvimentoWeb?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

// criando as estruturas das tabelas
const tbnoticias = mongoose.Schema({
    titulo: String,
    datapublicacao: String,
    texto: String,
    autor: String,
    img1: String,
    img2: String

});
// Iniciando a tabela de cadastro de colaboradores e administradores
const tbcadastro = mongoose.Schema({
    nomecolaborador: String,
    telefone: String,
    email: String,
    endereco: String,
    cpf: String,
    usuario: String,
    datacadastro: String,
    cargo: String,
    senha: String,
    Sexo: String,
    nascimento: String,
    rg: String,
    estadocivil: String,
    remuneracao: String

});

const tbcontato = mongoose.Schema({
    nomecliente:String,
    email:String,
    telefone:String,
    assunto: String
    
});
const tbadm = mongoose.Schema({
    nomeadm:String,
    email:String,
    loginusuario:String,
    senhausuario: String
    
});


// Colocando agora no banco de dados as aplicações feitas nas tabelas de cadastros
const Noticias = mongoose.model("noticias", tbnoticias);
const Contato = mongoose.model("contato", tbcontato);
const Cadastros = mongoose.model("cadastro", tbcadastro);
const Administrador = mongoose.model("administrador", tbadm);





const app = express();

app.use(cors())

app.use(bodyParser.json());

// Criando a rota raiz da página principal ao colocar http://localhost:3350
app.get("/", cors(config), (req, res) => {
    res.status(200).send({
        titulo: "Desenvolvimento Web",
        texto: "Ser um desenvolvedor full stack significa ser puxado para fora da zona de conforto para aprender novas habilidades o tempo todo. E aí, topa? Se você é alguém que gosta de horários de trabalho flexíveis, empregos engajados de forma criativa e altos salários iniciais (quem não gosta, né?), você provavelmente já pensou em fazer a transição para uma carreira em tecnologia. Quando você começa a pesquisar trabalhos em tecnologia, acaba encontrando o título de “desenvolvedor full stack” com frequência. Um título que pode, compreensivelmente, deixar você coçando a cabeça.Talvez você já saiba o que é um desenvolvedor web, mas não que um desenvolvedor de full stack desempenha um papel significativamente diferente. Isso basicamente quer dizer que você tem ainda mais habilidades necessárias para aprender.O que é um desenvolvedor full stack?O primeiro passo para entender o desenvolvimento full stack é decompor suas partes componentes, que são:Desenvolvimento Web Front EndDesenvolvimento Web de Back-endCombine esses dois e você terá o desenvolvimento full-stack. (lembre-se de que “web” também pode ser substituído pelo desenvolvimento de aplicativos móveis).Desenvolvimento Front End O desenvolvimento front end é o campo de desenvolvimento da web que envolve a criação das partes frontais de um site ou aplicativo. São aqueles conteúdos do site que os visitantes visualizam na tela do computador por meio do navegador da web.        Idiomas comuns de desenvolvimento web front end incluem:        HTMLCSSJavaScriptHTML e CSS são usados ​​para definir o layout e a aparência de páginas da web, enquanto o JavaScript é usado para implementar e controlar o conteúdo dinâmico de páginas da web (pense em gráficos animados, formulários interativos e apresentações de slides de fotos).",
        autor: "Maxswell-MSD",
        datadepublicacao: "23/08/2021",
        imagens:[
            "https://compartilhandobr.com/wp-content/uploads/2020/02/fullstack-master-compartilhandobr.jpg",
            "https://cdn.dribbble.com/users/763363/screenshots/3557947/attachments/791767/fullstack-logo-light.png?compress=1&resize=400x300"
        ]
    });
});


// faremos agora o refactor(refatorar), ou seja, modificar o código para uma nova execução é uma atualização
// do código rota para exibir todos os produtos cadastrados no banco de dados.



// Criando rota da tabela produto
app.get("/noticias", cors(config), (req, res) => {
    // fazendo agora o refactor para exibir todos os produtos cadastrados na tela
    Noticias.find().then((rs) => {
        res.status(200).send({ output: rs })
        
    });
    });

    app.get("/noticias/:id", cors(config), (req, res) => {
        Noticias.findById(req.params.id).then((rs) => {
            res.status(200).send({ output: rs })
        });
    });



app.post("/noticia/cadastro",cors(config),(req,res)=>{
   
    const dados = new Noticias(req.body);
    dados.save().then((rs)=>{
        res.status(201).send({output:"Dados cadastrados "+rs})
    }).catch((erro)=>res.status(400).send({output:"Erro na execução" + erro}))
});




app.put("/atualizar/:id",cors(config),(req,res) =>{
    // aplicando refactor do produto para encontrar pelo id e atualizar
    Noticias.findByIdAndUpdate(req.params.id, req.body, (erro, dados) => {
        if (erro) {
            res.status(400).send({ output:"Erro ao tentar atualizar" + erro });
            return;
        }
        res.status(200).semd({output:"Dados atualizado com Sucesso!" + dados });
    });


    // res.send({produto:"produto"});     // documentando a rota para fazermos o refactor do put para produto
});

app.delete("/apagar/:id",cors(config), (req, res) => {
    // aplicando refactor do produto para apagar usando o id
    Noticias.findByIdAndDelete(req.params.id).then((rs) => {
        res.status(200).send({ output: "Noticia apagada." });
    });

    // res.send({contato:"apagar"});
});



// Criando rota da tabela contato

app.get("/contatos", cors(config), (req, res) => {
    Contato.find().then((rs) => {
        res.status(200).send({ output: rs })
    });
});
//localizar um produto por seu id
app.get("/contato/:id", cors(config), (req, res) => {
    Contato.findById(req.params.id).then((rs) => {
        res.status(200).send({ output: rs })
    });
});



// Rota para cadastrar os colaboradores e administradores 
app.post("/contato/cadastro",cors(config), (req, res) => {
    // criando 7ª parte usando a ligação com a 6ª parte
    const dados = new Contato(req.body);
    dados.save().then((rs)=>{
        res.status(201).send({output:"Dados cadastrados "+rs})
    }).catch((erro) => res.status(400).send({ output: "Erro na execução" + erro }))

});



// Rota para atualizar o cadastro
app.put("/atualizar/:id", cors(config), (req, res) => {

   
    Contato.findByIdAndUpdate(req.params.id, req.body, (erro, dados) => {
        if (erro) {
            res.status(400).send({ output: "Erro ao tentar atualizar Contato " + erro });
            return;
        }
        res.status(200).send({ output: "Contato atualizado com sucesso! " + dados });
    });


});
// Rota para apagar dados cadastrado
app.delete("/apagar/:id", cors(config), (req, res) => {
    Contato.findByIdAndDelete(req.params.id).then((rs) => {
        res.status(200).send({ output: "Contato apagado." });
    });
});






// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
//  Rota para exibir os cadastros dos colaboradores e administradores no bando de dados
app.get("/colaboradores", cors(config), (req, res) => {
    Cadastros.find().then((rs) => {
        res.status(200).send({ output: rs })
    });
});
//localizar um produto por seu id
app.get("/colaborador/:id", cors(config), (req, res) => {
    Cadastros.findById(req.params.id).then((rs) => {
        res.status(200).send({ output: rs })
    });
});



// Rota para cadastrar os colaboradores e administradores 
app.post("/colaborador/cadastro",cors(config), (req, res) => {
    // criando 7ª parte usando a ligação com a 6ª parte
    const dados = new Cadastros(req.body);
    dados.save().then((rs)=>{
        res.status(201).send({output:"Dados cadastrados "+rs})
    }).catch((erro) => res.status(400).send({ output: "Erro na execução" + erro }))

});



// Rota para atualizar o cadastro
app.put("/atualizar/:id", cors(config), (req, res) => {

   
    Cadastros.findByIdAndUpdate(req.params.id, req.body, (erro, dados) => {
        if (erro) {
            res.status(400).send({ output: "Erro ao tentar atualizar " + erro });
            return;
        }
        res.status(200).send({ output: "atualizado com sucesso! " + dados });
    });


});
// Rota para apagar dados cadastrado
app.delete("/apagar/:id", cors(config), (req, res) => {
    Cadastros.findByIdAndDelete(req.params.id).then((rs) => {
        res.status(200).send({ output: "Produto apagado." });
    });
});

// ////////////////////////////////////////////////////////////////////////////////////////////////////
// Rota dos Administradores do site

app.get("/administradores", cors(config), (req, res) => {
    Administrador.find().then((rs) => {
        res.status(200).send({ output: rs })
    });
});
//localizar um produto por seu id
app.get("/administrador/:id", cors(config), (req, res) => {
    Administrador.findById(req.params.id).then((rs) => {
        res.status(200).send({ output: rs })
    });
});



// Rota para cadastrar os colaboradores e administradores 
app.post("/administrador/cadastro",cors(config), (req, res) => {
    // criando 7ª parte usando a ligação com a 6ª parte
    const dados = new Administrador(req.body);
    dados.save().then((rs)=>{
        res.status(201).send({output:"Dados cadastrados "+rs})
    }).catch((erro) => res.status(400).send({ output: "Erro na execução" + erro }))

});



// Rota para atualizar o cadastro
app.put("/atualizar/:id", cors(config), (req, res) => {

   
    Administrador.findByIdAndUpdate(req.params.id, req.body, (erro, dados) => {
        if (erro) {
            res.status(400).send({ output: "Erro ao tentar atualizar " + erro });
            return;
        }
        res.status(200).send({ output: "Dados atualizado com sucesso! " + dados });
    });


});
// Rota para apagar dados cadastrado
app.delete("/apagar/:id", cors(config), (req, res) => {
    Administrador.findByIdAndDelete(req.params.id).then((rs) => {
        res.status(200).send({ output: "Usuário Administrador apagado." });
    });
});





















// Criando a porta de conexão


app.listen(3350, () => console.log("Servidor online..."));  