//  ASSUNTO NODE JS
function mensagem() {
    return "olá! Eu sou uma função em módulo do javaScript";
}
function soma(valores) {
    var resultado = 0;
    for (var i = 0; i < valores.length; i++){
    resultado += valores[i];
}
return resultado;

}
function maiorvalor(v) {
    var maior = v[0];
    for (var i = 1; i < v.length; i++) {
        if (v[i] > maior) {
            maior = v[i];
        }
    }
    return maior;
}
//  módulo para exporta
// module.export = {
//     mensagem,
//     soma,
//     maiorvalor
// }
export { mensagem }
export { soma }
export {maiorvalor}