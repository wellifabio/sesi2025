# Aula03 - Projeto de Software

Dando continuidade ao projeto **Clínica Médica**, nesta aula vamos implementar a funcionalidade de cadastro de consultas.

## Feactures - Funcionalidades
- [RF001] Agendamendo de consultas
    - As consultas devem possuir os seguintes atributos:
        - id_consulta (Auto incremento)
        - data_Hora - data e hora
        - id_medico - int
        - id_paciente - int
        - motivo - texto(255)
- As alterações devem refletir no banco de dados onde deve ser criada uma tabela de consultas e no backend, onde deve ser criado um novo controller para consultas e adicionadas as rotas http (/consultas) em routes.js

- A tabela de consultas no banco de dados dever se relacionar com médicos e pacientes.

- O coração do sistema será esta tela de agendamento de consultas, onde o usuário poderá selecionar o médico e o paciente, informar a data e hora e o motivo da consulta. o arquivo HTML deve ser o index.html e possuir links para pacientes.html e medicos.html

## Entregas
- Na aula anterior você implementou as funcionalidades de cadastro de médicos. Agora, você deve implementar as funcionalidades de cadastro de consultas, fazendo fork no repositório do projeto, clonando o repositório para a sua máquina local e implementando as funcionalidades de cadastro, edição, exclusão e listagem de consultas em uma nova UI chamada consultas.html
- Ao concluir as implementações basta realizar o commit informando "Agendamento de consultas implementado" e enviar as alterações para o seu repositório no github.