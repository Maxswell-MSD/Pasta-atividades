Algoritmo "Reajuste do produto"
// Ler o produto, a quantidade, pre�o uinit�rio e fazer o c�lculo do valor total.
// Aplique o reajusto de 2% apenas para valor total acima de R$200,00.
// Para valores abaixo aplique 1%
// Atribuit 2$ e 1 % �s vari�veis fixas
Var
// Se��o de Declara��es das vari�veis 
Qtde, valor_unit,total,reaj1,reaj2,reajustado: real
produto: caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
reaj1<- 1/100     // Atribui��o de valor fixo
reaj2<- 2/100

Escreval (" ################## APRESENTA��O MAXIMUS ################")// VAI MOSTRAR NA TELA
ESCREVAL ("--------------Aplica��o de Reajuste de Produtos--------")
ESCREVAL ("") // vAI DAR ENTER E PULAR LINHA


escreval (" Coloque o Produto:")
leia (Produto)
escreval (" Qual o valor unit�rio do produto:")
leia (valor_unit)
escreval (" Quantas quantidades vai querer desse produto:")
leia (Qtde)
total<- Qtde * valor_unit
escreval (" O valor total do produto � de" , total)

se (total < 200) entao
reajustado<- (total*reaj1+total)
escreva (" O valor reajustado a ser pago � de", Reajustado)
senao (total > 200) entao
reajustado<- (total*reaj2+total)
escreva (" O valor reajustado a ser pago � de", reajustado)

fimse




Fimalgoritmo