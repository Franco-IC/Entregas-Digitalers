const express = require('express');
const app = express();
const port = 8080;

// frase completa | .get('/') y .get('/getFrase')
const frase = 'Hola mundo cómo están';

// frase sin espacios para que al ingresar un num no devuelva un espacio en blanco | .get('/getLetra/:num')
const fraseSinEspacios = frase.replace(/\s/g,'');

// array con las palabras separadas | .get('/getPalabra/:num')
const palabras = frase.split(' ');


// página principal
app.get('/', (req, res) => {
    res.send(`<h2> ${frase} </h2>`);
});
app.get('/getFrase', (req, res) => {
    res.send(`<h2> ${frase} </h2>`);
});

// /getLetra/8
app.get('/getLetra/:num', (req, res) => {
    const num = parseInt(req.params.num);
    // válida: que sea un número y que esté en el rango de letras posibles (1-18)
    const numValido = typeof num === 'number' && num >= 1 && num <= fraseSinEspacios.length;
    
    if (numValido) {
        res.send(`<h2> Tu letra es: ${fraseSinEspacios[num - 1]} </h2> <br> 
                <a href='/getFrase'> Ir a la frase completa </a>`);
    } else {
        res.status(404).send('<h1> { error: "El parámetro ingresado es incorrecto, probá con un número entre 1-18, ej: /getLetra/8." } </h1> <br> <a href="/getFrase"> Ir a la frase completa </a> ');
        console.log('Error 404, parámetro incorrecto ' + new Date());
    }
});

// /getPalabra/3
app.get('/getPalabra/:num', (req, res) => {
    const num = parseInt(req.params.num);
    // válida: que sea un número y que esté en el rango de palabras posibles (1-4)
    const numValido = typeof num === 'number' && num >= 1 && num <= palabras.length;
    
    if (numValido) {
        res.send(`<h2> Tu palabra es: ${palabras[num - 1]} </h2> <br> 
                <a href='/getFrase'> Ir a la frase completa </a>`);
    } else {
        res.status(404).send('<h1> { error: "El parámetro ingresado es incorrecto, probá con un número entre 1-4, ej: /getPalabra/3." } </h1> <br> <a href="/getFrase"> Ir a la frase completa </a>');
        console.log('Error 404, parámetro incorrecto ' + new Date());
    }
});


app.listen(port, () => console.log(`App listening on port: ${port}`));
