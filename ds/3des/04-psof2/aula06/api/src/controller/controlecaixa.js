const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const caixa = await prisma.gerenciamentocaixa.create({
            data: req.body
        })
        res.status(201).json(caixa).end()
    } catch (error) {
        console.log(error);

        res.status(400).end()
    }
}

const read = async (req, res) => {
    const caixa = await prisma.gerenciamentocaixa.findMany()
    return res.json(caixa)
}

const update = async (req, res) => {
    try {
        const caixa = await prisma.gerenciamentocaixa.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        })
        return res.status(202).json(caixa);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const remove = async (req, res) => {
    try {
        const caixa = await prisma.gerenciamentocaixa.delete({
            where: { id: parseInt(req.params.id) }
        })
        return res.status(204).json(caixa).end();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}