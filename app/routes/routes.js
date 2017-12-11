module.exports = function(app){
    var musicians = require('../controllers/musicians');
    var users = require('../controllers/users');
    app.get('/musicians', musicians.findAll);
    app.get('/import', musicians.import);
    app.get('/musicians/:id', musicians.findById);
    app.post('/musicians', musicians.add);
    app.put('/musicians/:id', musicians.update);
    app.delete('/musicians/:id', musicians.delete);

    //User
    app.get('/create', users.createUser);
}

