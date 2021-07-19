Algoritmo "Tabela IMC De massa corporal"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/06/2021
Var
// Seção de Declarações das variáveis 
peso,altura,imc:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
Escreval (" Coloque aqui o seu peso:")
Leia (peso)
Escreval (" Coloque aqui a sua altura:")
Leia (altura)
imc<- peso/altura^2
escreval ("################### **Tabela IMC** #################")
escreval (" Menor que 18,5 - muito magro")
escreval (" Entre 18,5 - 24,9 normal")
escreval (" Entre 25,0 - 29,9 Sobrepeso")
escreval (" Menor que 30,0 - 39,9 obesidade")
escreval (" Menor que 40 obesidade grave")
escreval ("")
escreval (" O seu imc é ", imc:5:2)

Fimalgoritmo