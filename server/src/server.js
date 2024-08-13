const express = require('express');
const app = express();
const path = require('path');

app.use('/images', express.static(path.join(__dirname, '../images')));

app.get('/api/cars', (req,res) => {
    const cars = require('../api/db.json').cars;
    console.log(cars);
    
    res.json(cars);
})

app.listen(3000, () => {
    console.log('server listenting on port 3000');
})