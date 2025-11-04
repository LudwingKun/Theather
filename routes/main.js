const express = require('express');

module.exports = (shows) => {
    const router = express.Router();

    //  Home — mostra tutti gli spettacoli
    router.get('/', (req, res) => {
        res.render('index', { shows }); // qui viene passato all’EJS
    });

    //  Dettaglio di uno spettacolo
    router.get('/spettacoli/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const spettacolo = shows.find(s => s.id === id);

        if (!spettacolo) {
            return res.status(404).render('error', { message: 'Spettacolo non trovato' });
        }
        const dataSelezionata = req.query.data || spettacolo.data;
        res.render('dettaglio', { spettacolo, dataSelezionata });
    });

    return router;
};
