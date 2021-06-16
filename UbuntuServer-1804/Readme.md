![maximus](https://github.com/Maxswell-MSD/Pasta-atividades/blob/main/Imagem/Maximus.jpg)
<br>
# Anotações de configuração do Ubuntu-server, Técnico em Informática Senac-Tatuapé




## ARQUIVOS DE CONFIGURAÇÃO DOS TCP WRAPPERS##
<br>
Para determinar se um cliente é permitido se conectar a um serviço, os TCP Wrappers referenciam os seguintes dois arquivos, que são comumente referidos como arquivos de acesso de hosts:
/etc/hosts.allow
/etc/hosts.deny
Quando um serviço TCP wrapped recebe uma solicitação de um cliente, ele realiza os seguintes passos:
Ele faz referencia ao /etc/hosts.allow — O serviço TCP wrapper analisa sequencialmente o arquivo /etc/hosts.allow e aplica a primeira regra especificada para aquele serviço. Se ele encontra uma regra correspondente, ele permite a conexão. Se não, vai para o próximo passo.
Ele faz referência ao /etc/hosts.deny — O serviço TCP wrapper analisa sequencialmente o arquivo /etc/hosts.deny. Se ele encontrar uma regra correspondente, ele nega a conexão. Se não, garante acesso ao serviço.


https://access.redhat.com/documentation/pt-br/red_hat_enterprise_linux/6/html/security_guide/sect-security_guide-tcp_wrappers_and_xinetd-tcp_wrappers_configuration_files
<br>
<br>
##Configuração do Openssh##
