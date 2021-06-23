Algoritmo "Reajuste do produto"
// Ler o produto, a quantidade, preço uinitário e fazer o cálculo do valor total.
// Aplique o reajusto de 2% apenas para valor total acima de R$200,00.
// Para valores abaixo aplique 1%
// Atribuit 2$ e 1 % às variáveis fixas
Var
// Seção de Declarações das variáveis 
Qtde, valor_unit,total,reaj1,reaj2,reajustado: real
produto: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
reaj1<- 1/100
reaj2<- 2/100

escreval (" Coloque o Produto:")
leia (Produto)
escreval (" Qual o valor unitário do produto:")
leia (valor_unit)
escreval (" Quantas quantidades vai querer desse produto:")
leia (Qtde)
total<- Qtde * valor_unit
escreval (" O valor total do produto é de" , total)

se (total <=200) entao
reaj1<- (total*reaj1+total)
escreva (" O valor a ser pago é de", Reaj1)
senao (total >=200) entao
reaj2<- (total*reaj2+total)
escreva (" O valor a ser pago é de", Reaj2)

fimse




Fimalgoritmo