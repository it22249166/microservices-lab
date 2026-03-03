const express = require('express');
const app = express();
app.use(express.json());

let orders = [];
let idCounter = 1;

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.post('/orders', (req, res) => {
    const order = req.body || {};
    order.id = idCounter++;
    order.status = 'PENDING';
    orders.push(order);
    res.status(201).json({message: 'Order created', order});
});

app.get('/orders/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = orders.find(o => o.id === id);
    if(!found) {
        return res.status(404).json({error: 'Order not found'});
    }
    res.json(found);
}); 

app.listen(8082, () => {
    console.log('Order service is running on port 8082');
});