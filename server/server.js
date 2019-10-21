const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    { Products } = require('./db'),
    app = express(),
    port = 3002;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/api/listing/:listing_id', async (req, res) => {
    Products.find(req.params, (err, docs) => {
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

app.listen(port, () => {
    console.log(`...Server is running on port:${port}...`);
});