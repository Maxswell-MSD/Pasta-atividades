window.addEventListener("load",()=>{
    
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:3350/administradores")
    .then((response)=>response.json())
    .then((rs)=>{
        rs.output.map((item)=>{
            estrutura+="<div id='linha'>";
            estrutura += "<div id='nomeadm'>" + item.nomeadm + "</div>";
            estrutura+="<div id='email'>"+item.email+"</div>";
            estrutura+="<div id='loginusuario'>"+item.loginusuario+"</div>";
            estrutura+="<div id='senhausuario'>"+item.senhausuario+"</div>";
           
            
           
            estrutura+="<div id='atualizar'><a href=atualizar.html?"+item._id+">Atualizar</a></div>";
           
           
            estrutura+="<div id='apagar'><a href=apagar.html?"+item._id+">Apagar</a></div>";
           
           
            estrutura+="</div>";
        })
        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao tentar listar administradores -> "+erro));

});