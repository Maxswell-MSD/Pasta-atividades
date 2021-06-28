algoritmo "Grupo-Maximus"
// Função :Cadastros de Produtos
// Autor : Maxswell Diniz
// Data : 03/06/2021
// Aula (C9-Aula 4 ) Grupo-Maximus Inclusão de pedidos.
var // área de variável
Quantidade,valor_uni,total,ICMS,produ_atua:real  // Pode abreviar mas para o melhor entendimento mantenha
Produto:Caractere  // Registre na mente


inicio
// Seção de Comandos 
ICMS<- 18/100
Escreval ("@@@@@@@@@@Grupo-Maximus@@@@@@@@@@")
Escreval
Escreval ("@@@@@@@@@@Cadastro de Produtos@@@@@@@@@")
Escreval


Escreval (" Coloque aqui o nome do produto:")
leia (Produto)
Escreval (" Valor da quantidade:")
Leia (Quantidade)
Escreval (" Valor unitário:")
leia (valor_uni)
total<- Quantidade*valor_uni
produ_atua <- total*ICMS+total
escreval ("Subtotal: ",total)
escreval ("Valor do seu pedido: ",produ_atua)





fimalgoritmo
