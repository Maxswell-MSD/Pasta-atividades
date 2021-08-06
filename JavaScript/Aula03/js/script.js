//  Quando o usuário carregar a página ele terá as seguintes mensagens na tela principal
//  Estudo sobre as movimentação do código binário de acordo com o valor colocado na tela
// var numero = prompt(" Digite um número decimal ");

// var binario = 0;
// var resto = 0;
// var mov = 1;

// while (numero != 0) { // Diferente de zero
//     resto = numero % 2; // Pegando o resto da divisão
//     numero = parseInt(numero / 2); // Dividindo e pegando o quociente e jogando na variável numero usando parseInt para computar somente o número inteiro
//     binario = binario + resto * mov; // Movimentando o binário junto com o resto
//     mov = mov *10 // fazendo a movimentação do mov

// }
// // Mostrando na tela
// console.log(binario);

// //  Ele executa antes e verifica depois do while exemplo
// var valor = 10;
// do {
//     console.log("Estou contando")
//     while (valor > 100);
// }
// ___________________________________ Documentando acima para não rodar_______________________________________________

// #########################   CÁLCULO DE CPF ############################################################################
// criando função para o funcionamento do formulário
function verificar() {


    //  Iniciando pedindo o CPF do cliente

    var cpforiginal = 0;
    var cpf9 = 0;
    var peso10 = 10;
    var peso11 = 11;
    var total = 0;
    var resto = 0;
    // passando os dados pelo formulário
    cpforiginal = document.getElementById("cpf").value;

    //  Pedindo ao usuário que coloque o CPF
    // cpforiginal = prompt(" Coloque o seu CPF");
    // vamos fazer a captura dos 9 primeiros números usando a tag substring
    // com o substring iremos informar onde começam o número e onde termina

    cpf9 = cpforiginal.substring(0, 9);       // Usando a sbString nessa forma seguido do 0,9 em que 0 é a posição que começa e o 9 indica os 9 primeiros números
    // verifique se ele já está pegando os 9 primeiro mostrando na tela console
    console.log(cpf9);
    // Agora pegamos um dígito por vez usando o laço for

    // for (var i = 0; i < 9; i++){
    //     console.log("Peguei o => "+ cpf9[i]); // usando console para demonstrar o funcionamento Colocamos cpf9 pq é ele que tera separadamente cada valor unitário
    // }
    //  Fazendo agora o cálculo efetivo de for para separar cada valor dentro de cpf9
    for (var i = 0; i < 9; i++) {
        total += cpf9[i] * peso10;                               //iniciamos com total para somar com o resultado de cpf9 e peso10 Pegamos o valor separadamente junto com cpf9 e multiplicamos cada valor por 10
        peso10--;                                     // agora pegamos o peso10 e diminuirmos para fazer o valor de 10 até 2 diminuir criando valores unitário de 10 até 2
    
    }
    // console.log(total); // assim verificamos o valor total dos números na tela se está corretamente para poder fazer a divisão por 11 e pega o valor do resto para subtrarir 11 - valor do resto para acharmos o primeiro dígito verificador.
    //  pegando o resto da divisão usando %
    resto = total % 11;
    // criando agora a condição se o valor for menor que 2 o valor do primeiro dígito é 0 senão pega o peso 11-pelo resto 

    if (resto < 2)
        cpf9 += "0";

    else
        cpf9 += "" + 11 - resto;
    // Zerando a variável total usando peso 11 para saber o valor do segundo dígito verificador
    total = 0;
    //  Fazendo agora o cálculo efetivo de for para separar cada valor dentro de cpf9
    for (var i = 0; i < 10; i++) {
        total += cpf9[i] * peso11;                               //iniciamos com total para somar com o resultado de cpf9 e peso11 Pegamos o valor separadamente junto com cpf9 e multiplicamos cada valor por 11
        peso11--;                                     // agora pegamos o peso10 e diminuirmos para fazer o valor de 11 até 2 diminuir criando valores unitário de 11 até 2
     
    }
    //  pegando o resto da divisão usando %
    resto = total % 11;
    // criando agora a condição se o valor for menor que 2 o valor do primeiro dígito é 0 senão pega o peso 11-pelo resto 

    if (resto < 2)
        cpf9 += "0";

    else
        cpf9 += "" + 11 - resto;

    console.log(cpf9);

    // Mostrando aviso de verificação de CPF aceito ou não
    if (cpforiginal == cpf9)
        alert("CPF válido");
    else {
        document.getElementById("cpf").style.backgroundColor = "red";
        // document.getElementById("cpf").focus();
        alert("CPF Inválido");
    }

}
document.getElementById("cpf").onblur = function(){
    verificar();
}




























