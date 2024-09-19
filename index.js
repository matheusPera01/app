const express = require('express');

const port = 3000;
const app = express();

app.use(express.json());

app.post('/ola', (req, res) => {
    res.send('ola');
})

app.listen(port, () => {
    console.log(`servidor ta rodando na porta: ${port}`);
})