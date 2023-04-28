const express = require('express')
const app = express();
const {readFileSync } = require('fs')
const logger = require('./logger')

app.use(express.static('./public'))
app.use(logger)

const htmlPage = readFileSync('./navbar-app/index.html')

app.get('/', (req, res) => {
    res.send(htmlPage)
});

app.get('/about', (req, res) => {
    res.send('About page')
});

app.listen(5000, ()=>{
    console.log('server is running on port 5000...')
});