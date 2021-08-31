window.addEventListener("load",()=>{

    const container = document.getElementById("container");
    var estrutura = "<div id='listarNoticias'>";

    fetch("http://localhost:3350/noticias")
    .then((response)=>response.json())
    .then((dados)=>{

        dados.output.map((item)=>{
        estrutura += "<div id='noticia'>";
        estrutura += "<div id='img1'><img src="+item.img1+"></div>";
        estrutura += "<div id='conteudo'>";
        estrutura += "<h2>"+item. titulo+"</h2>";
        estrutura += "<p>" + item.datapublicacao + "</p>";
        estrutura += "<p>" + item. texto + "</p>";
        estrutura += "<p>" + item.autor + "</p>";
        estrutura += "<div id='img2'><img src="+item.img2+"></div>";
        estrutura += "</div>";
        estrutura += "</div>";
        });

        estrutura += "</div>";

        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao carregar produtos -> "+erro))

})