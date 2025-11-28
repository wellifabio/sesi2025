const dataPosts = require("../data/posts");

const posts = (req, res) => {
    res.status(200).send(dataPosts).end();
}

module.exports = {
    posts
}