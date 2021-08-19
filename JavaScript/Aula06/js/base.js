// Aula sobre Objetos
// Criação do objeto Usuário
// Terá as seguintes propriedades: id, nome, senha, nivel

// Criando os objetos acima
const usuario = {
    id: 1,
    nome: "Maxswell",
    senha: "123",
    nivel:"admin"
}
// Criar uma lista de objetos. Nosso exemplo será com produtos mais uma forma diferente do exemplo usado anterior.
const produto1 = {
    id: 1,
    nome: "blusa",
    preco: 48.30
};
// criando outros produtos
const produto2 = {
    id: 2,
    nome: "Calça",
    preco: 79.90
};
const produto3 = {
    id: 3,
    nome: "Bermuda",
    preco: 50
    
};
//  Agora colocaremos todos esses produtos dentro de uma lista usando [] dentro o nome separado por vírgula.
const listaprodutos = [produto1, produto2, produto3];

// Criando agora outro objeto e será o objeto funcionário que será uma lista outra forma diferente de fazer []
const listfunc = [
    {
        id: 115,                                // Aplicando o primeiro objeto dentro das {}
        nome: "Maxswell",
        cargo: "Técnico em informática"
        
    },
    {
        id: 220,                                //Aplicando aqui o segundo objeto dentro das {}
        nome: "Marcio",
        cargo: "Gerente"

    },
    {
        id: 97,                                 //Aplicando aqui o terceiro objeto dentro das {}
        nome: "Carlos",
        cargo:"Almoxarifado"
    },
];