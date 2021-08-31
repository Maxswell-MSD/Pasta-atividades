window.addEventListener("load",()=>{
    
    const container = document.getElementById("container");

    var estrutura = "";

    fetch("http://localhost:3350/colaboradores")
    .then((response)=>response.json())
    .then((rs)=>{
        rs.output.map((item)=>{
            estrutura+="<div id='linha'>";
            estrutura+= "<div id='nomecolaborador'>" + item.nomecolaborador + "</div>";
            estrutura+= "<div id='telefone'>" + item.telefone + "</div>"; 
            estrutura+= "<div id='email'>" + item.email + "</div>";
            estrutura+= "<div id='endereco'>" + item.endereco + "</div>";
            estrutura+= "<div id='cpf '>" + item.cpf  + "</div>";
            estrutura+= "<div id='usuario'>" + item.usuario + "</div>";
            estrutura+= "<div id='datacadastro'>" + item.datacadastro + "</div>";
            estrutura+= "<div id='cargo '>" + item.cargo  + "</div>";
            estrutura+= "<div id='senha '>" + item.senha  + "</div>";
            estrutura+= "<div id='Sexo'>" + item.Sexo + "</div>";
            estrutura+= "<div id='nascimento'>" + item.nascimento + "</div>";
            estrutura+= "<div id='rg'>" + item.rg + "</div>";
            estrutura+= "<div id='estadocivil'>" + item.estadocivil + "</div>";
            estrutura+= "<div id='remuneracao'>" + item.remuneracao + "</div>";
            estrutura+="<div id='atualizar'><a href=atualizar.html?"+item._id+">Atualizar</a></div>";
            estrutura+="<div id='apagar'><a href=apagar.html?"+item._id+">Apagar</a></div>";
            estrutura+="</div>";
        })
        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao tentar listar os produtos -> "+erro));

});
           
           
           
           
           
           
