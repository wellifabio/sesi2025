# Aula 02

#### Conhecimentos:
- Revisão de Back-end
    - JavaScript
    - Node.js
    - Express
    - Cors
    - API Rest / JSON
    - Endpoints

    - API - Criação de API (Plataforma de Interface de Aplicação)
    - CRUD - Funcionalidades de Cadastro, consulta
    - MVC - Padrão de projeto (Modelo, Visão e Controle) (SRC => Controller, Connect + routes.js)
    - Testes - Testes unitários da API utilizando software Insomnia

## Desafio (Back End) - Contexto:
- Foi solicitado que você realize o desenvolvimento de um projeto onde o objetivo principal é um Sistema para Gerenciamento de Clientes em uma Clínica Médica.

- Utilizando o VS Code + o Node.js, desenvolva junto com o professor a API.

- Iremos utilizar os verbos POST e GET para criarmos os cadastros dos clientes.

#### Script para o banco de dados
```
CREATE DATABASE clinica;
USE clinica;

CREATE TABLE clientes(
    id_cliente INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    nascimento VARCHAR(255) NOT NULL
);
```

#### Retorno esperado no Insomnia
![alt text](image.png)

## Desafio (Front End) - Contexto: 
- Foi solicitado que você realize o desenvolvimento de um projeto onde o objetivo principal é um Sistema para Gerenciamento de Clientes em uma Clínica Médica.

- Por agora deverá ser desenvolvido apenas uma tela de cadastro básica, onde o funcionário cadastra os seguintes campos: Nome do cliente, cpf e nascimento, portanto será necessário um botão com o nome "CADASTRAR".

- Após a realização do cadastro exiba as informações dos clientes em uma tabela, com os cabeçalhos: "Clientes; Cpf; Nascimento; Botões", no cabeçalho de "Botão, iremos adicionar 2 ícones sendo, o primeiro, exclusão do cadastro e o segundo de edição".


## 