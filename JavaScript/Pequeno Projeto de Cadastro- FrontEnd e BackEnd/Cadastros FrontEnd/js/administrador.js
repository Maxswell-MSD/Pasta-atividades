window.addEventListener("load",()=>{

    const container = document.getElementById("container");
    var estrutura = "<div id='listarAdministradores'>";

    fetch("http://localhost:3350/administradores")
    .then((response)=>response.json())
    .then((dados)=>{

        dados.output.map((item)=>{
        estrutura += "<div id='noticia'>";
        estrutura += "<div id='conteudo'>";
        estrutura += "<h2>" + item.nomeadm + "</h2>";
        estrutura += "<h2>" + item.email + "</h2>";
        estrutura += "<h2>" + item.loginusuario + "</h2>";
        estrutura += "<h2>"+item. senhausuario+"</h2>";
        
        estrutura += "</div>";
        estrutura += "</div>";
        });

        estrutura += "</div>";

        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao carregar produtos -> "+erro))

})