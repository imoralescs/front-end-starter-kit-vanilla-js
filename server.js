const express = require('express');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';
const htmlDir = './dist/';

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res){
    console.log(req);
    res.sendFile(`${htmlDir}index.html`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);