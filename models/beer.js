console.log('loading BEER model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var commentSchema = new Schema ({
    content: String
}, {
    timestamps: true
})

var beerSchema = new Schema ({
    name: String,
    style: String,
    bars: [{
        type: Schema.Types.ObjectId, ref: 'Beer'
    }],
    comments: [commentSchema]
}, {
    timestamps: true
})



module.exports = mongoose.model('Beer', beerSchema)

