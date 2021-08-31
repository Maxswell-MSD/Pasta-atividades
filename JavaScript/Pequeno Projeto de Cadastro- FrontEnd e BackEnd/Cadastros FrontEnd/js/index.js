window.addEventListener("load", () => {

    const h1 = document.getElementsByTagName("h1")[0];
    const container = document.getElementById("container");

    fetch("http://localhost:3350")
        .then((response) => response.json())
        .then((dados) => {
            h1.innerHTML = dados.titulo;
            container.innerHTML = dados.texto;
            container.innerHTML += "<img src=" + dados.imagens[0] + ">";
            container.innerHTML += "<img src=" + dados.imagens[1] + ">";
        })
        .catch((erro) => console.error("Erro ao carregar a api " + erro));

})