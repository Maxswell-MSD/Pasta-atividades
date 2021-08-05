//  ESTRUTURA DE REPETIÇÃO DE CÓDIGOS VÁRIAS VEZES.
/* A estrutura da repetição

1- Inicio da variável
2- Condição para repetição
3- Corpo de execução
4- Incrementação | Decrementação

Ex de estrutura de repetição por comandos entre os três o for é o mais rápido e eles usam o processador para suas execuções
tornando rápido a sua execução:
For, While, Do While 

*/

//  Exemplos básicos da estrutura de repetição usando For

// for (var i = 0; i <= 10; i++)  // colocamos a variável i após o número 0 seguido da quantidade de vezes que vai repetiro zero vai começar a primeira contagem e ela terminará na 11 contagem de repetição e jogará o 11 fora
// var i=0  é o inicio da variável
// i <=10 true end false aqui é a condição para repetição
// console.log(i); corpo de execução
// i++ é a incrementação de contagem em 1 em 1    
    
// (i <= 10 ) se a repetição computar valor 10 ele para de repetir enquando i for menor que 10 ele vai repetir até chegar a contagem 10
// for(var i=0;) colocamos a variável dentro do for e iniciando com zero no final da contagem ele vai contar o 11 repetição e vai jogar fora mantendo somente 10 repetidor
// i++ ou qualque variavel++  é um contador de atribuição toda vez que o zero passar de 1 a 10 se repetindo o zero contará como um assim por diante até chegar a 10 repetição.

//     //  Estrutura modelo
// for (var i = 0; i <= 10; i++){
//         console.log(i); 


//     }
// ____________________________________Acima está documentado para não rodar o programa mas está funcional______________________________________________________________
//  Mais exemplos de repetição mostrando na tela quais são os números pares de 1 a 100
// Regra sempre cria fora a variável e usa a condição if para declarar 
// var qtd = 0;
// for(var numero = 1 ; numero <= 100 ; numero++){
//     if(numero % 2 == 0) {  //colocamos o (%) indicando divisão e toda vez que o numero fizer a contagem vai passar pela condição if na divisão se restar 0 ele vai para o passo seguinte pelo filtro quantidade++ fazendo a contagem indicando os valores pares
//         console.log(numero);
//         qtd++;
// // colocamos agora para mostrar na tela os números pares

        
//    }
// }
//         console.log("A quantidade de números pares é" +qtd);

// Estrutura modelo dos números pares

// var qtd = 0;
// for (var numero = 1; numero <= 100; numero++){
//     if (numero % 2 == 0) {
//         console.log(numero);
//         qtd++;
       
//     }
// }
// console.log(" Os números pares é" + qtd)

// // Estrutura modelo dos números impa basta na condição if tirar o (==) e colocar (!=) assim mudará a forma para impa indicando diferente de 0 com trocar o 0 por 1 mantendo o (==) vai da a mesma forma de impa
// var qtd = 0;
// for (var numero = 1; numero <= 100; numero++){
//     if (numero % 2 != 0) {
//         console.log(numero);
//         qtd++;
       
//     }
// }
// console.log(" Os números Impa é" +qtd)
// _____________________________________Estrutura acima está funcional mas está documentada para não executar____________________________________________

//   MODELO DE TABOADA JUNTO COM UMA DIV ID NO HTML PARA O USUÁRIO INTERAGIR NA TELA USANDO O LAÇO FOR DE CONTAGEM DE REPETIÇÃO
// var numero = prompt("Digite um número para fazer a sua taboada ");

// for (var taboada = 1; taboada <= 10; taboada++){
//     // depois de criar uma id no html deve colocar os seguintes comando, procurar em documento um elemento id "nome do id " ao achar coloque dentro do html .INNERhtml SEGUIDO DO += ASSIM VAI ACUMULAR A IDEIA NA VEZ DE JUNTAR USANDO +
//     document.getElementById("saida").innerHTML += numero +"x"+taboada+"="+(numero*taboada)+"<br>";
// }
// _____________________________________Estrutura acima está funcional mas está documentada para não executar____________________________________________

// USANDO AGORA A ESTRUTURA DE REPETIÇÃO  While MUITO INDICADO PARA ESTRUTURA DE BANCO DE DADOS E ARQUIVOS DE TESTO QUE NÃO PRECISA FALAR QUE CHEGOU AO PONTO FINAL ELE MESMO VAI SABER CUJO ELE TESTA SEMPRE A EXECUÇÃO ELE TESTA SEMPRE
// PARA VER SE PODE CONTINUAR ELE REPETE ATÉ VER QUE REALMENTE CHEGOU AO FIM SENDO UM POUCO MAIS LENTO QUE O FOR

// var x = 1;
// while(x <= 10){
//     console.log(x);
//     x++;
// }
//  CRIANDO AGORA PEQUENO MENU USANDO O while o usuário pode escolher um número e ele troca a cor de fundo e com opção para sair
// *********************** PROFESSOR ERROU ESSA PARTE MAS DEIXA QUETO ********************************************
// var entrada = prompt("Digite :\n1->preto\n2->red\n3->blue\n4->sair");
// // Enquanto a entrada for diferente de 4 o usuário tera coisas para escolher se escolher 4 ele vai sair
// while (entrada != 4) {
//     // aplicando condição if
//     if (entrada == 1)
//         document.body.style.backgroundcolor = "Black";
//     // Aplicando senão com else
//     else if (entrada == 2)
//         document.body.style.backgroundcolor = "red";
//         // caso ele coloque alguma opção invalida vai mostrar as seguintes mensagens
//     else ("Esta Entrada não é válida!");

//     //  Aplicando loping de repetição basta copiar a linha do prompt e colar aqui dentro mesmo enquanto não digitar 4 ou numero de sair ele vai continuar em looping
//     var entrada = prompt("Digite :\n1->preto\n2->red\n3->blue\n4->sair");
    
// }
