const express = require('express');
const path = require('path');
const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(PORT, () => {
    console.log(`Shits up and running on PORT:${PORT}`);
});

module.exports.PORT;