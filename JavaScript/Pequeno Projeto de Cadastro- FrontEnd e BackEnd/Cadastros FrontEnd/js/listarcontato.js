window.addEventListener("load",()=>{
    
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:3350/contatos")
    .then((response)=>response.json())
    .then((rs)=>{
        rs.output.map((item)=>{
            estrutura+="<div id='linha'>";
            estrutura += "<div id='nomecliente'>" + item.nomecliente + "</div>";
            estrutura += "<div id='email'>" + item.email + "</div>";
            estrutura += "<div id='telefone'>" + item.telefone + "</div>";
            estrutura+="<div id='assunto'>"+item.assunto+"</div>";
            estrutura+="<div id='atualizar'><a href=atualizar.html?"+item._id+">Atualizar</a></div>";
            estrutura+="<div id='apagar'><a href=apagar.html?"+item._id+">Apagar</a></div>";
            estrutura+="</div>";
        })
        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao tentar listar os produtos -> "+erro));

});
           
           
           
           
           
           
           
