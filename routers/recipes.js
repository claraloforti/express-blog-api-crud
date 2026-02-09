// Richiamo istanza di framework Express
const express = require('express')
// Creo istanza dell'oggetto rotte di Express
const router = express.Router();

// Importo dati delle ricette
const ricette = require('./../data/posts');

// Rotte di CRUD
// Index
router.get('/', function (req, res) {

    // Restituisco dati in json
    res.json({
        total: ricette.length,
        recipes: ricette
    });
});

// Show
router.get('/:id', function (req, res) {
    const ricetta = ricette.find(ricetta => {
        return ricetta.id === parseInt(req.params.id); // Converto la stringa id passata nell'URL in numero
    })
    res.json(ricetta);
});

// Store
router.post('/', function (req, res) {
    res.send('Creazione nuova ricetta');
});

// Update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale della ricetta ' + req.params.id);
});

// Modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale della ricetta ' + req.params.id);
});

// Destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione della ricetta ' + req.params.id);
});

// Esporto l'istanza delle rotte
module.exports = router;