// Importo dati delle ricette
const recipesList = require('./../data/posts');


// GET
function index(req, res) {
    // Inizialmente le ricette filtrate corrispondono a quelle originali
    let filteredrecipes = recipesList;

    // Se la richiesta contiene quell'ingrediente, allora filtro le ricette
    if (req.query.ingredient) {
        filteredrecipes = recipesList.filter(
            ricetta => ricetta.ingredients.includes(req.query.ingredient)
        );
    }

    // Restituisco dati in json
    res.json({
        total: filteredrecipes.length,
        recipes: filteredrecipes
    });
}


// GET
function show(req, res) {

    // Cerco la ricetta tramite ID
    const ricetta = recipesList.find(ricetta => ricetta.id === parseInt(req.params.id));

    // Se non trovo la ricetta
    if (!ricetta) {

        // Forzo lo stato di risposta a 404
        res.status(404);

        // Rispondo con oggetto di errore
        return res.json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    res.json(ricetta);
}


// POST
function store(req, res) {
    res.send('Creazione nuova ricetta');
}


// PUT
function update(req, res) {
    res.send('Modifica integrale della ricetta ' + req.params.id);
}


// PATCH
function modify(req, res) {
    res.send('Modifica parziale della ricetta ' + req.params.id);
}


// DELETE
function destroy(req, res) {

    // Cerco ricetta tramite ID
    const ricetta = recipesList.find(pizza => pizza.id === parseInt(req.params.id));

    if (!ricetta) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Rimuovo ricetta dalla lista
    // Elimino il primo elemento a partire dall'indice
    recipesList.splice(recipesList.indexOf(ricetta), 1);

    // Forzo status No Content
    res.sendStatus(204)
}

// Esporto le funzioni del controller per poterle usare in router
module.exports = { index, show, store, update, modify, destroy }