window.addEventListener("load",()=>{
    
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:3350/noticias")
    .then((response)=>response.json())
    .then((rs)=>{
        rs.output.map((item)=>{
            estrutura+="<div id='linha'>";
            estrutura += "<div id='titulo'>" + item.titulo + "</div>";
            estrutura+="<div id='img1'><img src="+item.img1+"></div>";
            estrutura+="<div id='datapublicacao'>"+item.datapublicacao+"</div>";
            estrutura+="<div id='atualizar'><a href=atualizar.html?"+item._id+">Atualizar</a></div>";
            estrutura+="<div id='apagar'><a href=apagar.html?"+item._id+">Apagar</a></div>";
            estrutura+="</div>";
        })
        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao tentar listar os produtos -> "+erro));

});
           
           
           
           
           
           