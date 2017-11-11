console.log('connecting to database')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/thirsty-mongoose');

var db = mongoose.connection;

db.once('open', () => {
    console.log('DB Connected')
})
db.on('error', (err) => {
    console.error('DB FAIL ' + err)
})