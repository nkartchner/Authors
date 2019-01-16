const controller = require('../controllers/controllers');

module.exports = function (app) {

    app.get('/api/all', function (request, response) {
        controller.getAll(request, response);
    });

    app.get('/api/:id', function (request, response) {
        controller.getOne(request, response);
    });

    app.post('/api/new', function (request, response) {
        controller.create(request, response);
    });

    app.put('/api/update/:id', function (request, response) {
        controller.update(request, response);
    });

    app.delete('/api/delete/:id', function (request, response) {
        controller.delete(request, response);
    });

};