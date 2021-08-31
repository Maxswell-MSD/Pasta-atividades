const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const nomeadm = document.getElementById("nomeadm");
    const email = document.getElementById("email");
    const loginusuario = document.getElementById("loginusuario");
    const senhausuario = document.getElementById("senhausuario");
    

    fetch("http://localhost:3350/administrador/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeadm:nomeadm.value,
            email:email.value,
            loginusuario:loginusuario.value,
            senhausuario:senhausuario.value
            
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Administrador cadastrado com sucesso!");
    nomeadm.value = "";
    email.value = "";
    loginusuario.value = "";
    senhausuario.value = ""
    
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar -> "+erro));
}