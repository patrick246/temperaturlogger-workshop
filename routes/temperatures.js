const Storage = require('../services/storage');

module.exports = app => {
    app.get('/api/temperatures', (req, res) => {
        res.json(Storage.get());
    });

    app.get('/api/temperatures/:date', (req, res) => {
        const date = new Date(req.body.date);
        if(isNaN(date.getTime())) {
            res.status(400).json({
                error: 'Could not parse date'
            });
            return;
        }
        res.json(Storage.get(date.toISOString()));
    });

    app.post('/api/temperatures', (req, res) => {
        const date = new Date(req.body.date);
        if(isNaN(date.getTime())) {
            res.status(400).json({
                error: 'Could not parse date'
            });
            return;
        }
        Storage.store(date.toISOString(), req.body.temp);
        res.json(Storage.get(date.toISOString()));
    });
};