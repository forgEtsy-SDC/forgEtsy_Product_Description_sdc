const express = require('express');
const path = require('path');
const cors = require('cors')
const { Products, Reviews } = require('./db');

const app = express();
const PORT = 3002;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    console.log(req);
    res.send('Test: Rob is a god among men :D');
});

app.get('/api/listing/:listing_id', async (req, res) => {
    res.send(await Products.find(req.params));
})

app.listen(PORT, () => {
    console.log(`Shits up and running on PORT:${PORT}`);
});

module.exports.PORT;