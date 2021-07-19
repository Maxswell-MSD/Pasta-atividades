Algoritmo "Reajuste por número de Dependentes"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Assunto Reajuste salarial com vase no numero de dependentes
//0 - 5%
//1,2,3 - 10%
//4,5,6 /15%
//acima de 6 18%
// Autor(a)    : Maxswell Sousa Diniz
// Data atual  : 28/06/2021

var
dependentes:inteiro
nome:caracter
salario,reaj:real


inicio

escreval ("")
escreval ("_______________________________________________________________________________")
Escreval ("**********************REAJUSTE POR NÚMERO DE DEPENDENTES***********************")
escreval ("_______________________________________________________________________________")
ESCREVAL ("")



Escreval ("Coloque o seu nome:")
leia (nome)
Escreval ("Qual é o Seu salário: R$")
leia (salario)
Escreval ("Quantos dependentes você tem?: ")
leia (dependentes)

Escolha dependentes

        caso 0
             reaj<-salario+salario*5/100
             Escreval (" Salário reajustado R$ ", reaj:5:2)
             Escreval (" Valor Reajustado é de 5%")
        caso 1,2,3
             reaj<-salario+salario*10/100
             Escreval (" Salário reajustado R$ ", reaj:5:2)
             Escreval (" Valor Reajustado é de 1%")
        caso 4,5,6
             reaj<-salario+salario*15/100
             Escreval (" Salário reajustado R$ ", reaj:5:2)
             Escreval (" Valor Reajustado é de 15%")
             
// Para valores acima colocamos outrocaso
outrocaso
         reaj<-salario+salario*18/100
         Escreval (" Salário reajustado R$ ", reaj:5:2)
         Escreval (" Valor Reajustado é de 18%")

  Fimescolha


Fimalgoritmo


