console.log('BARS controller')
var Bar = require('./../models/bar')

module.exports = {
    index
}

function index(req, res) {
    Bar.find({}, (err, doc) => {
        res.render('./bars/index', { bars: doc })
    })
}
