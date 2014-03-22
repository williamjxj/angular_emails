'use strict';

var mongoose = require('mongoose');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var config = require('./config');
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

var SurreyChristianAllianceChurch = require('../models/SurreyChristianAllianceChurch');
var scac = mongoose.model('SurreyChristianAllianceChurch');

var count = (function() {
    var cnt = 1;
    return function() {
        return ++ cnt;
    };
}());

for(var i=1; i<10; i++) {
    var m = new scac({
        name : count(),
        email : count()+'@surrey.ca',
        phone : '123-456-7890',
        fellowShip : '方舟团契',
        address : '#1 13500, 96 Ave, V7C 3T8',
        city : 'Surrey',
        lname : count(),
        fname : count(),
        desc :  count(),
        updated_at : Date.now()
    });
    m.save(function(err, m) {
        if(err) console.log(err);
        console.log(m);
    });
}
