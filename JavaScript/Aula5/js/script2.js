//fazendo carregamento da página para carregar com três botões e uma imagem já na tela

window.addEventListener("load",estrutura);

function estrutura(){
    console.log("carregado.")

    const body = window.document.body;
    const divBarra =document.createElement("div");
    divBarra.className = "barra";

    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");

    btn1.innerHTML = "imagem1";
    btn2.innerHTML = "imagem2";
    btn3.innerHTML = "imagem3";

    divBarra.appendChild(btn1);
    divBarra.appendChild(btn2);
    divBarra.appendChild(btn3);


    const img1 = document.createElement("img")
    img1.src="img/css.jpg";
    img1.className="imgHome"



    // Adicionar a div ao body
    body.appendChild(divBarra);
    // Adicionar a imagem ao corpo da página
    body.appendChild(img1);

// Ações para os botões
btn1.onclick = function(){
    img1.src="img/html.jpg";
}
btn2.onclick = ()=>{
    img1.src="img/css.jpg"

}
btn3.onclick = ()=>{
    img1.src="img/javascript.jpg"
}
img1.onmouseover = ()=>{
    img1.style.width = "60%";
    img1.style.zIndex = "1000";
}
img1.onmouseout = () =>{
    img1.style.width = "50%";
    img1.style.zIndex = "10";

}




}