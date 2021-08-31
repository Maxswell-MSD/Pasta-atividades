const btncolaborador = document.getElementById("btncolaborador");

btncolaborador.onclick = ()=>{
    const nomecolaborador = document.getElementById("nomecolaborador");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const endereco = document.getElementById("endereco");
    const cpf  = document.getElementById("cpf ");
    const usuario = document.getElementById("usuario");
    const datacadastro = document.getElementById("datacadastro");
    const cargo  = document.getElementById("cargo ");
    const senha  = document.getElementById("senha ");
    const Sexo = document.getElementById("Sexo");
    const nascimento = document.getElementById("nascimento");
    const rg = document.getElementById("rg");
    const estadocivil = document.getElementById("estadocivil");
    const remuneracao = document.getElementById("remuneracao");

    fetch("http://localhost:3350/colaborador/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomecolaborador:nomecolaborador.value,
            telefone:telefone.value,
            email:email.value,
            endereco:endereco.value,
            cpf :cpf .value,
            usuario: usuario.value,
            datacadastro: datacadastro.value,
            cargo : cargo .value,
            senha : senha .value,
            Sexo: Sexo.value,
            nascimento: nascimento.value,
            rg: rg.value,
            estadocivil: estadocivil.value,
            remuneracao:remuneracao.value
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Colaboradores cadastrado com sucesso!");
    nomecolaborador.value = "";
    telefone.value = "";
    email.value = "";
    endereco.value = "";
    cpf .value = "";
    usuario.value = "";
    datacadastro.value = "";
    cargo .value = "";
    senha .value = "";
    Sexo.value = "";
    nascimento.value = "";
    rg.value = "";
    estadocivil.value = "";
    remuneracao.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar -> "+erro));
}