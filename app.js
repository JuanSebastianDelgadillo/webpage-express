const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Fernando',
            edad: 32,
            ur: req.url
        }


        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(9000);

console.log('escuchando el puerto 9000');