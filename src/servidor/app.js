const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('dist'));

app.use('/', require('./router'));

app.listen(3000, ()=>{
    console.log("El servidor local es http://localhost:3000");
})
