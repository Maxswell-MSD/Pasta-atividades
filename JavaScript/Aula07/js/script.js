window.addEventListener("load", () => {
//   Ferramenta de captura de dados para sincronizar usando o fetch API 
    // Criando uma função de busca quando a página carregar
    // copiando a URL de onde foi gerado o JSON 
    // Colocando para mostra na tela 
    const body = window.document.body;
    const divEstrutura = document.createElement("div");
    divEstrutura.id = "estrutura";
    
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=cfe44d0b2cc6b237731ce9370cf8d102&language=pt-BR&page=1")
        // response é a resposta
        .then((response) => response.json())
        .then((dados) => {
            // Criando as div
            dados.results.map((filme) => {
                var div = document.createElement("div");
                var img = document.createElement("img");
                var h2 = document.createElement("h2");
                var p = document.createElement("p");
                var a = document.createElement("a");
                
                a.href = "detalhes.html";
                a.search=filme.id

                img.src = "https://image.tmdb.org/t/p/w500/"+filme.poster_path;
                h2.innerHTML = filme.title;
                p.innerHTML = filme.release_date;

                a.appendChild(img)

                //  colocando as tags dentro das div
                div.appendChild(a);
                div.appendChild(h2);
                div.appendChild(p);

                divEstrutura.appendChild(div);

            })
        })
    .catch((erro)=>console.error("erro na api." + erro))
    // Tem que abrir na tela de console no navegador
    body.appendChild(divEstrutura);
})