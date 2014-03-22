#!/usr/local/bin/node
// need mongod daemon and SurreyChristianAllianceChurch.

'use strict';

//var _ = require('underscore');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/SurreyChristianAllianceChurch', {db: { safe: true }});

var SurreyChristianAllianceChurch = require('../models/SurreyChristianAllianceChurch');
var  scac = mongoose.model('SurreyChristianAllianceChurch');

var count = (function() {
    var cnt = 1;
    return function() {
        return ++ cnt;
    };
}());


function selectFrom(lowerValue, upperValue) {
    var choices = upperValue = lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

function instance_save(j) {
    var c = count();
    var v1 = selectFrom(100, 999);
    var v2 = selectFrom(100, 999);
    var v3 = selectFrom(10000, 99999);
    var i = new scac();

    i.name = 'name ' + c + j;
    i.email = 'email' + v1 + '@test_' + v2 + '.com';
    i.phone = '(' + v1 + ') ' + v2 + '-' + v3;
    i.fellowShip = v2;
    i.address = v1 + ', ' + v2 + 'Ave. (' + v3 + ')';
    i.city = 'Surrey';
    i.lname = 'lname' + c;
    i.fname = 'fname' + v2;
    i.desc = c+v1+v2+v3+c;
    i.save(function(err) {
        if(err) console.log(err);
    });
}


function insert_scac() {
    console.log("Insert SurreyChristianAllianceChurch ...");
    for(var j=0; j<50; j++) {
        instance_save(j);
    }
    //mongoose.connection.close();
    mongoose.disconnect();
}

function trunc_scac() {
    console.log("Truncate SurreyChristianAllianceChurch ...");
    scac.remove();

}

function query_scac() {
    console.log("Search SurreyChristianAllianceChurch ...");
    scac.find().pretty();
}

insert_scac();

