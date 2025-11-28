const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth");

const express = require('express');

const postsRoutes = express.Router();

postsRoutes.get('/posts', validate, postsController.posts);

module.exports = postsRoutes;