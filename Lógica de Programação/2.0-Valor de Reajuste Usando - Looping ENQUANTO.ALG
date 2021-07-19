Algoritmo "looping ENQUANTO"
// Disciplina   : Cadastro de pessoas
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Fazer um cadastro maior usando um Looping para
// Autor(a)    : Maxswell Sousa Diniz
// Data atual  : 28/06/2021

Var
nome:caracter
salario,reaj,valor_reaj,salareaj,converte:real
contador:inteiro

Inicio
Escreval ("")
Escreval ("____________________________________________________")
Escreval ("                  VALOR DO REAJUSTE                                                                 ")
Escreval ("____________________________________________________")
ESCREVAL ("")

contador <- 0
Enquanto contador<=2 faca

Escreva (" Nome:")
leia (nome)
Escreval ("Qual é o seu salário:")
leia (salario)
Escreval (" Coloque o valor do reajuste:")
leia (valor_reaj)
Escreval ("")
Escreval ("_______________________________________________________________________")
converte<-valor_reaj/100   // Para permitirmos que a pessoa venha editar o valor reajustado joga dentro da caixa para dividir por 100 e virar porcentagem
salareaj<-salario*converte+salario
Escreval (" O valor do reajuste", converte)
Escreval (" Salario reajustado: R$ ", salareaj:7:2)

escreva (contador)     // Para observar o looping
contador<-contador+1          // Ele precisa que some mais um para ele saber qual é a contagem dele para não fica em looping ifinito

fimEnquanto



Fimalgoritmo


