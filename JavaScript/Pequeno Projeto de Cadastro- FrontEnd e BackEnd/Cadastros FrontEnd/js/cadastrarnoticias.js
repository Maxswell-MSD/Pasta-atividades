const btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.onclick = ()=>{
    const titulo = document.getElementById("titulo");
    const datapublicacao = document.getElementById("datapublicacao");
    const texto = document.getElementById("texto");
    const autor = document.getElementById("autor");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    fetch("http://localhost:3350/noticia/cadastro",{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            titulo:titulo.value,
            datapublicacao:datapublicacao.value,
            texto:texto.value,
            autor:autor.value,
            img1:img1.value,
            img2:img2.value
        })
    })
    .then((response)=>response.json())
    .then((rs)=>{
    alert("Noticia cadastrada com sucesso!");
    titulo.value = "";
    datapublicacao.value = "";
    texto.value = "";
    autor.value = "";
    img1.value = "";
    img2.value = ""
    })
    .catch((erro)=>console.error("Erro ao tentar cadastrar -> "+erro));
}