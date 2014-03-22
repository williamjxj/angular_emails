'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * SurreyChristianAllianceChurch Schema
 */
var SurreyChristianAllianceChurchSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    fellowShip: String,
    address: String,
    city: String,
    lname: String,
    fname: String,
    desc: String,
    updated_at: { type: Date, default: Date.now },
    active: { type: Boolean, default: true }
});

mongoose.model('SurreyChristianAllianceChurch', SurreyChristianAllianceChurchSchema);
