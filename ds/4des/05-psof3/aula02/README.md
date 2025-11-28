# Aula02 - Recursos Avançados para Desenvolvimento de Software

## Autenticação JWT em APIs
Nesta aula, vamos explorar como implementar autenticação JWT (JSON Web Token) em APIs. O JWT é um padrão aberto (RFC 7519) que define um formato compacto e autônomo para transmitir informações entre partes como um objeto JSON.

## Demonstração / Desafio
Para demonstrar a implementação de autenticação JWT, utilizar o projeto criado na aula anterior. Vamos adicionar as seguintes funcionalidades:

- **Criação de um endpoint de login**: onde o usuário pode enviar suas credenciais e receber um token JWT.
- **Proteção de endpoints**: utilizando o token JWT para garantir que apenas usuários autenticados possam acessar determinados recursos da API.
- **Validação do token JWT**: verificar a autenticidade do token enviado pelo cliente em cada requisição protegida.

## Passos para Implementação
Abra o projeto da aula anterior e siga os passos abaixo para implementar a autenticação JWT: Caso seu swagger.json não esteja atualizado, você pode utilizar o que está no repositório do curso, na aula01.

- 1 **Instalação de Dependências**: Certifique-se de que as bibliotecas necessárias para manipulação de JWT estão instaladas. Por exemplo, em um projeto Node.js, você pode usar `jsonwebtoken`.

   ```bash
   npm install jsonwebtoken
   ```
- Acrescente a variável de ambiente `JWT_SECRET` no arquivo `.env` para armazenar a chave secreta usada para assinar os tokens JWT.

   ```js
   SECRET_JWT="meu_segredo_jwt"
   ```

- 2 **Criação do Endpoint de Login**: Adicione um endpoint que receba as credenciais do usuário e retorne um token JWT.
    - Crie um arquivo `login.js` no diretório ./src/controllers e adicione as rotas POST como `api/login`  e GET `api/validacao` no arquivo `router.js`:
```javascript
const jsonwebtoken = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
    const { email, senha, validade } = req.body;

    try {
        const usuario = await prisma.usuario.findFirst({
            where: {
                email: email,
                senha: senha
            }
        });

        if (!usuario) {
            return res.status(401).json({ message: 'E-mail ou Senha incorretos!' });
        } else {
            const token = jsonwebtoken.sign(
                {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                },
                process.env.SECRET_JWT,
                { expiresIn: validade ? validade + "min" : "60min" }
            );
            res.status(200).json({ token: token });
        }
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};

const validaToken = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send({ message: "Acesso negado. Nenhum token recebido." }).end();
    }

    jsonwebtoken.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Token inválido ou expirado." }).end();
        }
        req.user = decoded;
        res.status(200).json({ message: req.user });
    });
};

module.exports = {
    login,
    validaToken
}
```
- 3 **Proteção de Endpoints**: Crie um middleware que verifique o token JWT em cada requisição para endpoints protegidos.
    - Para isso, crie um arquivo `auth.js` no diretório ./src/middlewares e adicione o seguinte código:
```javascript
const jsonwebtoken = require("jsonwebtoken");

const validate = (req, res, next) => {
    const token  = req.headers.authorization?.split(" ")[1];

    if(!token) res.status(401).send({message : "Acesso negado. Nenhum token recebido."}).end();
    
    try {
        const payload = jsonwebtoken.verify(token, process.env.SECRET_JWT);

        req.headers['user'] = payload;

        next();
    }catch(err) {
        res.status(500).send(err).end();
    }
}

module.exports = validate;
```

- 4 **Validação do Token JWT**: Utilize o middleware criado para proteger os endpoints que requerem autenticação.
    - No arquivo `router.js`, adicione a rota de validação do token:
```javascript
const express = require('express');
const routes = express.Router();

const Login = require('./controllers/login');
const Usuario = require('./controllers/usuario');
const Produto = require('./controllers/produto');
const Pedido = require('./controllers/pedido');
const MiddlewareAuth = require('./middlewares/auth');

routes.get('/', (req, res) => {
    res.json({ titulo: 'API Pedidos respondendo, documentação em /docs' });
});

routes.post('/api/login', Login.login);
routes.get('/api/validacao', Login.validaToken);

routes.get('/api/usuarios', MiddlewareAuth, Usuario.read);
routes.post('/api/usuarios', Usuario.create);
routes.patch('/api/usuarios/:id', MiddlewareAuth, Usuario.update);
routes.delete('/api/usuarios/:id', MiddlewareAuth, Usuario.del);

routes.get('/api/produtos', Produto.read);
routes.post('/api/produtos', MiddlewareAuth, Produto.create);
routes.patch('/api/produtos/:id', MiddlewareAuth, Produto.update);
routes.delete('/api/produtos/:id', MiddlewareAuth, Produto.del);

routes.get('/api/pedidos', MiddlewareAuth, Pedido.read);
routes.post('/api/pedidos', MiddlewareAuth, Pedido.create);
routes.patch('/api/pedidos/:id', MiddlewareAuth, Pedido.update);
routes.delete('/api/pedidos/:id', MiddlewareAuth, Pedido.del);

module.exports = routes;
```

## Desafio
Altere a documentação `swagger.json` para incluir o novo endpoint de login e a validação do token JWT. Certifique-se de que a documentação esteja atualizada com as novas rotas e parâmetros e com a funcionalidade de validação do token JWT.