const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const modulos = require('./routers/router'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/curso', modulos);

mongoose.connect('mongodb://localhost:27017/dbcurso', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión de MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


