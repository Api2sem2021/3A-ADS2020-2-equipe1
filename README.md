<img src="https://github.com/marciosousa4/GEOFPI---Projeto-Integrador/blob/master/Loading%20images/Sprint%201.png?raw=true" width="683" height="500"/>

# Sprint 1

Entrega do protótipo da interface gráfica contendo a tela inicial, instruções de uso do sistema, sobre a ferramenta, a opção de carregar o arquivo em formato shapefile e transformação dos dados para parametrização com o banco de dados PostgreSQL com extensão Postgis.

## Requisitos Atendidos
* [RF001] A prototipação da ferramenta, para ter uma visão global do desenvolvimento do produto, verificar o entendimento das funcionalidades e fazer possíveis apontamentos de melhorias na usabilidade.
* [RF001] A tela DE-PARA de PostgreSQL para Shapefile possui duas colunas onde mostrará as colunas referentes à tabela selecionada. E um botão "Carregar Shapefile" com função de gerar o arquivo Shapefile a partir da tabela selecionada.
* [RF002] A tela DE-PARA de PostgreSQL para Shapefile deve possui um menu drop down onde permite que o usuário selecione de qual tabela do banco de dados ele irá gerar o arquivo Shapefile.
* [RF003] A tela DE-PARA de Shapefile paa PostgreSQL deve possuir um botão "Carregar" que clicado vai carregar os atributos do Shapefile na tabela do banco de dados.
* [RF004]  A tela DE-PARA de Shapefile para PostgreSQL deve possuir duas colunas, à esquerda permite ao usuário seleciona as colunas referentes ao Shapefile (menu dropdown), e à direita mostra as colunas que a tabela do banco de dados selecionado possui.
* [RF005] A tela DE-PARA de Shapefile para PostgreSQL deve possui um menu drop down que permita ao usuário selecionar qual tabela do banco de dados ele irá carregar os dados do Shapefile.
* [RF006] A tela de Conexão deve ter o botão para selecionar o arquivo shapefile, um botão para ir para a tela de seleção das tabelas do PostgreSQL (processo inverso) e também um botão para ir para tela de manipulação do banco de dados (CRUD).
* [RF007] A tela de Conexão deve permitir que o usuário faça a conexão com o banco de dados através dos campos: Host, Database, User, Port e Password. Deve ter dois botões que permitam conectar e desconectar com o banco, e deve mostrar o status da conexão com o banco de dados.
* [RF008] A tela "Sobre" deve mostrar o texto de explicação e possui um botão que volte para tela inicial.
* [RF009] A tela de cadastro deve ter os campos para o usuário inserir Nome, e-mail e senha, botão que cadastre o usuário no sistema, e botão que volte para tela inicial.
* [RF010] A Tela inicial deve permitir que o usuário insira login e senha, e caso não possua cadastro, encaminhe para tela de Cadastro.
* [RF011] A tela inicial deve conter o botão "Sobre" que redireciona para outra tela que explicará o que o sistema faz.
* [RF012] A tela de manipulação (CRUD) deve conter um menu dropdown para opção de escolha da tabeça do banco de dados, e mdeve mostrar as linhas e colunas da tabela selecionada.
* [RF013] A tela de manipulação (CRUD) deve ter a opção de buscar através das colunas da tabela selecionada, e clicando em cima da linha desejada aparece um modal onde da a opção para edição ou exclusão de informações.

## Valor da Sprint 
* Facilita a visualização do produto para o cliente desde a fase inicial.
* Possibilita receber o feedback em tempo ágil. 
* Facilita o levantamento de requisitos e funcionalidades. 
* Possibilita estimar de forma mais precisa a complexidade e tempo de desenvolvimento.

## Sobre o Protótipo
Para o desenvolvimento do protótipo do GEOFPI foi utilizado o editor de imagens vetoriais e ferramenta de prototipagem Figma, onde foram modeladas as futuras telas da aplicação e suas respectivas conexões.
### Botões padrão:
* Log out: retorna à página de Log On, desconectando o usuário de sua conta.
* Voltar(<): retorna à página anterior.
### Tela de Acesso
Logo ao abrir a aplicação, é exibida a tela de acesso, com os campos de E-mail e Senha para o usuário entrar em sua conta, e os botões “Entrar”, “Cadastrar” e “Sobre o Sistema”.
* Botão Entrar: caso o usuário já estiver cadastrado, direciona-o para a tela de conexão com o PostgreSQL.
* Botão Cadastrar: direciona o usuário para a tela de cadastro de usuários.
* Botão Sobre o Sistema: direciona o usuário para a tela de explicação sobre o sistema.
### Tela Sobre o Sistema
Nesta tela é exibida ao usuário uma explicação descritiva das funcionalidades do GEOFPI, desde o processo de ETL até as operações CRUD.
### Tela de Cadastro
Esta tela possui os campos a serem preenchidos para que o usuário efetue seu cadastro(Nome, E-mail e Senha), e o botão “Cadastrar”.
* Botão Cadastrar: efetua o cadastro do usuário.
### Tela de Conexão
Nesta parte do programa é possível conectar-se ao PostgreSQL preenchendo os campos Host, Database, User, Port e Password, e clicando no botão Conectar. Esta é a página onde o usuário decide qual transformação vai ser realizada: de Shapefile para banco de dados ou vice-versa; e tem acesso a manipulação dos dados. Outros botões são “Desconectar”, “Shapefile”, “PostgreSQL” e “Manipulação”.
* Botão Conectar: articula a conexão com o PostgreSQL.
* Botão Desconectar: desliga a conexão com o PostgreSQL.
* Botão Shapefile: abre janela de busca por arquivos Shapefile.
* Botão PostgreSQL: abre janela de busca por tabelas do banco de dados.
* Botão Manipulação: direciona o usuário para a seleção e manipulação de tabelas.
### Tela de Parametrização Shapefile para PostgreSQL
Com a leitura do arquivo Shapefile concluída, o usuário poderá realizar a parametrização entre as colunas dos dados geográficos e as colunas do banco de dados através de dropdowns para escolha do tipo de vetor e das colunas. Ao clicar em “Salvar” os dados são salvos no banco de dados.
### Tela de Parametrização de PostgreSQL para Shapefile
Após a leitura da tabela ser efetuada, o usuário poderá escolher o tipo de vetor do Shapeflie e gerá-lo ao clicar no botão “Gerar Shapefile”, efetuando assim a operação inversa de transformação. 
### Tela de Manipulação dos Dados (CRUD)
Nesta tela o usuário poderá escolher uma das tabelas já salvas, visualizá-la e manipulá-la através das operações Pesquisar, Atualizar e Deletar. Todas as alterações serão salvas se o usuário clicar no botão “Salvar” dentro do Modal de Manipulação.

## Protótipo
Através do link abaixo é possível a visualização do protótipo referente à primeira entrega, conforme acordado em reunião com a empresa. Por ele é possível navegar pelas telas, entendendo o fluxo e função dos botões e menus.

https://www.figma.com/proto/1rBjfXbWEsyYyZWzS42QBh/Acesso?node-id=190%3A420&scaling=min-zoom
