Algoritmo "Reajuste por n�mero de Dependentes"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Assunto Reajuste salarial com vase no numero de dependentes
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
Escreval ("**********************REAJUSTE POR N�MERO DE DEPENDENTES***********************")
escreval ("_______________________________________________________________________________")
ESCREVAL ("")



Escreval ("Coloque o seu nome:")
leia (nome)
Escreval ("Qual � o Seu sal�rio: R$")
leia (salario)
Escreval ("Quantos dependentes voc� tem?: ")
leia (dependentes)

Escolha dependentes

        caso 0
             reaj<-salario+salario*5/100
             Escreval (" Sal�rio reajustado R$ ", reaj:5:2)
             Escreval (" Valor Reajustado � de 5%")
        caso 1,2,3
             reaj<-salario+salario*10/100
             Escreval (" Sal�rio reajustado R$ ", reaj:5:2)
             Escreval (" Valor Reajustado � de 1%")
        caso 4,5,6
             reaj<-salario+salario*15/100
             Escreval (" Sal�rio reajustado R$ ", reaj:5:2)
             Escreval (" Valor Reajustado � de 15%")
             
// Para valores acima colocamos outrocaso
outrocaso
         reaj<-salario+salario*18/100
         Escreval (" Sal�rio reajustado R$ ", reaj:5:2)
         Escreval (" Valor Reajustado � de 18%")

  Fimescolha


Fimalgoritmo


