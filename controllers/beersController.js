console.log('BEERS controller')
var Beer = require('./../models/beer')
var Bar = require('./../models/bar')

module.exports = {
    index
}

function index(req, res) {
    Beer.find({}, (err, doc) => {
        res.render('./beers/index', { beers: doc })
    })
}