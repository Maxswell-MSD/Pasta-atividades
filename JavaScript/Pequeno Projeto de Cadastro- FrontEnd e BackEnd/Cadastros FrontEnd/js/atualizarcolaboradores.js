const btnAtualizar = document.getElementById("btnAtualizar");

window.addEventListener("load", () => {
    var id = window.location.search;
    id = id.substring(1, id.length);

    fetch("http://localhost:3350/colaborador/"+id)
        .then((response) => response.json())
        .then((rs)=>{
            document.getElementById("nomecolaborador").value = rs.output.nomecolaborador;
            document.getElementById("telefone").value = rs.output.telefone;
            document.getElementById("email").value = rs.output.email;
            document.getElementById("endereco").value = rs.output.endereco;
            document.getElementById("cpf").value = rs.output.cpf;
            document.getElementById("usuario").value = rs.output.usuario;
            document.getElementById("datacadastro").value = rs.output.datacadastro;
            document.getElementById("cargo").value = rs.output.cargo;
            document.getElementById("senha").value = rs.output.senha;
            document.getElementById("Sexo").value = rs.output.Sexo;
            document.getElementById("nascimento").value = rs.output.nascimento;
            document.getElementById("rg").value = rs.output.rg;
            document.getElementById("estadocivil").value = rs.output.estadocivil;
            document.getElementById("remuneracao").value = rs.output.remuneracao;
    
        })
        .catch((erro) => console.error("Erro ao tentar carregar os dados -> "+erro))
  });

btnAtualizar.onclick = () => {
    var id = window.location.search;
    id = id.substring(1, id.length);

    
    const nomecolaborador = document.getElementById("nomecolaborador");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const endereco = document.getElementById("endereco");
    const cpf = document.getElementById("cpf");
    const usuario = document.getElementById("usuario");
    const datacadastro = document.getElementById("datacadastro");
    const cargo = document.getElementById("cargo");
    const senha = document.getElementById("senha");
    const Sexo = document.getElementById("Sexo");
    const nascimento = document.getElementById("nascimento");
    const rg = document.getElementById("rg");
    const estadocivil = document.getElementById("estadocivil");
    const remuneracao = document.getElementById("remuneracao");

    fetch("http://localhost:3350/atualizar/"+id,{
        method:"PUT",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body: JSON.stringify({
            nomecolaborador: nomecolaborador.value,
            telefone: telefone.value,
            email: email.value,
            endereco: endereco.value,
            cpf: cpf.value,
            usuario: usuario.value,
            datacadastro: datacadastro.value,
            cargo: cargo.value,
            senha: senha.value,
            Sexo: Sexo.value,
            nascimento: nascimento.value,
            rg: rg.value,
            estadocivil: estadocivil.value,
            remuneracao: remuneracao.value
        })
    })
        .then((response) => response.json())
        .then((rs) => {
            alert(rs.output);
            nomecolaborador.value = "";
            telefone.value = "";
            email.value = "";
            endereco.value = "";
            cpf.value = "";
            usuario.value = "";
            datacadastro.value = "";
            cargo.value = "";
            senha.value = "";
            Sexo.value = "";
            nascimento.value = "";
            rg.value = "";
            estadocivil.value = "";
            remuneracao.value = ""
        
        })
        .catch((erro) => console.log("Erro ao tentar atualizar Notícia -> " + erro))

    
};

