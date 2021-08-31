window.addEventListener("load",()=>{
    var id = window.location.search;
    id = id.substring(1,id.length);

    if(confirm("Você realmente deseja apagar esses dados?")==true){

        fetch("http://localhost:3350/apagar/"+id,{
            method:"DELETE",
            headers:{
                accept:"application/json",
                "content-type":"application/json"
            }
        })
        .then(()=>{
            alert("Dados apagado com sucesso!");
            window.location.replace("http://127.0.0.1:5500/restrito.html");

        })
        .catch((erro)=>console.error("Erro ao tentar apagar -> "+erro));

    }
    else{
        window.history.back();
    }

    
})