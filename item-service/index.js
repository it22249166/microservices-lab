const express = require('express');
const app = express();
app.use(express.json());

let items = ['Book', 'Laptop', 'Phone'];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const {name} = req.body;
    if(!name) {
        return res.status(400).json({error: 'Name is required'});
    }
    items.push(name);
    res.status(201).json({message: `Item added: ${name}`});
});

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(isNaN(id) || id < 0 || id >= items.length) {
        return res.status(404).json({error: 'Item not found'});
    }
    res.json({item: items[id]});
});

app.listen(8081, () => {
    console.log('Item service is running on port 8081');
});
