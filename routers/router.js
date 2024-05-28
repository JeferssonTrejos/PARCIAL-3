const express = require('express');
const router = express.Router();
const Modulo = require('../models/model'); 


router.get('/', async (req, res) => {
    try {
        const modulos = await Modulo.find();
        res.json(modulos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/', async (req, res) => {
    const modulo = new Modulo({
        imagen: req.body.imagen,
        titulo: req.body.titulo,
        temas: req.body.temas
    });

    try {
        const nuevoModulo = await modulo.save();
        res.status(201).json(nuevoModulo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const modulo = await Modulo.findById(req.params.id);
        if (modulo == null) {
            return res.status(404).json({ message: 'Módulo no encontrado' });
        }
        res.json(modulo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const modulo = await Modulo.findById(req.params.id);
        if (modulo == null) {
            return res.status(404).json({ message: 'Módulo no encontrado' });
        }
        if (req.body.imagen != null) {
            modulo.imagen = req.body.imagen;
        }
        if (req.body.titulo != null) {
            modulo.titulo = req.body.titulo;
        }
        if (req.body.temas != null) {
            for (let tema in req.body.temas) {
                if (modulo.temas[tema] != null) {
                    if (req.body.temas[tema].nombre != null) {
                        modulo.temas[tema].nombre = req.body.temas[tema].nombre;
                    }
                    if (req.body.temas[tema].descripcion != null) {
                        modulo.temas[tema].descripcion = req.body.temas[tema].descripcion;
                    }
                    if (req.body.temas[tema].urlvideos != null) {
                        modulo.temas[tema].urlvideos = req.body.temas[tema].urlvideos;
                    }
                }
            }
        }

        const moduloActualizado = await modulo.save();
        res.json(moduloActualizado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



router.delete('/:id', async(req, res)=>{
    try{
        const deletecurso = await Modulo.findByIdAndDelete(req.params.id);
        res.status(201).json(deletecurso);
    } catch (error) {
        res.status(500).send(err.message)
    }
});


module.exports = router;
