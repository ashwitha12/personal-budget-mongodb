const express = require('express');
const fileSystem = require('fs');
const app = express();
const port = 3000;
const importJSON = fileSystem.readFileSync('budget.json', 'utf8');
const importJSON1 = fileSystem.readFileSync('data.json', 'utf8');
const budget = JSON.parse(importJSON);
const data = JSON.parse(importJSON1);

app.use('/', express.static('public'));



app.get('/hello', (req, res) => {
    res.send('Hello World!');
}); 

app.get('/budget', (req, res) => {
    res.json(budget);
}); 

app.get('/data', (req, res) => {
    res.json(data);
}); 


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});