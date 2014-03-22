'use strict';

var mongoose = require('mongoose');

var  scac = mongoose.model('SurreyChristianAllianceChurch');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
scac.find({}).remove(function() {
  scac.create({
          Id: 1,
          name: 'William Jiang',
          email: 'williamjxj@hotmail.com',
          phone: '778-881-2489',
          fellowShip: '一家團契',
          address: '#9 - 9727 152B Street',
          city: 'Surrey',
          lname: '姜',
          fname: '小军',
          desc: 'Nick name: William, legal name: 姜小军'
  }, {
      Id: 2,
      name: 'Benjamin Jiang',
      email: 'Benjamin@hotmail.com',
      phone: '778-881-2489',
      fellowShip: '一家團契',
      address: '#9 - 9727 152B Street',
      city: 'Surrey',
      lname: '姜',
      fname: '小军',
      desc: 'Nick name: William, legal name: 姜小军'
  }, {
          Id: 3,
          name: 'Bill Jiang',
          email: 'bill@hotmail.com',
          phone: '778-881-2489',
          fellowShip: '一家團契',
          address: '#9 - 9727 152B Street',
          city: 'Surrey',
          lname: '姜',
          fname: '小军',
          desc: 'Nick name: William, legal name: 姜小军'
  }, {
          Id: 4,
          name: 'Bill Jiang',
          email: 'bill@hotmail.com',
          phone: '778-881-2489',
          fellowShip: '一家團契',
          address: '#9 - 9727 152B Street',
          city: 'Surrey',
          lname: '姜',
          fname: '小军',
          desc: 'Nick name: William, legal name: 姜小军'
  }, {
          Id: 5,
          name: 'Bill Jiang',
          email: 'bill@hotmail.com',
          phone: '778-881-2489',
          fellowShip: '一家團契',
          address: '#9 - 9727 152B Street',
          city: 'Surrey',
          lname: '姜',
          fname: '小军',
          desc: 'Nick name: William, legal name: 姜小军'
  }, function() {
      console.log('finished populating things');
    }
  );
});
