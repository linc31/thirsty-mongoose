console.log('loading BAR model')
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Beer = require('./beer')

var barSchema = new Schema ({
    name: String,
    location: String,
    beers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Beer'}]
}, {
    timestamps: true
})


module.exports = mongoose.model('Bar', barSchema);