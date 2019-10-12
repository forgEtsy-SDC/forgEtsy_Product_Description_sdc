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
    Products.find(req.params, (err, docs) => {
        // If a bad listing_id is sent the find returns an empty array
        // So, I added an error object to send back to the client
        if (docs.length === 0) {
            docs[0] = {
                type: 'Error',
                message: 'Error with listing_id'
            }
        }

        if (err) {
            // UPDATE error handling
            console.log(err);
            res.sendStatus(400);
        } else {
            res.send(...docs);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Shits up and running on PORT:${PORT}`);
});

module.exports.PORT;