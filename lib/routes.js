'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

    // 1. query
    //api/Email?desc=false&limit=20&offset=0&sort=name
    app.get('/api/Email', api.list);

    // 2.update
    // Server API Routes
    app.put('/api/Email/:id', api.update);

    // 3. post
    app.post('/api/Email', api.create);

    // 4. get
    app.get('/api/Email/:id', api.getOne);

    // 5. delete
    app.delete('/api/Email/:id', api.delete);

    /* example for post
     Request URL:http://localhost:9000/api/Email
     city: "Surrey"
     desc: "Request URL:http://localhost:9000/api/Email"
     email: "joedoe@abc.com"
     fellowShip: [方舟]
     0: "方舟"
     fname: "Joe"
     lname: "Doe"
     name: "Joe Doe"
     phone: "111-222-3333"
     */
    // 6. insert test data via url
    app.get('/api/emails', api.emails);
    app.get('/api/message', api.message);
    app.get('/api/test', api.test);

    //NOT USEFUL!    app.post('/new', api.create);
    //NOT USEFULE    app.get('/edit/:editId', api.edit);
    //NOT USEFUL!    app.get('/about', api.about);
    //NOT USEFUL!    app.get('/contact', api.contact);

    // All undefined api routes should return a 404
    app.get('/api/*', function(req, res) {
        res.send(404);
    });

    // All other routes to use Angular routing in app/scripts/app.js
    app.get('/partials/*', index.partials);
    app.get('/*', index.index);
};