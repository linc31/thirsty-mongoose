console.log('BEERS controller')
var Beer = require('./../models/beer')
var Bar = require('./../models/bar')

module.exports = {
    index,
    show,
    create,
    newBeer,
    destroy
}

function index(req, res) {
    Beer.find({}, (err, doc) => {
        res.render('./beers/index', { beers: doc })
    })
}

function show(req, res) {
    Beer.findById(req.params.id, (err, doc) => {
        res.render('./beers/show', { beers: doc })
    });
}

function create(req, res) {
    var newBeer = new Beer(req.body)

    if (newBeer.save()) {
        res.redirect('/beers')
    } else {
        res.render('./beers/new')
    }
}

function newBeer(req, res) {
    res.render('./beers/new')
}

function destroy(req, res) {
    Bar.findById(req.params.barId, function(err, bar) {
        bar.beers.remove(req.params.beerId);
        bar.save(function(err) {
            Beer.findById(req.params.beerId, function(err, beer) {
                beer.bars.remove(req.params.barId);
                beer.save(function(err) {
                    res.redirect(`/bars/${req.params.barId}`);
                });
            });
        });
    });
}