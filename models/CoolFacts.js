const mongoose = require('mongoose');

const CoolFactsSchema = new mongoose.Schema({
factTitle : { type:  String, description: "Required Field", required: true },
fact : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('CoolFacts', CoolFactsSchema);