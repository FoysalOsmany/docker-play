const express = require('express')
const cors = require('cors');
const app = express()
const port = 4444

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api', (req, res) => res.send('Hello ' + Math.floor(Math.random() * Math.floor(1000))));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))