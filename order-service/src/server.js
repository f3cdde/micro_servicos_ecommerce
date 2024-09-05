const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());

let orders = [
    { id: 1, product_id: 1, quantity: 2 },
    { id: 2, product_id: 2, quantity: 1 },
];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/orders', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

app.listen(PORT, () => {
    console.log(`Serviço de Pedidos rodando na porta ${PORT}`);
});
