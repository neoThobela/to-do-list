const express = require('express');
//expess app
const app= express();


app.listen(3000);


app.get('/' , (req,res) => {

// res.send('home');

res.sendFile('index.html', { root: __dirname})

});