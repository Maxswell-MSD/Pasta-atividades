const btnAtualizar = document.getElementById("btnAtualizar");

window.addEventListener("load", () => {
    var id = window.location.search;
    id = id.substring(1, id.length);

    fetch("http://localhost:3350/noticias/"+id)
        .then((response) => response.json())
        .then((rs)=>{
            document.getElementById("titulo").value = rs.output.titulo;
            document.getElementById("datapublicacao").value = rs.output.datapublicacao;
            document.getElementById("texto").value = rs.output.texto;
            document.getElementById("autor").value = rs.output.autor;
            document.getElementById("img1").value = rs.output.img1;
            document.getElementById("img2").value = rs.output.img2;
    
        })
        .catch((erro) => console.error("Erro ao tentar carregar os dados -> "+erro))
  });

btnAtualizar.onclick = () => {
    var id = window.location.search;
    id = id.substring(1, id.length);

    
    const titulo = document.getElementById("titulo");
    const datapublicacao = document.getElementById("datapublicacao");
    const texto = document.getElementById("texto");
    const autor = document.getElementById("autor");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    fetch("http://localhost:3350/atualizar/"+id,{
        method:"PUT",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body: JSON.stringify({
            titulo: titulo.value,
            datapublicacao: datapublicacao.value,
            texto: texto.value,
            autor: autor.value,
            img1: img1.value,
            img2: img2.value
        })
    })
        .then((response) => response.json())
        .then((rs) => {
            alert(rs.output);
            manchete.value = "";
            datapublicacao.value = "";
            texto.value = "";
            autor.value = "";
            img1.value = "";
            img2.value = ""
        
        })
        .catch((erro) => console.log("Erro ao tentar atualizar Notícia -> " + erro))

    
};

