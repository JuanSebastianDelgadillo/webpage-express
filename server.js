const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// EXPRESS HBS ENGINE
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'juan'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'JUANito'
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})