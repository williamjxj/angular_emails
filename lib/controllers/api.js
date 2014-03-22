'use strict';

var mongoose = require('mongoose'),
    scac = mongoose.model('SurreyChristianAllianceChurch');

exports.list = function(req, res) {
    var q = req.query.q;
    var sortBy = req.query.sort;

    var limit = req.query.limit;
    var skip = req.query.offset;
    var desc = req.query.desc==='true' ?  'asc' :'desc';
    console.log(req.query);

    //.find().or([{ 'first': { $regex: re }}, { 'last': { $regex: re }}, { 'email': { $regex: re }}, { 'name': { $regex: re }}])
    if(q) {
        var re = new RegExp(q, 'i');
        return scac.find(
            { email: { $regex: re } },
            null,
            {
                skip: skip,
                limit: limit,
                sort: {
                    email: desc
                }
            },
            function(err, data) {
                if (!err) {
                    console.log(data);
                    return res.json(data); //more precise
                } else {
                    return res.send(err);
                }
            }
        );
    }
    else {
        return scac.find(
            {},
            null,
            {
                skip: skip,
                limit: limit,
                sort: {
                    name: desc
                }
            },
            function(err, data) {
                if (!err) {
                    console.log(data);
                    return res.json(data);
                } else {
                    return res.send(err);
                }
            }
        );
    }
};

exports.getOne = function(req, res) {
    console.log('------------', req.params);
    scac.findById( req.params.id, function ( err, member ){
        if(err) {
            console.log(err);
            return res.send(err);
        }
        console.log(member);
        res.json(member);
    });
};

exports.update = function(req, res) {
    scac.findById( req.params.id, function ( err, member ){
        member.name = req.body.name;
        member.email = req.body.email;
        member.phone = req.body.phone;
        member.fellowShip = req.body.fellowShip.join(',');
        member.address = req.body.address;
        member.city = req.body.city;
        member.lname = req.body.lname;
        member.fname = req.body.fname;
        member.desc = req.body.desc;
        member.updated_at = Date.now();

        member.save( function ( err, member, count ){
            if(err) {
                console.log(err);
                res.send(err);
            }
            res.json( 'Done.' );
        });
    });
};

exports.create = function(req, res) {
    var member = new  scac({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        fellowShip : req.body.fellowShip.join(','),
        address : req.body.address,
        city : req.body.city,
        lname : req.body.lname,
        fname : req.body.fname,
        desc : req.body.desc,
        updated_at : Date.now()
    });
    member.save(function(err) {
        if(err) console.log(err);
        res.json(member);
    });
};

exports.delete = function(req, res) {
    scac.findById( req.params.id, function ( err, member ){
        member.remove( function ( err, data ){
            if(err) console.log(err);
            res.json('delete ['+req.params.id + '] successfully.');
        });
    });
};



exports.emails = function(req, res) {
    res.send('/api/emails: Hello World from lib/controllers/api.js');

};

exports.message = function(req, res)  {
    res.send('/api/message: Hello World from lib/controllers/api.js');
};



exports.test = function(req, res) {
    var count = (function() {
        var cnt = 1;
        return function() {
            return ++ cnt;
        };
    }());
    var m = new scac({
        name : count(),
        email : 'billjiang444@surrey.ca',
        phone : '123-456-7890',
        fellowShip : '方舟团契',
        address : '#1 13500, 96 Ave, V7C 3T8',
        city : 'Surrey',
        lname : '姜',
        fname : '加拿大',
        desc :  count(),
        updated_at : Date.now()
    });
    m.save(function(err, m) {
        if(err) console.log(err);
        console.log(m);
    });
};


exports.index = function(req, res) {
    scac.find().
        sort('-updated_at').
        exec( function ( err, members, count ){
            res.render( 'index', {
                title : 'Express Todo Example',
                members : members
            });
        });
};

exports.current_user = function ( req, res, next ){
    var user_id = req.cookies ?
        req.cookies.user_id : undefined;

    if( !user_id ){
        res.cookie( 'user_id', utils.uid( 32 ));
    }

    next();
};