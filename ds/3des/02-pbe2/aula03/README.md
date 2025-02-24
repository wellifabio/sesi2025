# Aula 3

- Conhecimentos Framework Prisma
- Aula demonstrativa

## PRISMA
- Passo a passo de como iniciar um projeto com esse framework:

### Abrir o terminar:
- Navegar até a pasta API do seu projeto.
- Instalar o prima globalmente.
```
npm i prisma -g
```
- Em uma pasta chamada ./back ou ./api inicie o projeto e pressione enter até o fim.
```
cd back
npm init
npm i express cors dotenv
```
### Iniciando o prisma com mysql
```
prisma init --datasource-provider mysql
```
- Neste caso estamos utilizando o prisma com o SGBD mysql.
- Caso não inicie o seu projeto, reinstale a última versão LTS do nodejs
- Feche o VsCode e abra novemante, reinstalando o prisma e iniciando o projeto.
- OBS: Abrir o XAMPP Control Panel e iniciar o Apache e o MySQL (Start)

### Configurando o arquivo .ENV
- Ex
```
  DATABASE_URL="mysql://root@localhost:3306/restaurante?schema=public&timezone=UTC"
  # DATABASE_URL="mysql://user:senha@servidor:3306/dbname?schema=public&timezone=UTC"
```

### Criando os models
./prisma/schema.prisma
```generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cliente {
  id        Int     @id @default(autoincrement())
  nome   String
  cpf String
  email     String
}
```
### Gerar o migrate para criar o banco de dados
```
prisma migrate dev --name "descricao"
```
- Será criada uma pasta chamada migrations com o script SQL
- Dentro dela estarão os scripts de criação do banco de dados
- Caso faça alguma mudança no Schema em algum modelo
rode novemente o script de migração

###  Iniciando o desenvolvimento
- Confira se esta na pasta correta, ./api ou ./back
- Inicie o projeto NodeJS normalmente e instale as principais dependências
```
npm init
npm i express cors dotenv
```
- Criar a estrutura de pastas src
- O prisma já trabalha com a estrutura MVC, o arquivo schema.prisma é a camada modelo.
- Editar os arquivos
- server.js

```
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes')

const app = express();
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(3000, (req,res) =>{
    console.log('Server running on port 3000') 
})
```
- ./src/routes.js
```
const express = require('express');
const routes = express.Router();

const clientes = require('./controller/controllerclientes')

routes.get('/clientes', clientes.read)
routes.post('/clientes', clientes.create)
routes.put('/clientes/:id', clientes.update)
routes.delete('/clientes/:id', clientes.del)

module.exports = routes
```
- ./src/clientes/controllerclientes.js
```
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const clientes = await prisma.clientes.findMany();
    return res.json(clientes)
}

const create = async (req, res) => {
    const data = req.body;
    const clientes = await prisma.clientes.create({
        data: data
    });
    return res.status(201).json(clientes).end()
}

const update = async (req, res) => {
    const data = req.body;
    let clientes = await prisma.clientes.update({
        data: data,
        where: {
            id: parseInt(req.body.id)
        }
    })
    return res.status(202).json(clientes).end()
}

const del = async (req, res) => {
    const id = parseInt(req.params.id);
    const clientes = await prisma.clientes.delete({
        where: {
            id: parseInt(req.params.id)
        }
    });
    return res.status(204).json(clientes).end()
}

module.exports = {
    read,
    create,
    update,
    del
}
```
### testar com o insomnia
- nodemon