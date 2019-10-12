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

app.get('/api/listing/:listing_id', async (req, res) => {
    res.send(await Products.find(req.params))
        // UPDATE with approperiate error handling
        .catch(err => console.log);
})

app.listen(PORT, () => {
    console.log(`Shits up and running on PORT:${PORT}`);
});

module.exports.PORT;