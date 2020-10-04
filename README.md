
<img src="https://github.com/marciosousa4/GEOFPI---Projeto-Integrador/blob/master/Loading%20images/Sprint%202%20entrega.png?raw=true"/>

# Story Card

<img src="https://github.com/marciosousa4/GEOFPI---Projeto-Integrador/blob/master/Loading%20images/Sprint%202.png?raw=true"/>


## Requisitos atendidos:

[RF003] O sistema deve permitr criar uma nova transformação de dados shapefile para PsotgreSQL com extensão espacial Postgis.

[RF004] O sistema deve carregar os dados geográficos primitivos (ponto, linha e polígono) e seus atributos alfanuméricos em tabelas existentes de banco de dados geográficos.

[RF005]O sistema deve fazer a extração dos dados shapefile e conduzir para a staging area , onde eles são convertidos para um único formato. 

[RF006] O sistema deve fazer a comunicação com a base de processamento de dados e com o Banco de Dados Postgre.

*	Como Analista de dados espaciais quero carregar um sistema que suporte os arquivos de extensão shapefile para iniciar o processo de extração.
*	Como Analista de dados espaciais preciso que os dados estejam dispostos de forma consistente e padronizada, para evitar erros e facilitar a visualização na troca de telas.
*	Como Analista de dados espaciais preciso que o campo de carregamento de arquivos, só aceite arquivos do tipo shapefile para a prevenção de erros. 
*	Como Analista de dados espaciais preciso que abra uma janela de comunicação para a confirmação da operação que está sendo realizada, visando a prevenção de erros. 
*	Como Analista de dados espaciais, preciso que o sistema faça a conversão dos dados para um único formato que será encaminhado para o Banco de Dados.
*	Como Analista de dados espaciais quero que o sistema se comunique com o banco de dados PostgreSQL com extensão Postgis para iniciar o processo de transformação dos dados. 



## Funcionalidades desenvolvidas na Sprint 2

* O usuário deverá autenticar sua base de dados, com as informações de nome de usuário, senha, host, porta e nome da database.

* O usuário vai vai acessar o ambiente de opção de upload dos shapefiles, para que em outro ambiente possa ser configurado o "de-para".

* Quando o upload dos shapefiles for concluído, o usuário deverá selecionar a tabela para a qual deseja alimentar com as informações do shapefile.

* Quando terminar essas etapas, o usuário terá salvo em sua base de dados o arquivo .shp no banco de dados geográfico.

## Benefícios

* O usuário poderá realizar o upload do arquivo shapeflie e testar os diversos formatos de arquivos. 
* O usuário poderá fazer a conexão com o Banco de Dados Geográfico e testar o ambiente onde serão armazendos os dados.
* O usuário poderá ter uma visão um pouco mais ampla da ferramenta e sugerir possíveis ajustes de navegação nos ambientes desenvolvidos.

# Funcionalidades desenvolvidas (demo)

<img src="https://github.com/marciosousa4/GEOFPI---Projeto-Integrador/blob/master/Loading%20images/GEOFPI.gif?raw=true"/>

