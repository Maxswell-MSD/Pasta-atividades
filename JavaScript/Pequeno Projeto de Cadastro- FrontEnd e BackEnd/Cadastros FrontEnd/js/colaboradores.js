window.addEventListener("load",()=>{

    const container = document.getElementById("container");
    var estrutura = "<div id='listarColaboradores'>";

    fetch("http://localhost:3350/colaboradores")
    .then((response)=>response.json())
    .then((dados)=>{

        dados.output.map((item)=>{
            estrutura += "<p>" + item.nomecolaborador + "</p>";
            estrutura += "<p>" + item.telefone + "</p>";
            estrutura += "<p>" + item.email + "</p>";
            estrutura += "<p>" + item.endereco + "</p>";
            estrutura += "<p>" + item.cpf  + "</p>";
            estrutura += "<p>" + item.usuario + "</p>";
            estrutura += "<p>" + item.datacadastro + "</p>";
            estrutura += "<p>" + item.cargo  + "</p>";
            estrutura += "<p>" + item.senha  + "</p>";
            estrutura += "<p>" + item.Sexo + "</p>";
            estrutura += "<p>" + item.nascimento + "</p>";
            estrutura += "<p>" + item.rg + "</p>";
            estrutura += "<p>" + item.estadocivil + "</p>";
            estrutura += "<p>" + item.remuneracao + "</p>";
           
            
        estrutura += "</div>";
        estrutura += "</div>";
        });

        estrutura += "</div>";

        container.innerHTML = estrutura;
    })
    .catch((erro)=>console.error("Erro ao carregar produtos -> "+erro))

})