Algoritmo "Folha de Pagamento"

// Disciplina   : [Linguagem e L�gica de Programa��o] T�cnico em inform�tica

// Professora   : Kelly

// Descri��o   : C�lculo de Desconto de vale transporte e seu desconto, Plano de sa�de, IR, INSS, Total de desconto e Total L�quido.

// Autor(a)    : Maxswell Sousa Diniz

// Data atual  : 24/06/2021

Var

// Vari�veis da folha de pagamento

nome:caracter

salbruto,ir,inss,plsaude,vt,descvt,totimpos,salaliquido:real





Inicio

// C�lculo de Folha de Pagamento

// Calculando o valor do I.R e INSS
escreval ("")
escreval ("----------------------Maxswell Sousa Diniz----------------------")
Escreval ("***********************FOLHA DE PAGAMENTO***********************")
ESCREVAL ("")



Escreva (" Coloque o Seu nome:")

Leia (nome)

Escreva (" Coloque o valor do seu sal�rio:")

leia (salbruto)

escreval ("")
Escreval ("-------------------C�LCULO DE IR E INSS---------- --------------")
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



// C�lculo de Plano de Sa�de

escreval ("")
Escreval ("-------------------C�LCULO DO PLANO DE SA�DE----- --------------")
ESCREVAL ("")



     se (salbruto >=0) e (salbruto <500)entao

        plsaude<-salbruto*0/100
             Escreval (" Seu Plano de sa�de � R$", plsaude:5:2)
senao

       se (salbruto >=500) e (salbruto <1000)entao

        plsaude<-salbruto*1/100
             Escreval (" Seu Plano de sa�de � R$", plsaude:5:2)

senao

   se (salbruto >=1000) e (salbruto <2000)entao

        plsaude<-salbruto*3/100
             Escreval (" Seu Plano de sa�de � R$", plsaude:5:2)

senao

   se (salbruto >=2000)entao

        plsaude<-salbruto*5/100
        Escreval (" Seu Plano de sa�de � R$", plsaude:5:2)





         fimse

              fimse

                   fimse

                        fimse

// c�lculo de vale transporte

escreval ("")
Escreval ("-------------------C�LCULO DE VALE TRANSPORTE----- --------------")
ESCREVAL ("")


Escreva (" Para usar o vale transporte basta colocar o valor ou 0 para n�o:")
leia (vt)

se (vt >0) e (vt <=100) entao
descvt<- salbruto*vt
escreval (" :(Aplicando o desconto do Transporte no valor de R$", vt:5:2)
escreval ("")
        senao

se (vt =0) entao
descvt<- salbruto*vt
escreval (" :)Seu valor solicitado de Vale transporte � de R$", vt:5:2)




fimse
fimse

// Valor total de imposto e Sal�rio l�quido restante

escreval ("")
Escreval ("-------------- --TOTAL DE IMPOSTO E SAL�RIO L�QUIDO-------------")
ESCREVAL ("")



 totimpos<- plsaude+ir+inss+vt

 salaliquido<- salbruto-totimpos



 escreval (" O total de desconto � R$ ", totimpos:5:2 ," Somando o valor do IR,INSS,Plano de Sa�de e Vale transporte")
 escreval ("")
 escreval (" O Total do Sal�rio l�quido � R$ ", salaliquido:5:2)













































































Fimalgoritmo
