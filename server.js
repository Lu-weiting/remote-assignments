const express = require('express');
const app = express();
const user_router = require('./Route/user_router');

app.use(express.json());
app.use('users',user_router);


app.get('/healthcheck', (req, res) => {
    res.status(200).json('OK');
});

app.listen(3000, () => {
    console.log(`Server is running`);
});