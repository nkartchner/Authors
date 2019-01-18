const controller = require('../controllers/controllers');
const mongoose = require('mongoose');
const db_model = require('../models/models');

module.exports = function (app) {

    app.get('/api/all', controller.getAll);
    app.get('/api/:id', controller.getOne);
    app.post('/api/new', controller.create);
    app.put('/api/add/quote/:id',controller.addQuote);
    app.put('/api/update/:id', controller.update);
    app.delete('/api/delete/:aid/:qid', controller.deleteQuote);
    app.delete('/api/delete/:id', controller.delete);

};