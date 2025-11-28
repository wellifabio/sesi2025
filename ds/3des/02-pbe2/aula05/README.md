# Aula05 - VPF01
Verificação Prática Formativa 01
[Link com os códigos da solução e exemplo de entrega](https://github.com/wellifabio/pbe2-vpf01-2025.git)
## Prisma
A situação de aprendizagem a seguir deve ser desenvolvida com **Node.JS** e ORM **Prisma** com interação com o Banco de dados **MySQL**.
- Os testes devem ser realizados via **Insomnia**

## Situação de Aprendizagem
### Contextualização:
A pizzaria **Pizzaria Ginno e Silva** deseja um sistema para gerenciar seus pedidos para delivery. Você faz parte de uma equipe de desenvolvimento e atua como programador back-end. O P.O. da equipe elaborou o DER abaixo para o banco de dados do sistema.

![DER](./der-pizzaria.png)

## Desafio
Desenvolver o back-end do sistema de gerenciamento de pedidos para delivery da **Pizzaria Ginno e Silva** seguindo as regras de negócio a seguir.

### Requisitos funcionais (50%)
- 1 [RF001] O sistema deve permitir o CRUD de pizzas.
- 2 [RF002] O sistema deve permitir o CRUD de clientes.
- 3 [RF003] O sistema deve permitir o CRUD de pedidos.
- 4 [RF003.1] O sistema deve associar o pedido a um cliente.
- 5 [RF003.2] O sistema deve permitir a inclusão de pizzas no pedido (ítens do pedido).

### Casos de teste (Insomnia) (50%)
- 1 [CT001] Deve ser cadastrada 10 pizzas.
- 2 [CT002] Deve ser cadastrado 5 clientes.
- 3 [CT003] Deve ser cadastrado 5 pedidos um para cada cliente, contendo de 1 a 3 pizzas por pedido.
    - Pelo menos um dos pedidos deve conter 3 pizzas.
- 4 [CT004] No Controle de pedidos deve possuir uma rota readOne que retorne o pedido com o id informado. Os dados do cliente e a lista de pizzas.

#### DER com as chaves estrangeiras
![DER](./der-pizzaria-fk.png)
- OBS:
    - Logradouro é uma rua, avenida, praça, etc.
    - O campo telefone é multivalorado, ou seja, pode ter mais de um telefone cadastrado para o cliente.
        - Neste caso o campo telefone seria uma tabela com os campos: id, cliente_id, telefone.
        - Porém para simplificar o desafio, o campo telefone será uma string com 255 caracteres.
## Entregas
- Repositório público no GitHub chamado **pbe2-vpf01-2025** com o código fonte do projeto seguindo a seguinte estrutura de pastas:
- `api/` contendo o código fonte do projeto.
- `docs/` contendo o arquivo **insomnia.json** exportado com os casos de teste do Insomnia.
- Arquivo README.md informando as Tecnologias utilizadas, Descrição do Projeto, e um tutorial de como executar o projeto.

## Critérios
|Criticidade|Capacidades Básicas e Socioemocionais|Critérios|
|-|:-:|-|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|1 Utilizar o paradigma da programação orientada a objetos|Utilizou o ORM Prisma que utiliza MVC como padrão|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|2 Elaborar diagramas de classe|Nesta situação não será necessária esta elaboração, bstando somente interpretar o DER de forma precisa|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|3 Aplicar técnicas de código limpo (clean code)|Implementou somente os códigos que resolvem os requisitos funcionais e casos de testes|
|![Critico](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/critico.png)|4 Identificar as características de programação back-end em ambiente web|O projeto foi emplementado no Node.js + prisma e os casos de teste foram implementados via Insomnia|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|5 Preparar o ambiente necessário ao desenvolvimento back-end para a plataforma web|Se necessário, sabe instalar ou reinstalar XAMPP, VsCode, NodeJS e Insomnia|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|6 Definir os elementos de entrada, processamento e saída para a programação da aplicação web|Implementou as rotas solicitadas conforme Requisitos CRUD e ReadOne para Pedidos|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|7 Utilizar design patterns no desenvolvimento da aplicação web|Utilizou o ORM Prisma que já aplica os Gof Patterns (Singleton, Composite entre outros)|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|8 Definir os frameworks a serem utilizados no desenvolvimento da aplicação web|Utilizou Node.JS e Prisma conforme requisitos funcionais|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|1 Demonstrar autogestão|Utilizou IA apenas como apoio tentando entender a solução, contou com ajuda de colegas ou ajudou com objetivo de melhorar o aprendizado|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|2 Demonstrar pensamento analítico|Compreende como uma API se relaciona com Front-End, Mobile, Banco de Dados e como uma equipe de desenvolvimento se integra, tirou dúvidas com instrutores se surgiram|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|3 Demonstrar inteligência emocional|Se dedicou ao aprendizado para compreender o mínimo do componente|
|![Desejável](https://raw.githubusercontent.com/wellifabio/senai2023/main/outros/assets/desejavel.png)|4 Demonstrar autonomia|Questionou os intrutores ou colegas sobre dúvidas ou problemas ocorridos durante o desenvolvimento. Se propôs a resolver os problemas|
