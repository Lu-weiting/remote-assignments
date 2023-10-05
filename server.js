const express = require('express');
const app = express();

app.get('/healthcheck', (req, res) => {
    res.status(200).json('OK');
});

app.listen(3000, () => {
    console.log(`Server is running`);
});