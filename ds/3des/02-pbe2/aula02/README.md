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

### Relembrando os verbos HTTP (POST & GET)
- Trabalhando com o projeto Clínica médica, utilizaremos os verbos corretos POST e GET para criarmos os cadastros dos usuários.

#### Retorno esperado no Insomnia
![alt text](image.png)

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

