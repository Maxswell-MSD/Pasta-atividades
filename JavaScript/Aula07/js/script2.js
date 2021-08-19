window.addEventListener("load", () => {
//   Ferramenta de captura de dados para sincronizar usando o fetch API 
    // Criando uma função de busca quando a página carregar
    // copiando a URL de onde foi gerado o JSON 
    // Colocando para mostra na tela 
    const body = window.document.body;
    const divEstrutura = document.createElement("div");
    divEstrutura.id = "estrutura";

    var id = window.location.search.substring(1,7);
    
    fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=cfe44d0b2cc6b237731ce9370cf8d102&language=pt-BR")
        // response é a resposta
        .then((response) => response.json())
        .then((dados) => {
            // Criando as div
            
                var div = document.createElement("div");
                var img = document.createElement("img");
                var h2 = document.createElement("h2");
                var p = document.createElement("p");
              
                
              

                img.src = "https://image.tmdb.org/t/p/w500/"+dados.poster_path;
                h2.innerHTML = dados.title;
                p.innerHTML = dados.overview;

              

                //  colocando as tags dentro das div
                div.appendChild(img);
                div.appendChild(h2);
                div.appendChild(p);

                divEstrutura.appendChild(div);

            
        })
    .catch((erro)=>console.error("erro na api." + erro))
    // Tem que abrir na tela de console no navegador
    body.appendChild(divEstrutura);
})