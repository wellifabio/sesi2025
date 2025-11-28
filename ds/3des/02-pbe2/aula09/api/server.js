require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const loginRoutes = require('./src/routes/login');
const postsRoutes = require('./src/routes/posts');

app.use(express.json());

app.use(loginRoutes);
app.use(postsRoutes);

app.listen(port, () => {
    console.log('listening on ' + port);
})