// Fazendo as Quatros operações matemáticas para o
// usuário colocar os valores e mostra o resultado para o usuário.

// todas iniciando com zero com as variável declarada
// var numero1 = 0;
// var numero2 = 0;
// var soma = 0;
// var subtrair = 0;
// var multiplicar = 0;
// var dividir = 0;
// var resto = 0;
// // Corpo do prompt depois de aplicar a variável para mostrar na tela algo para o usuário digitar
// numero1 = prompt(" Digite um número :");
// numero2 = prompt(" Digite outro número :");
// //Colocando agora cada variável para receber um determinado valor de acordo com sua operação.
// // soma = numero1 + numero2; // 2º Devemos modificar somente a forma da soma com os seguintes comandos para corrigir a falha de mostragem do console.
// //  Colocando logo abaixo a maneira correta da variável recever o valor corretamente usando parserInt(nome da variável).
// soma = parseInt(numero1) + parseInt(numero2);
// subtrair = numero1 - numero2;
// multiplicar = numero1 * numero2;
// dividir = numero1 / numero2;
// resto = numero1 % numero2;
// // 1º passo -  colocamos o resultado para aparecer no comando console.
// // 2º devemos pegar a variável e juntar após os dois pontos quando for soma antes colocar + na frente da variável ele vai juntar a soma como o texto do lado.
// console.log("O resultado da soma é: " + soma); //Aqui tem uma falha pelo fato do (+) ser também uma forma de concatenar ele vai juntar em vez de somar.
// console.log("O resultado da subtração é: " + subtrair);
// console.log("O resultado da multiplicação é: " + multiplicar);
// console.log("O resultado da divisão é: " + dividir);
// console.log("O resultado do resto da divisão é: " + resto);
//  ///// Aqui acima foi colocado todos em comentário para não executar na hora de testar as tarefas abaixo mas está 100% funcional//////////////
//________________________________________________________________________________________________________________________________________________________

//  FAZENDO AGORA DESVIO DE FLUXO CONDIÇÃO
// var numero = prompt("Digite aqui um número: ")
// criando uma outra variável para o recebimento do valor e o (%) indica a divisão e o valor do resto (= indica atribuição e o que tiver na direita etá atribuindo a variável)
// var resultado = numero % 2 == 0 ? "par" : "impar"  // na variável resultado entra "par" ou "impa" de acordo com o resultado se o número dividido por 2 for zero resultado, será mostrado par caso não impa.
// //  Mostrando agora na tela o resultado colocado acima
// console.log(resultado);
//  Documentado e testado corretamente está documentado para não executar .
//________________________________________________________________________________________________________________________________________________________
// AGORA COLOCANDO CONDIÇÕES SE NO JAVASCRIPT IF
// if (numero % 2 == 0)
//     console.log("Par");
// else
//     console.log("Impa");
//  Documentado e testado corretamente está documentado para não executar .
//________________________________________________________________________________________________________________________________________________________
// COLOCANDO AGORA OPÇÕES PARA O USUÁRIO COLOCAR COR NO FUNDO DA PÁGINA USANDO BACKGROUNDCOLOR
// var cor = prompt("Digite: \n1->preto\n2->azul\n3->vermelho\n4->amarelo");
// // Colocando as condições
// if (cor == 1)
//     cor = "Black"  // Quando temos somente uma linha de execução não precisamos colocar chaves não é errado pode por agora se abaixo de cor tiver outro comando deve por os dois comandos dentro das chaves
// else if (cor == 2)
//     cor = "blue"
// else if (cor == 3)
//     cor = "red"
// else if (cor == 4)
//     cor = "yellow"
// else
//     cor = "white"
// // Alterando agora a cor de fundo com os seguintes comando indicando que no documento tem corpo pronto para receber essas modificações de escolhas pelo usuário.
// document.body.style.backgroundColor = cor;
//____________Os termos acima foram comentados para não executar____________________________________________________________________________________________________________________________________________
//  USANDO SWITCH PARA FAZER O MESMO TESTE DE CORES FEITO ACIMA, ELE É MAIS INDICADO PARA CARREGAÇÃO DE PROCESSAMENTOS MAIS LONGOS DO QUE O IF.

// var cor = prompt("Digite: \n1->preto\n2->azul\n3->vermelho\n4->amarelo")
// switch (cor) {
//     case "1":
//         cor = "Black";
//         break;
//     case "2":
//         cor = "Blue";
//         break;
//     case "3":
//         cor = "red";
//         break;
//     case "4":
//         cor = "yellow"
//         break;
//     default:
//         cor ="white"
// }

// document.body.style.backgroundColor = cor;
//____________Os termos acima foram comentados para não executar____________________________________________________________________________________________________________________________________________

// EXERCÍCIOS.
// Desconto do Convênio Médico:
// // Para salários maiores ou iguais a 1000, desconto de 7%; caso contrário 5%;
// var salario = prompt("Digite o seu salário :"); // Regra importante sempre declarar a variável e mostra na tela opção para o usuário digitar.

// if (salario >= 1000) // Criamos a condição de escolha nesse caso maior que  1000.
//     console.log(salario * 7 / 100); //Colocamos para mostrar na tela console.log(salario seguido do cálculo de porcentagem)
// else // Usamos o comando senão (else)
//     console.log(salario*5/100)//Colocamos para mostrar na tela console.log(salario seguido do cálculo de porcentagem)

    //  FIM DO PRIMEIRO BLOCO DA 2º AULA. AGORA PRATICAR MUITO ESSES EXEMPLOS
//____________Os termos acima foram comentados para não executar____________________________________________________________________________________________________________________________________________
