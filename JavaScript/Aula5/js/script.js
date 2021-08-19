const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

// Clicar no btn1 e chamar a função criada
btn1.addEventListener("click",mensagem);
// Passar o ponteiro do mouse no botão 2 e chamar a função para executar
btn2.addEventListener("mouseover",chamaDados);

// chamada da função de data
btn3.onclick=function(){
    alert(qualData());
    console.log(qualData());
    window.document.title=qualData();
    prompt(qualData());
}
btn4.ondblclick = function(){
    soma(10,20);
    console.log(soma(10,20));
}
btn5.onmouseout = function(){
    console.log(media(10,5));
}
btn6.onclick = function(){
    alert (acrescimo(600,15));
}
