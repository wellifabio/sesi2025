const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const cliente = await prisma.cliente.create({
            data: req.body
        })
        return res.status(201).json(cliente);
    } catch (e) {
        return res.status(500).json({ error: 'Falha ao cadastrar o cliente' });
    }
}

const read = async (req, res) => {
    const clientes = await prisma.cliente.findMany()
    return res.json(clientes)
}

const update = async (req, res) => {
    try {
        const cliente = await prisma.cliente.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        })
        return res.json(cliente);
    } catch (err) {
        return res.status(500).json({ error: 'Falha ao atualizar o cliente' });
    }
}

const remove = async (req, res) => {
    try {
        const cliente = await prisma.cliente.delete({
            where: { id: parseInt(req.params.id) }
        })
        return res.status(204).json(cliente);
    } catch (err) {
        return res.status(500).json({ error: 'Falha ao remover o cliente' });
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}