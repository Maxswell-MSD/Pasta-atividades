![maximus](https://github.com/Maxswell-MSD/Pasta-atividades/blob/main/Imagem/Maximus.jpg)
<br>
Obs: Script criado por Maxswell-MSD técnico em informática.<br>
Linkedin:https://www.linkedin.com/in/maxswell-sousa-diniz-59638b194<br>
Github:https://www.github.com/Maxswell-MSD
<br>
# Anotações de configuração do Ubuntu-server, Técnico em Informática Senac-Tatuapé




## ARQUIVOS DE CONFIGURAÇÃO DOS TCP WRAPPER
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
## Configurando Opennssh
<br>
<br>
OpenSSH é amplamente utilizado por administradores de sistemas Linux.

Você se lembra dos artigos que postei sobre o PuTTY e o comando SCP? Apenas recapitulando, trata-se de um cliente para protocolos do Secure Shell (SSH), muito utilizado nos sistemas Linux e Windows. Nessa mesma linha temos uma solução ainda mais avançada e bastante consolidada entre os profissionais de redes: o OpenSSH.

Por que essa ferramenta é tão relevante aos que trabalham com servidores? Começarei pelo fator segurança: o protocolo SSH é fundamental no ambiente virtual em que informações circulam a todo o momento. Se considerarmos a disseminação de Ransomware, a criticidade é ainda maior.
<br>
https://e-tinet.com/linux/openssh/
