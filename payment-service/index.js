const express = require('express');
const app = express();
app.use(express.json());

let payments = [];
let idCounter = 1;

app.get('/payments', (req, res) => {
    res.json(payments);
});

app.post('/payments', (req, res) => {
    const payments = req.body || {};
    payments.id = idCounter++;
    payments.status = 'COMPLETED';
    payments.push(payments);
    res.status(201).json({message: 'Payment processed', payments});
});

app.get('/payments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const found = payments.find(p => p.id === id);
    if(!found) {
        return res.status(404).json({error: 'Payment not found'});
    }
    res.json(found);
});

app.listen(8083, () => {
    console.log('Payment service is running on port 8083');
});