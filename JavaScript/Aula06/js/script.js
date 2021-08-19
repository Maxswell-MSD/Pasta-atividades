// Fazendo uma chamada de integração com base.js com load quando a janela carregar ele vai disparar uma função na tela com console.log
// window.addEventListener("load", () => {
//     console.log(usuario);
//     // para pegar um simples elemento já que o usuario é um elemento completo que tem várias propriedades
//     console.log(usuario.nome);
// });
//  Acima está funcionando está comentado para não executar.

// Lendo agora as listas dos produtos criado na base.js dos produto1, produto2 e produto3
// window.addEventListener("load", () => {
//     // console.log(listaprodutos);
//     // // para visualizar somente um produto tem que ser pela sua posição id usando [] o primeiro será contado como 0, o segundo como 1 e assim por diante...
//     // console.log(listaprodutos[2]);
//     Acima está documentado para não executar mas está funcional
//     para pegar somente o nome do produto 2 faremos as seguintes formas [2].nome  usando o ponto seguido da que precisa
//     console.log(listaprodutos[2].nome);
// });
//  ACIMA ESTÁ DOCUMENTADO PARA NÃO EXECUTAR MAS TUDO ESTÁ FUNCIONAL

// Criando agora a função lista de funcionários
// window.addEventListener("load", () => {
//     // console.log(listfunc);
//     // Para colocar todos os nomes em maiúsculo devemos colocar em um laço 
//     for (var i = 0; i < listfunc.length; i++){
//         console.log(listfunc[i].nome.toLocaleUpperCase());
//     }
// });

//  Outra forma de lista os funcionários na tela é mapeando usando.mp esse código é o mesmo código acima de laço só diferente de fazer
// essa forma é mais curto e rápido se compara com o laço
// window.addEventListener("load", () => {
//     listfunc.map((dados) => {
//         console.log(dados.nome.toLocaleUpperCase());
//     })
    
// });
// ACIMA ESTÁ FUNCIONANDO MAS ESTÁ DOCUMENTADO PARA NÃO EXECUTAR

//  Outra forma de aplica a mesma fução diferente do for e do mapeamento é fazendo uma integração usando forEach

// window.addEventListener("load", () => {
//     listfunc.forEach((rs)=> {
//         console.log(rs.cargo.toLowerCase());
    
//     })
    


// });
// // Essas estruturas estão no formato de JSON cujo é uma listagem de objetos como está no site themoviedb
//  JSON é  javascript On Notation é  Desenvolvimento de API Rest usamos essa função para transmetir arquivos
// Quando se trabalha com Rest você pode trabalhar com quatro => GET | POST | PUT | DELETE

//  Trabalhando para ler algo usamos o GET ou buscando algo dentro da aplicação ou pegando uma orientação de cache
//  Para postar dados para dentro da aplicação usamos o POST
//  Quando for para fazer alguma atualização usamos o PUT 
//  para deletar uma aplicação mantemos a função padrão DELETE para apagar algo no banco de dados
//  Isso é desenvolvido em Back-End

//  LENDO AGORA O DOCUMENTO FILMES.JS E MOSTRANDO NA TELA
window.addEventListener("load", () => {
   
    const body = window.document.body;

    listafilmes.map((dados) => {
        
        var div = document.createElement("div");
        var img = document.createElement("img");
        var h2 = document.createElement("h2");
        var p = document.createElement("p");
        
        img.src = "https://image.tmdb.org/t/p/w500"+dados.poster_path;
        div.appendChild(img);
        h2.innerHTML = dados.title;
        div.appendChild(h2);

        p.innerHTML = dados.overview;
        div.appendChild(p);

        body.appendChild(div);
    });
});