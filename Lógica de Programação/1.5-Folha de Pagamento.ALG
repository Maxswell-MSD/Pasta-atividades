Algoritmo "Folha de Pagamento"

// Disciplina   : [Linguagem e Lógica de Programação] Técnico em informática

// Professora   : Kelly

// Descrição   : Cálculo de Desconto de vale transporte e seu desconto, Plano de saúde, IR, INSS, Total de desconto e Total Líquido.

// Autor(a)    : Maxswell Sousa Diniz

// Data atual  : 24/06/2021

Var

// Variáveis da folha de pagamento

nome:caracter

salbruto,ir,inss,plsaude,vt,descvt,totimpos,salaliquido:real





Inicio

// Cálculo de Folha de Pagamento

// Calculando o valor do I.R e INSS
escreval ("")
escreval ("----------------------Maxswell Sousa Diniz----------------------")
Escreval ("***********************FOLHA DE PAGAMENTO***********************")
ESCREVAL ("")



Escreva (" Coloque o Seu nome:")

Leia (nome)

Escreva (" Coloque o valor do seu salário:")

leia (salbruto)

escreval ("")
Escreval ("-------------------CÁLCULO DE IR E INSS---------- --------------")
ESCREVAL ("")


     se (salbruto >=0) e (salbruto <=800)entao

        ir<-salbruto*0/100

        inss<-salbruto*8/100

         escreval (" Valor do IR R$", ir:5:2)

           Escreval (" Valor do INSS R$", inss:5:2)



senao

        se (salbruto >=900) e (salbruto <=1800)entao

           ir<-salbruto*15/100

           inss<-salbruto*9/100

           escreval (" Valor do IR R$", ir:5:2)

           Escreval (" Valor do INSS R$", inss:5:2)





senao



           se (salbruto=1800) entao

           ir<-salbruto*25/100

             inss<-salbruto*10/100

              escreval (" Valor do IR R$", ir:5:2)

           Escreval (" Valor do INSS R$", inss:5:2)









     fimse

          fimse

               fimse



// Cálculo de Plano de Saúde

escreval ("")
Escreval ("-------------------CÁLCULO DO PLANO DE SAÚDE----- --------------")
ESCREVAL ("")



     se (salbruto >=0) e (salbruto <500)entao

        plsaude<-salbruto*0/100
             Escreval (" Seu Plano de saúde é R$", plsaude:5:2)
senao

       se (salbruto >=500) e (salbruto <1000)entao

        plsaude<-salbruto*1/100
             Escreval (" Seu Plano de saúde é R$", plsaude:5:2)

senao

   se (salbruto >=1000) e (salbruto <2000)entao

        plsaude<-salbruto*3/100
             Escreval (" Seu Plano de saúde é R$", plsaude:5:2)

senao

   se (salbruto >=2000)entao

        plsaude<-salbruto*5/100
        Escreval (" Seu Plano de saúde é R$", plsaude:5:2)





         fimse

              fimse

                   fimse

                        fimse

// cálculo de vale transporte

escreval ("")
Escreval ("-------------------CÁLCULO DE VALE TRANSPORTE----- --------------")
ESCREVAL ("")


Escreva (" Para usar o vale transporte basta colocar o valor ou 0 para não:")
leia (vt)

se (vt >0) e (vt <=100) entao
descvt<- salbruto*vt
escreval (" :(Aplicando o desconto do Transporte no valor de R$", vt:5:2)
escreval ("")
        senao

se (vt =0) entao
descvt<- salbruto*vt
escreval (" :)Seu valor solicitado de Vale transporte é de R$", vt:5:2)




fimse
fimse

// Valor total de imposto e Salário líquido restante

escreval ("")
Escreval ("-------------- --TOTAL DE IMPOSTO E SALÁRIO LÍQUIDO-------------")
ESCREVAL ("")



 totimpos<- plsaude+ir+inss+vt

 salaliquido<- salbruto-totimpos



 escreval (" O total de desconto é R$ ", totimpos:5:2 ," Somando o valor do IR,INSS,Plano de Saúde e Vale transporte")
 escreval ("")
 escreval (" O Total do Salário líquido é R$ ", salaliquido:5:2)













































































Fimalgoritmo
