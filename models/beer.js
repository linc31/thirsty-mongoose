console.log('loading BEER model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var Beer = require('./Bar')

var beerSchema = new Schema ({
    name: String,
    style: String,
    bars: [{
        type: Schema.Types.ObjectId, ref: 'Bar'
    }]
    comments: [commentSchema]
}, {
    timestamps: true
})

var commentSchema = new Schema ({
    content: String
}, {
    timestamps: true;
})


module.exports = 
    mongoose.model('Beer', beerSchema),
    mongoose.model('Comment', commentSchema)
