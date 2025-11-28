const express = require('express');
const cors = require('cors');
const port = 3000;
const routes = require('./src/routes');

const app = express();

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)  // Logging the server is running message on port 3000
})